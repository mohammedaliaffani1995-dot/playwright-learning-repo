import { expect, test } from '@playwright/test';
import postSchema from '../../../fixtures/api-schema/post.schema.json';
import { getPost, measureResponseTime, validateJsonSchema } from '../../../utils/api-helper';
import { createUniqueTitle } from '../../../utils/data-generator';

test('Solution API advanced: Validate JSON schema with a helper @solution-api @schema', async ({ request }) => {
  // Arrange
  const postId = 1;

  // Act
  const response = await getPost(request, postId);
  const responseBody = await response.json();
  const schemaResult = validateJsonSchema(responseBody, postSchema);

  // Assert
  expect(response.status()).toBe(200);
  expect(schemaResult.isValid).toBe(true);
});

test('Solution API advanced: Generate unique data and validate response time @solution-api', async ({ request }) => {
  // Arrange
  const uniqueTitle = createUniqueTitle('Solution API title');
  const maxResponseTimeMs = 3000;

  // Act
  const { response, durationMs } = await measureResponseTime(() =>
    request.post('https://jsonplaceholder.typicode.com/posts', {
      data: {
        title: uniqueTitle,
        body: 'Dynamic data solution example.',
        userId: 1
      }
    })
  );
  const responseBody = await response.json();

  // Assert
  expect(response.status()).toBe(201);
  expect(responseBody.title).toBe(uniqueTitle);
  expect(durationMs).toBeLessThan(maxResponseTimeMs);
});
