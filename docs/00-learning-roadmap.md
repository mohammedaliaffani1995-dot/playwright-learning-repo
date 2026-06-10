# Learning Roadmap

This repository is built in phases. Each phase introduces one group of skills before moving to the next.

## Phase 1: Setup And Repository Structure

Create the base Playwright TypeScript project, install dependencies, add configuration, and prepare the folder structure.

## Phase 2: TypeScript Basics

Learn the TypeScript basics needed for test automation, including variables, functions, objects, arrays, and simple types.

Guide: `docs/02-typescript-basics.md`

Complete these lessons before writing Playwright UI or API tests. The examples are intentionally small so you can focus on the code patterns that appear later in Playwright tests.

## Phase 3: Beginner UI Testing

Write first browser tests with simple actions such as opening pages, clicking buttons, filling fields, and checking visible text.

Guides:

- `docs/03-playwright-basics.md`
- `docs/04-ui-testing-guide.md`

Beginner UI tests are in `tests/ui/beginner`.

## Phase 4: Intermediate UI Testing

Learn better locators, assertions, test hooks, test data, and reusable page interactions.

Intermediate UI tests are in `tests/ui/intermediate`.

This phase introduces `test.describe`, `test.beforeEach`, positive and negative tests, fixture data, dropdown validation, cart validation, form validation, and error-message validation.

## Phase 5: Advanced UI Testing

Practice more advanced browser workflows, authentication, file uploads, downloads, multiple tabs, and test reliability.

Advanced UI tests are in `tests/ui/advanced`.

This phase introduces Page Object Model, advanced locator strategies, meaningful waits, file upload, popups, iframes, network interception, mocked responses, authentication state reuse, tags, multiple browsers, parallel execution, retries, and trace viewer usage.

Note: the file download example is skipped because no stable public demo download page is reliable enough for a beginner learning repository.

## Phase 6: Beginner API Testing

Send basic API requests and verify status codes, response bodies, and simple API behavior.

Guide: `docs/05-api-testing-guide.md`

Beginner API tests are in `tests/api/beginner`.

This phase introduces API requests, responses, JSON, endpoints, HTTP methods, headers, request bodies, query parameters, path parameters, and status codes.

## Phase 7: Intermediate API Testing

Work with request payloads, headers, authentication, test data setup, and response validation.

Intermediate API tests are in `tests/api/intermediate`.

This phase introduces PUT, PATCH, DELETE, nested object validation, array validation, response header validation, negative API tests, fixture-based request data, and data-driven API tests.

## Phase 8: Advanced API Testing

Practice API workflows, schema validation, retries, negative testing, and combining API setup with UI tests.

Advanced API tests are in `tests/api/advanced`.

This phase introduces reusable API helpers, setup and cleanup patterns, chained API calls, dynamic test data, authentication placeholders, custom headers, JSON schema validation, response-time validation, data-driven API tests, API tags, and environment configuration.

## Phase 9: Framework Structure

Organize tests with pages, fixtures, utilities, environment files, and reusable helpers.

Guides:

- `docs/06-framework-guide.md`
- `docs/07-best-practices.md`

This phase reviews the repository structure and explains when to use direct tests, reusable methods, Page Object Model, fixture data, tags, setup and cleanup, retries, parallel execution, multiple-browser testing, and environment configuration.

## Phase 10: Debugging, Reporting, And CI/CD

Use Playwright debugging tools, traces, screenshots, videos, HTML reports, and continuous integration pipelines.

Guides:

- `docs/08-debugging-guide.md`
- `docs/09-common-errors.md`
- `docs/10-ci-cd-guide.md`
- `docs/11-reporting-guide.md`

This phase introduces debugging commands, failure evidence, Playwright HTML reports, Allure reports, and a beginner-friendly GitHub Actions workflow.

## Phase 11: Practice Exercises And Final Project

Complete practice tasks and a final project that combines UI testing, API testing, framework structure, reporting, and CI/CD.

Guides:

- `docs/12-practice-challenges.md`
- `docs/13-final-project.md`
- `docs/14-completion-checklist.md`

This phase adds structured exercises, selected completed solutions, a final learner project, and a repository completion checklist.

## Final Recommended Learning Order

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
