# CI/CD Guide

## What CI/CD Means

CI means continuous integration. It runs checks automatically when code changes.

CD means continuous delivery or continuous deployment. It prepares or deploys software automatically.

This phase focuses on CI: running tests automatically with GitHub Actions.

## What GitHub Actions Is

GitHub Actions is GitHub's automation system.

It can run commands such as:

- Install dependencies
- Install browsers
- Run Playwright tests
- Upload report artifacts

## What A Workflow Is

A workflow is a YAML file that tells GitHub Actions what to do.

This repository uses:

```text
.github/workflows/playwright-tests.yml
```

## What Triggers The Workflow

The workflow runs when:

- Code is pushed to `main`
- A pull request targets `main`
- A user manually starts it with `workflow_dispatch`

## What Each Workflow Step Does

### Check Out Repository

Downloads the repository code into the GitHub Actions runner.

### Set Up Node.js

Installs Node.js so npm commands can run.

### Install Dependencies

Runs:

```bash
npm ci
```

This installs dependencies from `package-lock.json`.

### Install Playwright Browsers

Runs:

```bash
npx playwright install --with-deps
```

This installs browsers and Linux dependencies required by Playwright.

### Run Playwright Tests

Runs:

```bash
npx playwright test
```

In CI, Playwright uses the list reporter, HTML reporter, GitHub reporter, and Allure reporter.

### Upload Reports

The workflow uploads:

- `playwright-report/` as `playwright-html-report`
- `allure-results/` as `allure-raw-results`

## How To Open A GitHub Actions Run

1. Open the repository on GitHub.
2. Click the `Actions` tab.
3. Click the `Playwright Tests` workflow.
4. Open a workflow run.
5. Review the job logs and artifacts.

## How To Download Artifacts

1. Open the workflow run.
2. Scroll to `Artifacts`.
3. Download `playwright-html-report`.
4. Download `allure-raw-results` if troubleshooting or reporting integration is needed.

## Why Artifacts Upload Even When Tests Fail

The workflow uses:

```yaml
if: always()
```

This means reports are uploaded even if the test step fails. That is important because failed tests are when reports, screenshots, videos, and traces are most useful.

## Why No Sharding Or Browser Matrix Yet

This beginner repository keeps CI simple.

It does not yet use:

- Sharding
- Docker
- Deployment
- Scheduled runs
- Browser matrix
- GitHub Pages publishing

Those are useful later, but they add complexity before learners need it.
