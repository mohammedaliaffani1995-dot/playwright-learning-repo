# Final Project

The final project is a small but realistic Playwright automation suite. It combines UI testing, API testing, framework structure, debugging, reporting, and CI/CD.

Use the same public systems already used in this repository:

- UI website: `https://www.saucedemo.com/`
- API website: `https://jsonplaceholder.typicode.com`

Public demo systems are useful for learning, but they have limits. SauceDemo can change or become temporarily unavailable. JSONPlaceholder simulates create, update, and delete requests, but it does not persist new data or enforce realistic validation errors.

## Suggested Project Folders

Create your final project tests in separate files so they are easy to review:

```text
tests/ui/advanced/final-project-ui.spec.ts
tests/api/advanced/final-project-api.spec.ts
```

You may reuse:

- `pages/`
- `fixtures/`
- `utils/`
- `.env.example`

## Final Project UI Requirements

Create UI tests for the following scenarios:

1. Positive login test
2. Negative login test
3. Locked-out user validation
4. Product sorting test
5. Add-to-cart test
6. Remove-from-cart test
7. Cart-count validation
8. Checkout validation
9. Fixture-based test data
10. Page Object Model
11. Reusable page methods
12. At least one tagged test

## Final Project API Requirements

Create API tests for the following scenarios:

1. GET request test
2. POST request test
3. PUT or PATCH request test
4. DELETE request test
5. Negative API test
6. Path-parameter test
7. Query-parameter test
8. Fixture-based test data
9. Reusable API helper
10. Dynamic test-data generation
11. JSON schema validation
12. Response-time validation
13. At least one tagged API test

## Final Project Framework Requirements

Confirm that your project uses:

- Clear folder structure
- Meaningful test names
- Positive and negative test separation
- Page Object Model usage
- Fixture data
- Environment variables
- `.env.example`
- No real credentials committed
- Reusable helpers
- No hard-coded waits
- README instructions
- Debugging commands
- GitHub Actions workflow

## Final Project Reporting Requirements

Confirm that:

- Playwright HTML report is generated
- Playwright List Reporter is visible in terminal output
- Allure raw results are generated in `allure-results/`
- Screenshots are retained for failed tests
- Videos are retained for failed tests
- Traces are retained for failed tests
- GitHub Actions uploads the Playwright HTML report
- GitHub Actions uploads the Allure raw results

## Final Project CI/CD Requirements

Confirm that:

- GitHub Actions runs on pushes to `main`
- GitHub Actions runs on pull requests targeting `main`
- GitHub Actions can be triggered manually
- Dependencies are installed using `npm ci`
- Playwright browsers are installed
- Tests run in the CI workflow
- Reports are uploaded even when tests fail

## Step-By-Step Project Plan

1. Read the existing beginner, intermediate, and advanced examples.
2. Create one UI final project file.
3. Create one API final project file.
4. Reuse page objects only where they make the UI tests clearer.
5. Reuse API helpers only where they reduce repeated request setup.
6. Keep assertions in the tests so failures are easy to understand.
7. Add tags such as `@final-project`, `@smoke`, or `@api-final`.
8. Run only the final project files.
9. Run the full suite.
10. Generate reports.
11. Review failures with traces, screenshots, videos, and reports.
12. Push to GitHub and review the GitHub Actions workflow.

## Commands

Run the UI final project:

```bash
npx playwright test tests/ui/advanced/final-project-ui.spec.ts --project=chromium
```

Run the API final project:

```bash
npx playwright test tests/api/advanced/final-project-api.spec.ts --project=chromium
```

Run final project tests by tag:

```bash
npx playwright test --grep @final-project --project=chromium
```

Run the full main suite:

```bash
npm test
```

Generate and open the Playwright report:

```bash
npm run report:playwright
```

## Review Questions

Before you call the final project complete, answer these questions:

- Can another tester understand your test names?
- Are positive and negative scenarios separated?
- Are selectors readable and stable?
- Are there any hard-coded waits?
- Is test data stored in fixtures when it is reused?
- Are real credentials excluded from Git?
- Are generated reports ignored by Git?
- Can the tests run locally and in CI?
- Can you explain what each helper or page object method does?
