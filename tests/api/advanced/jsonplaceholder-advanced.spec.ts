import { expect, test } from '@playwright/test';
import apiTestData from '../../../fixtures/api-test-data.json';
import postSchema from '../../../fixtures/api-schema/post.schema.json';
import userSchema from '../../../fixtures/api-schema/user.schema.json';
import {
  createAuthHeaders,
  createJsonHeaders,
  createPost,
  deletePost,
  getApiBaseUrl,
  getApiToken,
  getPost,
  measureResponseTime,
  validateJsonSchema
} from '../../../utils/api-helper';
import { createPostData, createUniqueTitle } from '../../../utils/data-generator';

const apiBaseUrl = getApiBaseUrl();

test.describe('Advanced API tests: reusable helpers and chained calls @api-advanced', () => {
  test('Advanced API test: Create test data and reuse the returned ID @api-advanced', async ({ request }) => {
    // Arrange
    const requestBody = createPostData();

    // Act
    const createResponse = await createPost(request, requestBody);
    const createdPost = await createResponse.json();
    const createdPostId = createdPost.id;

    // Assert
    expect(createResponse.status()).toBe(201);
    expect(createdPostId).toBeDefined();
    expect(createdPost.title).toBe(requestBody.title);

    // JSONPlaceholder returns an ID for learning, but it does not persist the new post.
    expect(createdPostId).toBe(101);
  });

  test('Advanced API test: Chain multiple API requests @api-advanced', async ({ request }) => {
    // Arrange
    const userId = 1;

    // Act
    const userResponse = await request.get(`${apiBaseUrl}/users/${userId}`);
    const user = await userResponse.json();

    const postsResponse = await request.get(`${apiBaseUrl}/posts`, {
      params: {
        userId: user.id
      }
    });
    const posts = await postsResponse.json();

    const commentsResponse = await request.get(`${apiBaseUrl}/posts/${posts[0].id}/comments`);
    const comments = await commentsResponse.json();

    // Assert
    expect(userResponse.status()).toBe(200);
    expect(postsResponse.status()).toBe(200);
    expect(commentsResponse.status()).toBe(200);
    expect(posts.length).toBeGreaterThan(0);
    expect(comments.length).toBeGreaterThan(0);
  });

  test('Advanced API test: Create and delete demo test data @api-advanced', async ({ request }) => {
    // Arrange
    const requestBody = createPostData();

    // Act
    const createResponse = await createPost(request, requestBody);
    const createdPost = await createResponse.json();
    const deleteResponse = await deletePost(request, createdPost.id);
    const deleteBody = await deleteResponse.json();

    // Assert
    expect(createResponse.status()).toBe(201);
    expect(deleteResponse.status()).toBe(200);
    expect(deleteBody).toEqual({});
  });
});

test.describe('Advanced API tests: dynamic data and headers @api-advanced', () => {
  test('Advanced API test: Generate unique test values @api-advanced', async ({ request }) => {
    // Arrange
    const uniqueTitle = createUniqueTitle('Unique advanced API title');
    const requestBody = {
      title: uniqueTitle,
      body: 'Generated data keeps repeated test runs easy to identify.',
      userId: 1
    };

    // Act
    const response = await createPost(request, requestBody);
    const responseBody = await response.json();

    // Assert
    expect(response.status()).toBe(201);
    expect(responseBody.title).toBe(uniqueTitle);
  });

  test('Advanced API test: Send custom headers @api-advanced', async ({ request }) => {
    // Arrange
    const requestBody = apiTestData.newPost;
    const customHeaders = createJsonHeaders({
      'X-Learning-Repo': 'playwright-api-phase-8'
    });

    // Act
    const response = await request.post(`${apiBaseUrl}/posts`, {
      data: requestBody,
      headers: customHeaders
    });
    const responseBody = await response.json();

    // Assert
    expect(response.status()).toBe(201);
    expect(responseBody.title).toBe(requestBody.title);
  });

  test.skip('Advanced API learning example: Load a token from an environment variable @api-advanced @auth-placeholder', async ({
    request
  }) => {
    // JSONPlaceholder does not support a realistic authentication flow.
    // This placeholder shows how a token would be loaded and sent to an API that requires auth.
    const token = getApiToken();
    const authHeaders = createAuthHeaders(token);

    await request.get(`${apiBaseUrl}/posts/1`, {
      headers: authHeaders
    });
  });
});

test.describe('Advanced API tests: schema and performance validation @api-advanced', () => {
  test('Advanced API test: Validate JSON schema for a post @api-advanced @schema', async ({ request }) => {
    // Arrange
    const postId = 1;

    // Act
    const response = await getPost(request, postId);
    const responseBody = await response.json();
    const schemaResult = validateJsonSchema(responseBody, postSchema);

    // Assert
    expect(response.status()).toBe(200);
    expect(schemaResult.errors).toBeNull();
    expect(schemaResult.isValid).toBe(true);
  });

  test('Advanced API test: Validate JSON schema for a nested user object @api-advanced @schema', async ({ request }) => {
    // Arrange
    const userId = 1;

    // Act
    const response = await request.get(`${apiBaseUrl}/users/${userId}`);
    const responseBody = await response.json();
    const schemaResult = validateJsonSchema(responseBody, userSchema);

    // Assert
    expect(response.status()).toBe(200);
    expect(schemaResult.errors).toBeNull();
    expect(schemaResult.isValid).toBe(true);
  });

  test('Advanced API test: Validate response time @api-advanced @performance', async ({ request }) => {
    // Arrange
    const maxResponseTimeMs = Number(process.env.API_TIMEOUT_MS || 3000);

    // Act
    const { response, durationMs } = await measureResponseTime(() => getPost(request, 1));

    // Assert
    expect(response.status()).toBe(200);
    expect(durationMs).toBeLessThan(maxResponseTimeMs);
  });
});

test.describe('Advanced API tests: data-driven scenarios and tags @api-advanced', () => {
  for (const userId of apiTestData.userIds) {
    test(`Advanced API test: Run tests using multiple data sets for user ${userId} @api-advanced @data-driven`, async ({
      request
    }) => {
      // Arrange
      const endpoint = `${apiBaseUrl}/posts`;

      // Act
      const response = await request.get(endpoint, {
        params: {
          userId
        }
      });
      const responseBody = await response.json();

      // Assert
      expect(response.status()).toBe(200);
      expect(responseBody.length).toBeGreaterThan(0);
      expect(responseBody.every((post: { userId: number }) => post.userId === userId)).toBe(true);
    });
  }

  test('Advanced API test: Run selected tests using tags @api-advanced @smoke', async ({ request }) => {
    // Arrange
    const postId = 1;

    // Act
    const response = await getPost(request, postId);

    // Assert
    expect(response.status()).toBe(200);
  });
});
