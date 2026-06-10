import { expect, test } from '@playwright/test';

const apiBaseUrl = 'https://jsonplaceholder.typicode.com';

test('Solution API beginner: GET request returns one post', async ({ request }) => {
  // Arrange
  const postId = 1;

  // Act
  const response = await request.get(`${apiBaseUrl}/posts/${postId}`);
  const responseBody = await response.json();

  // Assert
  expect(response.status()).toBe(200);
  expect(responseBody.id).toBe(postId);
});

test('Solution API beginner: POST request returns created data', async ({ request }) => {
  // Arrange
  const newPost = {
    title: 'Practice API solution',
    body: 'This is a beginner POST request body.',
    userId: 1
  };

  // Act
  const response = await request.post(`${apiBaseUrl}/posts`, {
    data: newPost
  });
  const responseBody = await response.json();

  // Assert
  expect(response.status()).toBe(201);
  expect(responseBody.title).toBe(newPost.title);
});
