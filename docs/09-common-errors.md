# Common Errors

This guide explains common beginner problems and what to try first.

## Node.js Is Not Installed

Symptom:

```text
npm is not recognized
node is not recognized
```

Check:

```bash
node --version
npm --version
```

Install Node.js LTS if these commands fail.

## Dependencies Were Not Installed

Symptom:

```text
Cannot find module
playwright is not recognized
```

Fix:

```bash
npm install
```

In CI, use:

```bash
npm ci
```

## Playwright Browsers Are Missing

Symptom:

```text
Executable doesn't exist
Please run: npx playwright install
```

Fix:

```bash
npx playwright install
```

## An Old Allure CLI Command Is Still Being Used

Symptom:

```text
report:allure command not found
```

Fix:

This repository does not use the Allure command-line tool locally. Run `npm test` to create `allure-results/`, and use `npm run report:playwright` to view the main HTML report.

## A Locator Cannot Find An Element

Symptom:

```text
locator resolved to 0 elements
```

Try:

- Check that the page opened correctly.
- Check that the locator text or role is correct.
- Run in headed mode.
- Use Playwright Inspector with debug mode.

## A Test Times Out

Symptom:

```text
Test timeout of 30000ms exceeded
```

Try:

- Check whether the page or API is reachable.
- Check whether the locator is correct.
- Avoid hard-coded waits.
- Use assertions that wait for the expected condition.

## A Public Demo Website Is Temporarily Unavailable

Public demo sites can be slow, changed, blocked, or down.

Try:

```bash
npx playwright test tests/ui/beginner --project=chromium
```

If the failure is a network error, try again later.

## A Test Works Locally But Fails In CI

Common causes:

- Missing environment variables
- Browser dependencies not installed
- Different operating system
- Public website or API blocked
- Test depends on another test

Check the GitHub Actions logs and uploaded artifacts.

## The HTML Report Is Missing

Run tests first:

```bash
npm test
```

Then open:

```bash
npm run report:playwright
```

The folder is:

```text
playwright-report/
```

## The Allure Results Folder Is Empty

Run tests after the Allure reporter is configured:

```bash
npm test
```

The raw results folder is:

```text
allure-results/
```

If no tests ran, this folder may be missing or empty.

## The Allure Results Are Not A Viewable HTML Report

`allure-results/` contains raw result files. It is useful for reporting integrations, but it is not the same as a browser-friendly HTML report.

Use the Playwright HTML report for local viewing:

```bash
npm run report:playwright
```

## A Screenshot, Video, Or Trace Was Not Generated

This project creates evidence on failure:

```text
screenshot: only-on-failure
video: retain-on-failure
trace: retain-on-failure
```

If the test passed, these files may not be created.
