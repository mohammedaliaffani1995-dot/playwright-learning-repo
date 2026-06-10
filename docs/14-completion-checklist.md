# Completion Checklist

Use this checklist to confirm that you completed the repository lessons and final project.

## Environment Setup

- [ ] I installed Node.js.
- [ ] I confirmed npm is installed.
- [ ] I installed Git.
- [ ] I cloned or opened the repository.
- [ ] I installed the project dependencies with `npm install`.
- [ ] I installed the Playwright browsers with `npx playwright install`.
- [ ] I created a local `.env` file when needed.
- [ ] I did not commit real credentials.

## TypeScript Basics

- [ ] I understand `const` and `let`.
- [ ] I can create strings, numbers, and booleans.
- [ ] I can create arrays.
- [ ] I can create objects.
- [ ] I can write a basic function.
- [ ] I can write an arrow function.
- [ ] I can use `if` and `else`.
- [ ] I can use a loop.
- [ ] I understand basic TypeScript types.
- [ ] I understand why Playwright uses `async` and `await`.
- [ ] I can import and export a helper function.
- [ ] I ran the TypeScript examples with `npm run examples:ts`.

## UI Testing

- [ ] I understand what a browser is.
- [ ] I understand what a webpage is.
- [ ] I understand what a UI test is.
- [ ] I can open a webpage.
- [ ] I can check a page title.
- [ ] I can find an element.
- [ ] I can fill an input field.
- [ ] I can click a button.
- [ ] I can check visible text.
- [ ] I can select a dropdown value.
- [ ] I can check a checkbox.
- [ ] I can take a screenshot.
- [ ] I can write positive UI tests.
- [ ] I can write negative UI tests.
- [ ] I can validate form errors.
- [ ] I can validate cart behavior.
- [ ] I can use Page Object Model when it helps readability.
- [ ] I know when a simple test is better than an abstraction.

## API Testing

- [ ] I understand what an API is.
- [ ] I understand requests and responses.
- [ ] I understand JSON.
- [ ] I understand endpoints.
- [ ] I understand headers.
- [ ] I understand request bodies.
- [ ] I understand path parameters.
- [ ] I understand query parameters.
- [ ] I understand status codes.
- [ ] I can send GET requests.
- [ ] I can send POST requests.
- [ ] I can send PUT or PATCH requests.
- [ ] I can send DELETE requests.
- [ ] I can validate response fields.
- [ ] I can validate arrays.
- [ ] I can validate nested objects.
- [ ] I can validate response headers.
- [ ] I can write negative API tests.
- [ ] I understand public demo API limitations.
- [ ] I can use API helpers when they make tests clearer.
- [ ] I can validate JSON schema.
- [ ] I can validate response time.

## Framework Concepts

- [ ] I understand the repository folder structure.
- [ ] I understand test data separation.
- [ ] I can read data from fixture files.
- [ ] I understand environment configuration.
- [ ] I understand reusable helper methods.
- [ ] I understand tags.
- [ ] I understand setup and cleanup.
- [ ] I understand retries.
- [ ] I understand parallel execution.
- [ ] I understand multiple-browser testing.
- [ ] I use meaningful test names.
- [ ] I keep assertions easy to find.

## Debugging

- [ ] I can run one test file.
- [ ] I can run one test by title.
- [ ] I can run tests in headed mode.
- [ ] I can run tests in debug mode.
- [ ] I can use Playwright UI mode.
- [ ] I can read a failed locator error.
- [ ] I can find screenshots for failed tests.
- [ ] I can find videos for failed tests.
- [ ] I can open a trace file.
- [ ] I can use the Playwright HTML report to investigate failures.

## Playwright Reporting

- [ ] I ran the test suite with `npm test`.
- [ ] I confirmed terminal output uses the list reporter.
- [ ] I confirmed `playwright-report/` is generated.
- [ ] I opened the Playwright HTML report.
- [ ] I know `playwright-report/` is ignored by Git.

## Allure Reporting

- [ ] I confirmed `allure-results/` is generated after tests run.
- [ ] I understand that `allure-results/` contains raw result data.
- [ ] I understand that this repository does not require the Allure CLI locally.
- [ ] I know `allure-results/` is ignored by Git.

## GitHub Actions CI/CD

- [ ] I understand the GitHub Actions workflow file.
- [ ] I know the workflow runs on pushes to `main`.
- [ ] I know the workflow runs on pull requests targeting `main`.
- [ ] I know the workflow can be triggered manually.
- [ ] I know CI installs dependencies using `npm ci`.
- [ ] I know CI installs Playwright browsers.
- [ ] I know CI runs Playwright tests.
- [ ] I know CI uploads the Playwright HTML report.
- [ ] I know CI uploads raw Allure results.
- [ ] I know artifacts are uploaded even when tests fail.

## Final Project

- [ ] I created final UI tests.
- [ ] I created final API tests.
- [ ] I used meaningful test names.
- [ ] I separated positive and negative scenarios.
- [ ] I used fixture data.
- [ ] I used Page Object Model where helpful.
- [ ] I used reusable API helpers where helpful.
- [ ] I generated dynamic test data.
- [ ] I added at least one UI tag.
- [ ] I added at least one API tag.
- [ ] I ran the final project tests locally.
- [ ] I ran the full main suite.
- [ ] I generated reports.
- [ ] I reviewed the GitHub Actions workflow result.

## Recommended Next Steps

These are optional future improvements. They are not implemented in this phase.

- Visual testing
- Accessibility testing
- Mobile-emulation testing
- Database validation
- Contract testing
- Docker
- CI sharding
- Browser matrices
- Scheduled CI runs
- GitHub Pages report publishing
- Allure report history
- Slack or Microsoft Teams notifications
