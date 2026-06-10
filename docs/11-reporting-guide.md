# Reporting Guide

## What Is A Test Report?

A test report shows what happened during a test run.

It usually shows:

- Which tests passed
- Which tests failed
- Error messages
- Screenshots
- Videos
- Traces
- Timings

## Why Reports Are Useful

Reports help you understand failures without rerunning every test immediately.

They are especially useful in CI because the test ran on another machine.

## Terminal Output Vs HTML Report

Terminal output is quick and readable while tests run.

This project uses the Playwright list reporter for terminal output.

An HTML report is easier to explore after the run finishes.

## Playwright HTML Report

The Playwright HTML report is the main report learners should open and review.

Run tests:

```bash
npm test
```

Open the Playwright report:

```bash
npm run report:playwright
```

The generated folder is:

```text
playwright-report/
```

You can also inspect the generated files in that folder.

## Allure Raw Results

This project uses `allure-playwright` to write raw Allure result files during the Playwright run.

Those files are stored in:

```text
allure-results/
```

These raw files are useful for reporting practice or future integrations, but they are not a local HTML dashboard by themselves.

## Why There Are No Allure CLI Commands

The Playwright test runner does not require Java.

The Allure command-line tool is commonly used to convert `allure-results/` into an HTML report, but that tool requires Java. To keep this repository beginner-friendly and easy to run, this project does not use the Allure CLI locally.

That means:

- Playwright tests do not require Java.
- Playwright HTML reports do not require Java.
- Allure raw result files do not require Java.
- There is no local `allure-report/` generation command in this project.

## Generated Report Folders Are Ignored By Git

Generated report folders can be large and change every test run.

This repository ignores:

```text
playwright-report/
test-results/
allure-results/
allure-report/
```

## Download Reports From GitHub Actions

1. Open the repository on GitHub.
2. Click `Actions`.
3. Open a `Playwright Tests` workflow run.
4. Scroll to `Artifacts`.
5. Download `playwright-html-report`.
6. Download `allure-raw-results` if needed for reporting integration or troubleshooting.
