import { expect, test } from '@playwright/test';
import apiTestData from '../../../fixtures/api-test-data.json';

const apiBaseUrl = apiTestData.baseUrl;

test('Solution API intermediate: Request data can come from a fixture file', async ({ request }) => {
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

test('Solution API intermediate: Invalid endpoint returns 404 @negative', async ({ request }) => {
  // Arrange
  const invalidEndpoint = `${apiBaseUrl}/this-endpoint-does-not-exist`;

  // Act
  const response = await request.get(invalidEndpoint);

  // Assert
  expect(response.status()).toBe(404);
});
