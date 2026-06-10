# Framework Structure Guide

This guide explains how the repository is organized and why it is structured this way. The goal is to make tests easier to read and maintain without making the project too complicated for beginners.

## Folder Organization

```text
docs/
examples/
fixtures/
pages/
tests/
utils/
solutions/
```

### `docs`

Learning guides live here. Each phase adds documentation before or alongside test examples.

### `examples`

Small TypeScript and Playwright examples live here. These are not full framework tests. They are for learning one idea at a time.

### `fixtures`

Test data lives here.

Examples:

- `fixtures/users.json`
- `fixtures/test-data.json`
- `fixtures/api-test-data.json`
- `fixtures/api-schema/`

Keeping data separate from test steps makes tests easier to update.

### `pages`

Page Object Model files live here.

Page objects are used only in advanced UI examples because beginner tests should stay direct and easy to follow.

### `tests`

Runnable Playwright tests live here.

```text
tests/ui/beginner
tests/ui/intermediate
tests/ui/advanced
tests/api/beginner
tests/api/intermediate
tests/api/advanced
```

This keeps the learning path clear.

### `utils`

Small reusable helper methods live here.

Examples:

- `utils/api-helper.ts`
- `utils/data-generator.ts`

Helpers should make tests easier to read. If a helper hides the important test behavior, it is probably too much abstraction.

## Page Object Model

Page Object Model means putting page-specific locators and actions into a class.

Example:

```ts
const loginPage = new LoginPage(page);

await loginPage.goto();
await loginPage.login('standard_user', 'secret_sauce');
```

Use Page Object Model when:

- The same page is used in many tests.
- The same locators are repeated often.
- A user workflow has several steps.
- Updating one page locator should update many tests.

Avoid Page Object Model when:

- The test is a beginner example.
- The test only uses one or two locators.
- The abstraction makes the test harder to understand.

## Test Data Separation

Test data is stored in JSON fixture files when the same values are reused.

Example:

```ts
import users from '../../../fixtures/users.json';
```

Use fixture data when:

- Login users are reused.
- Product names are reused.
- API request bodies are reused.
- Data-driven tests need multiple values.

For very small examples, inline values are still fine.

## Fixtures

In this repository, the word fixture usually means a data file in the `fixtures` folder.

Later, Playwright can also use test fixtures for shared setup. This repository does not introduce custom Playwright fixtures yet because that would add another framework layer.

## Environment Configuration

Environment values are loaded from `.env`.

Example:

```env
BASE_URL=https://www.saucedemo.com
API_BASE_URL=https://jsonplaceholder.typicode.com
API_TOKEN=replace-with-demo-token-only
API_TIMEOUT_MS=3000
```

Use environment variables for values that may change between machines or environments.

The demo API tests use JSONPlaceholder, so they do not need a real token. `API_TOKEN` is a placeholder for learning. In a real project, a token usually comes from an API developer portal, a login endpoint, a QA/staging test account, or a team-managed service account. Store real tokens only in `.env`, never in `.env.example`.

Do not commit real credentials.

## Reusable Helper Methods

Reusable helper methods live in `utils`.

Good helper example:

```ts
createPost(request, postData)
```

This is helpful because several API tests create a post.

Less helpful helper example:

```ts
clickButton(page, selector)
```

This hides a simple Playwright action without adding much value.

## Tags

Tags help run selected tests.

Examples:

```text
@smoke
@advanced
@negative
@api-advanced
@schema
@performance
```

Run tagged tests:

```bash
npx playwright test --grep @smoke
```

## Setup And Cleanup

Setup prepares the test.

Cleanup removes or resets test data after the test.

Example pattern:

```text
Create data -> use data -> delete data
```

JSONPlaceholder does not persist created data, but the advanced API tests still show the pattern.

## Parallel Execution

Playwright can run tests in parallel to save time.

This project enables:

```ts
fullyParallel: true
```

Parallel tests should not depend on each other. Each test should create or prepare the data it needs.

## Retries

Retries rerun a failed test.

This project uses:

```ts
retries: process.env.CI ? 2 : 1
```

Retries can help with temporary network issues, but they should not hide real bugs.

## Multiple-Browser Testing

The Playwright config includes:

- Chromium
- Firefox
- WebKit

Multiple-browser testing helps find browser-specific issues.

For a beginner-friendly default, npm scripts run Chromium unless the script name says otherwise. This avoids local setup surprises while learners are still practicing the basics.

Run the default suite in Chromium:

```bash
npm test
```

Run all configured browser projects:

```bash
npm run test:browsers
```

API tests also run under projects because Playwright uses projects for all tests. For faster local API-only learning, you can run one project:

```bash
npx playwright test tests/api --project=chromium
```

If Firefox or WebKit fails to launch, check the Playwright host dependency message. On Windows, missing Visual C++ runtime files such as `msvcp140_1.dll` can prevent some browsers from starting.

## Naming Conventions

Recommended naming:

- Test files: `feature-name.spec.ts`
- Page objects: `feature.page.ts`
- Helpers: `thing-helper.ts`
- Test data: `thing-data.json`
- Test names: start with the learning level and behavior

Example:

```ts
test('Beginner API test: GET request returns a successful status code', async ({ request }) => {
  // ...
});
```

## Current Design Choice

The repository intentionally uses different styles at different learning levels:

- Beginner tests are direct.
- Intermediate tests use small local helpers and fixture data.
- Advanced tests introduce page objects, API helpers, schema validation, and tags.

This makes the repository grow with the learner instead of forcing framework patterns too early.
