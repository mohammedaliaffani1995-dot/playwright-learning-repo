# Playwright Learning Repository

This repository is a beginner-friendly place to learn test automation with Playwright, TypeScript, Node.js, and npm.

It is designed for QA engineers and manual testers who may be new to coding. The lessons will be built step by step in phases, so you can learn one idea at a time.

## What Is Playwright?

Playwright is a testing tool that can control a real browser, such as Chromium, Firefox, or WebKit. It can click buttons, fill forms, check text, and verify that a web application works as expected.

Playwright is commonly used for:

- UI testing
- API testing
- End-to-end testing
- Debugging browser behavior
- Test reports and CI/CD pipelines

## What Is UI Testing?

UI testing checks what a user sees and does in the browser.

For example, a UI test can verify that:

- A login page opens
- A user can type into an input field
- A button can be clicked
- A success message appears
- An error message is shown for invalid data

UI tests help confirm that the visible parts of an application work correctly.

## What Is API Testing?

API testing checks how systems communicate behind the scenes.

An API test can send a request to an application and verify the response. For example, it can check that:

- A request returns the correct status code
- The response contains expected data
- An error is returned for invalid input

API tests are often faster than UI tests because they do not need to open a browser.

## What Are Node.js And npm?

Node.js lets JavaScript and TypeScript run on your computer outside of a browser.

npm is the package manager that comes with Node.js. It installs tools and libraries that the project needs, including Playwright.

## Software To Install

Before using this repository, install:

- Node.js LTS version
- npm, included with Node.js
- Git
- Visual Studio Code or another code editor

To check your installation, run:

```bash
node --version
npm --version
git --version
```

## How To Clone The Repository

Use this command after the repository is published to GitHub:

```bash
git clone <repository-url>
cd playwright-learning-repo
```

If you already have the folder on your computer, open a terminal inside `playwright-learning-repo`.

## Install Dependencies

Before running this command, make sure Node.js is installed on your computer. npm comes with Node.js.

Check with:

```bash
node --version
npm --version
```

Run:

```bash
npm install
```

This installs Playwright Test, TypeScript, and other project dependencies.

## Install Playwright Browsers

Run:

```bash
npx playwright install
```

This downloads the browsers that Playwright uses for testing.

## Learn TypeScript Basics

Before starting Playwright UI or API tests, complete the TypeScript basics guide:

```text
docs/02-typescript-basics.md
```

Run the TypeScript examples with:

```bash
npm run examples:ts
```

## Learn Beginner UI Testing

After completing the TypeScript basics, read:

```text
docs/03-playwright-basics.md
docs/04-ui-testing-guide.md
```

Run beginner UI tests with:

```bash
npm run test:ui
npx playwright test tests/ui/beginner
npx playwright test tests/ui/beginner --headed
```

Run intermediate UI tests with:

```bash
npm run test:ui:intermediate
npx playwright test tests/ui/intermediate
npx playwright test tests/ui/intermediate --headed
```

Run advanced UI tests with:

```bash
npm run test:ui:advanced
npx playwright test tests/ui/advanced
npx playwright test tests/ui/advanced --headed
```

## Learn Beginner API Testing

After the UI testing phases, read:

```text
docs/05-api-testing-guide.md
```

Run beginner API tests with:

```bash
npm run test:api:beginner
npx playwright test tests/api/beginner
```

Run intermediate API tests with:

```bash
npm run test:api:intermediate
npx playwright test tests/api/intermediate
```

Run negative API tests with:

```bash
npm run test:api:negative
npx playwright test tests/api --grep @negative
```

Run advanced API tests with:

```bash
npm run test:api:advanced
npx playwright test tests/api/advanced
```

Run advanced API tests by tag:

```bash
npm run test:api:tag:advanced
```

The public API used in this repository does not require a real token. `.env.example` includes `API_TOKEN` only as a placeholder so learners can see how real APIs usually handle authentication. For a real API, get a test token from the API provider, developer portal, login endpoint, or QA team, then store it only in your local `.env` file.

## Learn Framework Structure And Best Practices

After the beginner, intermediate, and advanced UI/API examples, read:

```text
docs/06-framework-guide.md
docs/07-best-practices.md
```

These guides explain how the repository is organized and when to use direct tests, helpers, page objects, fixture data, tags, retries, and multiple-browser testing.

## Learn Debugging, Reporting, And CI/CD

For debugging, common errors, reporting, and GitHub Actions, read:

```text
docs/08-debugging-guide.md
docs/09-common-errors.md
docs/10-ci-cd-guide.md
docs/11-reporting-guide.md
```

The Playwright HTML report is the easiest report to view. Allure raw result files are also generated during test runs and saved in `allure-results/` for reporting practice or future CI integrations.

## Practice Challenges And Final Project

After you finish the guided lessons, complete the practice challenges and final project:

```text
docs/12-practice-challenges.md
docs/13-final-project.md
docs/14-completion-checklist.md
```

The `solutions/` folder contains selected completed examples. These files are excluded from the normal Playwright test run because the main test suite only runs files under `tests/`.

## Reporting

Run tests:

```bash
npm test
```

Open the native Playwright HTML report:

```bash
npm run report:playwright
```

Allure raw result files are generated automatically when tests run:

```text
allure-results/
```

This repository does not require Java because it does not use the Allure command-line tool locally.

## Run Tests

UI tests are available in beginner, intermediate, and advanced folders. Beginner API tests are also available.

Run all tests:

```bash
npm test
```

Run all configured browser projects:

```bash
npm run test:browsers
```

Run UI tests:

```bash
npm run test:ui
```

Run beginner UI tests:

```bash
npm run test:ui:beginner
```

Run intermediate UI tests:

```bash
npm run test:ui:intermediate
```

Run advanced UI tests:

```bash
npm run test:ui:advanced
```

Run tests by tag:

```bash
npm run test:tag:smoke
npm run test:tag:advanced
npx playwright test --grep @advanced
```

Open the Playwright report:

```bash
npm run report:playwright
```

Open a trace file:

```bash
npx playwright show-trace path/to/trace.zip
```

Run API tests:

```bash
npm run test:api
```

Run beginner API tests:

```bash
npm run test:api:beginner
```

Run intermediate API tests:

```bash
npm run test:api:intermediate
```

Run negative API tests:

```bash
npm run test:api:negative
```

Run advanced API tests:

```bash
npm run test:api:advanced
```

Run advanced API tests by tag:

```bash
npm run test:api:tag:advanced
```

Run tests in headed mode:

```bash
npm run test:headed
```

Run tests in debug mode:

```bash
npm run test:debug
```

Open Playwright UI mode:

```bash
npm run test:ui-mode
```

Open the HTML report:

```bash
npm run report
```

## Playwright Do's, Don'ts, And Recommendations

Use these notes as a quick checklist when writing UI and API tests.

### General Do's

- Do write clear test names that describe the user or API behavior.
- Do keep each test focused on one main idea.
- Do use the Arrange, Act, Assert pattern when it makes the test easier to read.
- Do keep assertions close to the behavior being checked.
- Do store reused test data in `fixtures/`.
- Do use `.env` for local environment values.
- Do keep only safe placeholder values in `.env.example`.
- Do run one file or one test title when debugging.
- Do read Playwright error messages carefully before changing code.
- Do use reports, traces, screenshots, and videos to understand failures.

### General Don'ts

- Do not commit real usernames, passwords, tokens, or private URLs.
- Do not use `waitForTimeout()` as a normal waiting strategy.
- Do not create complicated helper methods before the test has repeated code.
- Do not hide important assertions inside helpers unless there is a clear reason.
- Do not make one large test that checks too many unrelated things.
- Do not depend on tests running in a specific order.
- Do not ignore flaky tests. Investigate whether the issue is the test, the app, the data, or the environment.

### UI Test Recommendations

- Prefer user-facing locators such as `getByRole`, `getByLabel`, `getByText`, and `getByPlaceholder`.
- Use stable attributes like `data-test` when user-facing locators are not enough.
- Validate what a real user would care about, such as visible text, page state, cart count, or error messages.
- Keep positive and negative scenarios in separate `test()` blocks.
- Use Page Object Model when a page has repeated actions or locators.
- Keep beginner tests simple before introducing page objects.
- Use Playwright auto-waiting and assertions instead of hard-coded waits.
- Use headed mode, debug mode, UI mode, screenshots, videos, and traces when investigating failures.
- Remember that public demo websites can be slow, changed, or temporarily unavailable.

### UI Test Don'ts

- Do not select elements by long CSS paths when a readable locator is available.
- Do not assert only that a click happened. Assert the user-visible result after the click.
- Do not put every locator in a page object if the test is still easier to read directly.
- Do not test many complete workflows in one test unless the scenario truly belongs together.

### API Test Recommendations

- Start by validating the status code.
- Validate important response fields, not every field in the response.
- Use path parameters and query parameters clearly.
- Store reused request bodies in fixture files.
- Keep positive and negative API tests separate.
- Use data-driven tests when the same behavior should be checked with multiple IDs or inputs.
- Use helper methods for repeated request setup, such as common headers or base URLs.
- Use schema validation for important response shapes after you understand basic field assertions.
- Use response-time checks with generous limits for public APIs.
- Document public API limitations honestly.

### API Test Don'ts

- Do not pretend a public demo API validates data if it does not.
- Do not assume POST, PUT, PATCH, or DELETE data is permanently saved when using JSONPlaceholder.
- Do not hard-code real tokens in test files.
- Do not commit `.env`.
- Do not use an authentication placeholder as proof that real authentication works.
- Do not overuse schema validation before learners understand basic response checks.

### Recommended Test Strategy

- Use API tests for fast checks of data, status codes, headers, and backend behavior.
- Use UI tests for critical user journeys and visual browser behavior.
- Use fewer end-to-end UI tests than API tests because UI tests are usually slower and more sensitive to environment issues.
- Tag important smoke tests so they can run quickly before larger test suites.
- Keep the default beginner command simple with Chromium, then use multiple browsers when you are ready.

## Folder Structure

```text
playwright-learning-repo/
|-- docs/
|   |-- 00-learning-roadmap.md
|   |-- 01-installation-guide.md
|   |-- 02-typescript-basics.md
|   |-- 03-playwright-basics.md
|   |-- 04-ui-testing-guide.md
|   |-- 05-api-testing-guide.md
|   |-- 06-framework-guide.md
|   |-- 07-best-practices.md
|   |-- 08-debugging-guide.md
|   |-- 09-common-errors.md
|   |-- 10-ci-cd-guide.md
|   |-- 11-reporting-guide.md
|   |-- 12-practice-challenges.md
|   |-- 13-final-project.md
|   `-- 14-completion-checklist.md
|-- examples/
|   |-- assertion-examples.spec.ts
|   |-- locator-examples.spec.ts
|   |-- wait-strategy-examples.spec.ts
|   `-- typescript-basics/
|-- fixtures/
|   |-- api-schema/
|   |-- api-test-data.json
|   |-- test-data.json
|   |-- upload-example.txt
|   `-- users.json
|-- pages/
|   |-- cart.page.ts
|   |-- checkout.page.ts
|   |-- inventory.page.ts
|   `-- login.page.ts
|-- solutions/
|   |-- api/
|   |   |-- advanced/
|   |   |-- beginner/
|   |   `-- intermediate/
|   `-- ui/
|       |-- advanced/
|       |-- beginner/
|       `-- intermediate/
|-- tests/
|   |-- api/
|   |   |-- advanced/
|   |   |-- beginner/
|   |   `-- intermediate/
|   `-- ui/
|       |-- advanced/
|       |-- beginner/
|       `-- intermediate/
`-- utils/
    |-- api-helper.ts
    `-- data-generator.ts
```

## How To Use This Repository

Start with the documentation in the `docs` folder.

Recommended order:

1. Install the required software.
2. Complete the TypeScript basics guide.
3. Run beginner UI tests.
4. Run intermediate UI tests.
5. Run advanced UI tests.
6. Run beginner API tests.
7. Run intermediate API tests.
8. Run advanced API tests.
9. Review framework best practices.
10. Learn debugging and reporting.
11. Review GitHub Actions CI/CD.
12. Complete practice challenges.
13. Complete the final project.
14. Use the completion checklist.

Do not worry if you are new to coding. The repository grows from small examples to realistic workflows one step at a time.
