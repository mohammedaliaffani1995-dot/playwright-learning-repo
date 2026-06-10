import { expect, test } from '@playwright/test';
import apiTestData from '../../../fixtures/api-test-data.json';

const apiBaseUrl = apiTestData.baseUrl;

test('Intermediate API test: GET request using a path parameter returns one post', async ({ request }) => {
  // Arrange
  const postId = 1;

  // Act
  const response = await request.get(`${apiBaseUrl}/posts/${postId}`);
  const responseBody = await response.json();

  // Assert
  expect(response.status()).toBe(200);
  expect(responseBody.id).toBe(postId);
});

test('Intermediate API test: GET request using query parameters returns posts for one user', async ({ request }) => {
  // Arrange
  const userId = 1;

  // Act
  const response = await request.get(`${apiBaseUrl}/posts`, {
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

test('Intermediate API test: POST request creates a demo post from a request body', async ({ request }) => {
  // Arrange
  const requestBody = apiTestData.newPost;

  // Act
  const response = await request.post(`${apiBaseUrl}/posts`, {
    data: requestBody
  });
  const responseBody = await response.json();

  // Assert
  expect(response.status()).toBe(201);
  expect(responseBody.title).toBe(requestBody.title);
  expect(responseBody.body).toBe(requestBody.body);
  expect(responseBody.userId).toBe(requestBody.userId);
  expect(responseBody.id).toBeDefined();
});

test('Intermediate API test: PUT request replaces a demo post', async ({ request }) => {
  // Arrange
  const postId = apiTestData.replacePost.id;
  const requestBody = apiTestData.replacePost;

  // Act
  const response = await request.put(`${apiBaseUrl}/posts/${postId}`, {
    data: requestBody
  });
  const responseBody = await response.json();

  // Assert
  expect(response.status()).toBe(200);
  expect(responseBody.id).toBe(postId);
  expect(responseBody.title).toBe(requestBody.title);
  expect(responseBody.body).toBe(requestBody.body);
});

test('Intermediate API test: PATCH request updates one field on a demo post', async ({ request }) => {
  // Arrange
  const postId = 1;
  const requestBody = apiTestData.updatePost;

  // Act
  const response = await request.patch(`${apiBaseUrl}/posts/${postId}`, {
    data: requestBody
  });
  const responseBody = await response.json();

  // Assert
  expect(response.status()).toBe(200);
  expect(responseBody.id).toBe(postId);
  expect(responseBody.title).toBe(requestBody.title);
});

test('Intermediate API test: DELETE request removes a demo post', async ({ request }) => {
  // Arrange
  const postId = 1;

  // Act
  const response = await request.delete(`${apiBaseUrl}/posts/${postId}`);
  const responseBody = await response.json();

  // Assert
  expect(response.status()).toBe(200);
  expect(responseBody).toEqual({});
});

test('Intermediate API test: Response fields match expected post data', async ({ request }) => {
  // Arrange
  const postId = 1;

  // Act
  const response = await request.get(`${apiBaseUrl}/posts/${postId}`);
  const responseBody = await response.json();

  // Assert
  expect(responseBody).toHaveProperty('userId');
  expect(responseBody).toHaveProperty('id', postId);
  expect(responseBody).toHaveProperty('title');
  expect(responseBody).toHaveProperty('body');
});

test('Intermediate API test: Response contains nested object data', async ({ request }) => {
  // Arrange
  const userId = 1;

  // Act
  const response = await request.get(`${apiBaseUrl}/users/${userId}`);
  const responseBody = await response.json();

  // Assert
  expect(response.status()).toBe(200);
  expect(responseBody.address.city).toBe('Gwenborough');
  expect(responseBody.company.name).toBe('Romaguera-Crona');
});

test('Intermediate API test: Response contains an array of posts', async ({ request }) => {
  // Arrange
  const userId = 1;

  // Act
  const response = await request.get(`${apiBaseUrl}/users/${userId}/posts`);
  const responseBody = await response.json();

  // Assert
  expect(response.status()).toBe(200);
  expect(Array.isArray(responseBody)).toBe(true);
  expect(responseBody.length).toBeGreaterThan(0);
});

test('Intermediate API test: Response headers include JSON content type', async ({ request }) => {
  // Arrange
  const postId = 1;

  // Act
  const response = await request.get(`${apiBaseUrl}/posts/${postId}`);

  // Assert
  expect(response.headers()['content-type']).toContain('application/json');
});

test('Intermediate API test: Invalid endpoint returns not found @negative', async ({ request }) => {
  // Arrange
  const invalidEndpoint = `${apiBaseUrl}/not-a-real-resource`;

  // Act
  const response = await request.get(invalidEndpoint);

  // Assert
  expect(response.status()).toBe(404);
});

test('Intermediate API test: Invalid post ID returns not found @negative', async ({ request }) => {
  // Arrange
  const invalidPostId = 999999;

  // Act
  const response = await request.get(`${apiBaseUrl}/posts/${invalidPostId}`);
  const responseBody = await response.json();

  // Assert
  expect(response.status()).toBe(404);
  expect(responseBody).toEqual({});
});

test('Intermediate API test: Missing fields show JSONPlaceholder validation limitation @negative', async ({ request }) => {
  // Arrange
  const requestBody = apiTestData.missingFieldsPost;

  // Act
  const response = await request.post(`${apiBaseUrl}/posts`, {
    data: requestBody
  });
  const responseBody = await response.json();

  // Assert
  // JSONPlaceholder is a demo API. It accepts incomplete POST bodies instead of returning a validation error.
  expect(response.status()).toBe(201);
  expect(responseBody.title).toBe(requestBody.title);
  expect(responseBody.body).toBeUndefined();
  expect(responseBody.userId).toBeUndefined();
});

test('Intermediate API test: Request data can be read from a fixture file', async ({ request }) => {
  // Arrange
  const requestBody = apiTestData.newPost;

  // Act
  const response = await request.post(`${apiBaseUrl}/posts`, {
    data: requestBody
  });
  const responseBody = await response.json();

  // Assert
  expect(response.status()).toBe(201);
  expect(responseBody.title).toBe(requestBody.title);
});

for (const postId of apiTestData.postIds) {
  test(`Intermediate API test: Data-driven GET request returns post ${postId}`, async ({ request }) => {
    // Arrange
    const endpoint = `${apiBaseUrl}/posts/${postId}`;

    // Act
    const response = await request.get(endpoint);
    const responseBody = await response.json();

    // Assert
    expect(response.status()).toBe(200);
    expect(responseBody.id).toBe(postId);
  });
}
