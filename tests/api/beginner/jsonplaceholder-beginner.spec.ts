import { expect, test } from '@playwright/test';

const apiBaseUrl = 'https://jsonplaceholder.typicode.com';

test('Beginner API test: Simple GET request returns posts', async ({ request }) => {
  // Arrange
  const endpoint = `${apiBaseUrl}/posts`;

  // Act
  const response = await request.get(endpoint);

  // Assert
  expect(response.ok()).toBe(true);
});

test('Beginner API test: GET request using a path parameter returns one post', async ({ request }) => {
  // Arrange
  const postId = 1;
  const endpoint = `${apiBaseUrl}/posts/${postId}`;

  // Act
  const response = await request.get(endpoint);
  const responseBody = await response.json();

  // Assert
  expect(response.status()).toBe(200);
  expect(responseBody.id).toBe(postId);
});

test('Beginner API test: GET request using query parameters returns matching posts', async ({ request }) => {
  // Arrange
  const userId = 1;
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
  expect(responseBody[0].userId).toBe(userId);
});

test('Beginner API test: POST request sends a request body', async ({ request }) => {
  // Arrange
  const endpoint = `${apiBaseUrl}/posts`;
  const newPost = {
    title: 'Beginner API test',
    body: 'This is a simple request body.',
    userId: 1
  };

  // Act
  const response = await request.post(endpoint, {
    data: newPost
  });
  const responseBody = await response.json();

  // Assert
  expect(response.status()).toBe(201);
  expect(responseBody.title).toBe(newPost.title);
  expect(responseBody.body).toBe(newPost.body);
  expect(responseBody.userId).toBe(newPost.userId);
});

test('Beginner API test: GET request returns a successful status code', async ({ request }) => {
  // Arrange
  const endpoint = `${apiBaseUrl}/posts/1`;

  // Act
  const response = await request.get(endpoint);

  // Assert
  expect(response.status()).toBe(200);
});

test('Beginner API test: Response body contains an expected field', async ({ request }) => {
  // Arrange
  const endpoint = `${apiBaseUrl}/posts/1`;

  // Act
  const response = await request.get(endpoint);
  const responseBody = await response.json();

  // Assert
  expect(responseBody).toHaveProperty('title');
  expect(typeof responseBody.title).toBe('string');
});

test('Beginner API test: Response body returns an array', async ({ request }) => {
  // Arrange
  const endpoint = `${apiBaseUrl}/posts`;

  // Act
  const response = await request.get(endpoint);
  const responseBody = await response.json();

  // Assert
  expect(Array.isArray(responseBody)).toBe(true);
  expect(responseBody.length).toBeGreaterThan(0);
});

test('Beginner API test: Response includes expected headers', async ({ request }) => {
  // Arrange
  const endpoint = `${apiBaseUrl}/posts/1`;

  // Act
  const response = await request.get(endpoint);

  // Assert
  expect(response.headers()['content-type']).toContain('application/json');
});
