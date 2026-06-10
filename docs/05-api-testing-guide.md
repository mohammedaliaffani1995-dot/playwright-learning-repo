# Beginner API Testing Guide

This guide teaches beginner API testing with Playwright. The examples use JSONPlaceholder, a public demo API that does not require login or real data setup.

JSONPlaceholder guide: `https://jsonplaceholder.typicode.com/guide/`

## What Is An API?

An API is a way for one system to talk to another system.

For example, a website may ask an API for:

- User details
- Product data
- Blog posts
- Order history

UI testing checks what the user sees in the browser. API testing checks the data and behavior behind the scenes.

## What Is A Request?

A request is a message sent to an API.

It usually includes:

- An endpoint
- An HTTP method
- Optional headers
- Optional query parameters
- Optional request body

Example:

```text
GET https://jsonplaceholder.typicode.com/posts/1
```

## What Is A Response?

A response is the message the API sends back.

It usually includes:

- A status code
- Headers
- A response body

Example response body:

```json
{
  "userId": 1,
  "id": 1,
  "title": "example title",
  "body": "example body"
}
```

## What Is JSON?

JSON is a common format for API data.

JSON uses names and values:

```json
{
  "title": "Hello",
  "userId": 1
}
```

In Playwright tests, you often convert the API response body into JSON so you can check fields.

## What Is An Endpoint?

An endpoint is the URL for a specific API resource.

Example:

```text
https://jsonplaceholder.typicode.com/posts
```

This endpoint works with blog post data.

## What Are HTTP Methods?

HTTP methods describe what action you want to perform.

### GET

GET asks the API for data.

Example:

```text
GET /posts
```

### POST

POST sends new data to the API.

Example:

```text
POST /posts
```

### PUT

PUT replaces an existing resource.

Example:

```text
PUT /posts/1
```

### PATCH

PATCH updates part of an existing resource.

Example:

```text
PATCH /posts/1
```

### DELETE

DELETE asks the API to remove a resource.

Example:

```text
DELETE /posts/1
```

## What Are Headers?

Headers are extra information sent with a request or response.

Example request header:

```text
Content-Type: application/json
```

This tells the API that the request body is JSON.

## What Is A Request Body?

A request body is data sent with a request.

POST, PUT, and PATCH requests often use request bodies.

Example:

```json
{
  "title": "My first API test",
  "body": "This is test data",
  "userId": 1
}
```

## What Are Query Parameters?

Query parameters are values added after `?` in a URL.

Example:

```text
/posts?userId=1
```

This asks for posts where `userId` is `1`.

## What Are Path Parameters?

Path parameters are values inside the URL path.

Example:

```text
/posts/1
```

The `1` is a path parameter. It asks for the post with id `1`.

## What Do Status Codes Mean?

Status codes are numbers that describe the result of a request.

Common examples:

- `200`: success
- `201`: created
- `204`: success with no response body
- `400`: bad request
- `404`: not found
- `500`: server error

## Beginner API Tests In This Repository

The tests are in:

```text
tests/api/beginner/jsonplaceholder-beginner.spec.ts
```

They cover:

- Simple GET request
- GET request using a path parameter
- GET request using query parameters
- POST request with a request body
- Validating a status code
- Validating a response field
- Validating a response array
- Validating response headers

## How To Run API Tests

Run all API tests:

```bash
npm run test:api
```

Run only beginner API tests:

```bash
npm run test:api:beginner
```

Run only intermediate API tests:

```bash
npm run test:api:intermediate
```

Run only negative API tests:

```bash
npm run test:api:negative
```

Run only advanced API tests:

```bash
npm run test:api:advanced
```

Run API tests tagged as advanced:

```bash
npm run test:api:tag:advanced
```

Or:

```bash
npx playwright test tests/api/beginner
```

```bash
npx playwright test tests/api/intermediate
```

## Intermediate API Tests In This Repository

The intermediate tests are in:

```text
tests/api/intermediate/jsonplaceholder-intermediate.spec.ts
```

The fixture data is in:

```text
fixtures/api-test-data.json
```

Intermediate API testing adds more realistic request and response checks while keeping the code readable.

## Intermediate API Concepts

### Path Parameters

A path parameter is part of the endpoint path.

Example:

```text
/posts/1
```

The `1` tells the API which post to return.

### Query Parameters

Query parameters filter or modify a request.

Example:

```text
/posts?userId=1
```

This asks for posts where `userId` is `1`.

### Request Data From Fixture Files

Fixture files store test data outside the test file.

Example:

```ts
import apiTestData from '../../../fixtures/api-test-data.json';
```

This makes request bodies easier to reuse and update.

### Data-Driven API Tests

Data-driven tests run the same test idea with multiple values.

In Phase 7, the test loops through several post IDs from `fixtures/api-test-data.json`.

This is useful when you want to check the same behavior with different data.

### Positive And Negative API Tests

Positive API tests check expected successful behavior.

Examples:

- GET an existing post
- POST a request body
- PATCH one field

Negative API tests check how an API behaves with invalid input.

Examples:

- Invalid endpoint
- Invalid ID
- Missing fields

Negative tests in this repository include `@negative` in the test name so they can be run separately.

## Intermediate API Test Coverage

Phase 7 includes separate runnable examples for:

- GET request using a path parameter
- GET request using query parameters
- POST request
- PUT request
- PATCH request
- DELETE request
- Validating response fields
- Validating nested objects
- Validating arrays
- Validating response headers
- Negative test using an invalid endpoint
- Negative test using an invalid ID
- Negative test using missing fields
- Reading request data from fixture files
- Data-driven API tests using multiple fixture values

## How To Run Intermediate API Tests

Run only intermediate API tests:

```bash
npm run test:api:intermediate
```

Or:

```bash
npx playwright test tests/api/intermediate
```

Run advanced API tests:

```bash
npx playwright test tests/api/advanced
```

Run only negative API tests:

```bash
npm run test:api:negative
```

Or:

```bash
npx playwright test tests/api --grep @negative
```

## Advanced API Tests In This Repository

The advanced tests are in:

```text
tests/api/advanced/jsonplaceholder-advanced.spec.ts
```

The helper files are:

```text
utils/api-helper.ts
utils/data-generator.ts
```

The JSON schema files are:

```text
fixtures/api-schema/post.schema.json
fixtures/api-schema/user.schema.json
```

Phase 8 keeps helpers small and readable. The goal is to reduce repeated code without hiding how API testing works.

## Advanced API Concepts

### Reusable API Helper Methods

Reusable helper methods keep common API actions in one place.

Examples in `utils/api-helper.ts`:

- `getApiBaseUrl()` reads the API base URL from the environment.
- `createPost()` sends a POST request.
- `getPost()` sends a GET request for one post.
- `deletePost()` sends a DELETE request.
- `measureResponseTime()` times an API call.
- `validateJsonSchema()` validates response JSON against a schema.

Each helper exists to remove small repeated steps while keeping the test readable.

### Setup And Cleanup

Setup means creating or preparing data before the main assertion.

Cleanup means removing test data after the test no longer needs it.

JSONPlaceholder does not persist created data, but Phase 8 still demonstrates the pattern:

```text
Create demo post -> reuse returned ID -> delete demo post
```

### Chained API Calls

Chained API calls use data from one response in the next request.

Example:

```text
GET user -> GET that user's posts -> GET comments for the first post
```

### Dynamic Test Data

Dynamic data creates unique values for each test run.

Example:

```ts
createUniqueTitle('Unique advanced API title')
```

### Authentication Placeholders

Some APIs require a token.

JSONPlaceholder does not support a realistic authentication flow, so Phase 8 includes a skipped learning example tagged `@auth-placeholder`.

The example shows how to load `API_TOKEN` from an environment variable and send it as an `Authorization` header. It is skipped so the repository does not create a fake passing authentication test.

### Where Do API Tokens Come From?

The API tests in this repository use JSONPlaceholder, which does not require a token.

For real APIs, a token usually comes from one of these places:

- A developer portal for the API
- A login or authentication endpoint
- A QA or staging environment account
- A team member who manages test credentials
- A service account created for automation

For example, a real API might ask you to log in and then return a token:

```text
POST /login -> response contains access_token
```

You would copy that token into your local `.env` file:

```env
API_TOKEN=replace-with-your-real-test-token
```

Never commit a real token to Git. Keep real values in `.env`, and keep only safe placeholders in `.env.example`.

### Custom Headers

Headers send extra information with a request.

Phase 8 sends a custom learning header:

```text
X-Learning-Repo: playwright-api-phase-8
```

### JSON Schema Validation

JSON schema validation checks that a response has the expected shape.

Phase 8 uses `ajv` and schema files stored in `fixtures/api-schema`.

### Response-Time Validation

Response-time validation checks how long an API request takes.

Phase 8 reads the maximum allowed time from:

```text
API_TIMEOUT_MS
```

### Data-Driven Testing

Data-driven testing runs the same test with multiple data values.

Phase 8 uses user IDs from `fixtures/api-test-data.json`.

### Positive And Negative Scenario Separation

Positive tests verify successful behavior.

Negative tests verify invalid behavior.

Phase 7 introduced `@negative` tests. Phase 8 keeps advanced examples tagged separately with `@api-advanced`.

### API Tags

Tags let you run selected groups of tests.

Examples:

```text
@api-advanced
@schema
@performance
@data-driven
@smoke
@auth-placeholder
```

Run only advanced API tests by tag:

```bash
npm run test:api:tag:advanced
```

### Environment Configuration

Environment variables let tests use different values without changing code.

Copy `.env.example` to `.env`, then update values as needed:

```env
API_BASE_URL=https://jsonplaceholder.typicode.com
API_TOKEN=replace-with-demo-token-only
API_TIMEOUT_MS=3000
```

JSONPlaceholder does not require `API_TOKEN`, so the placeholder value is enough for this learning repository. If you test a real API later, get a test token from the API provider, login endpoint, developer portal, or your QA team.

Do not commit real credentials.

## Advanced API Test Coverage

Phase 8 includes examples for:

- Creating test data and reusing the returned ID
- Chaining multiple API requests
- Creating and deleting test data
- Generating unique test values
- Sending custom headers
- Loading a token from an environment variable as a skipped placeholder
- Validating JSON schema
- Validating response time
- Running tests using multiple data sets
- Running selected tests using tags

## How To Run Advanced API Tests

Run all advanced API tests:

```bash
npm run test:api:advanced
```

Run advanced API tests by tag:

```bash
npm run test:api:tag:advanced
```

Run schema tests:

```bash
npx playwright test tests/api/advanced --grep @schema
```

Run performance tests:

```bash
npx playwright test tests/api/advanced --grep @performance
```

## Public API Limitations

JSONPlaceholder is a public demo API. It is useful for learning, but it has limits:

- It does not save created, updated, or deleted data permanently.
- POST, PUT, PATCH, and DELETE responses are faked for practice.
- Missing required fields do not return realistic validation errors.
- It does not support a realistic authentication flow.
- The service can be temporarily unavailable.
- Network rules may block access in some environments.

Because of this, these tests check API behavior without depending on permanent server-side data changes. The missing-fields negative test clearly demonstrates the limitation instead of pretending JSONPlaceholder behaves like a production API.
