# Debugging Guide

Debugging means finding out why a test failed and what to do next.

## Run The Full Test Suite

```bash
npx playwright test
```

This runs all tests using the projects from `playwright.config.ts`.

The npm shortcut runs the default Chromium suite:

```bash
npm test
```

## Run One Folder

Run beginner UI tests:

```bash
npx playwright test tests/ui/beginner
```

Run API tests:

```bash
npx playwright test tests/api
```

## Run One Test File

```bash
npx playwright test tests/ui/beginner/01-open-webpage.spec.ts
```

## Run One Test By Title

```bash
npx playwright test -g "User can log in"
```

The `-g` option searches test titles.

## Run Tests In Headed Mode

```bash
npx playwright test --headed
```

Headed mode opens the browser so you can watch the test.

## Use UI Mode

```bash
npx playwright test --ui
```

UI mode lets you select tests, rerun tests, inspect actions, and watch what happened.

## Use Debug Mode

```bash
npx playwright test --debug
```

Debug mode pauses tests and opens Playwright Inspector.

## Read Error Messages

Start with:

- The test name
- The file and line number
- The expected value
- The received value
- The Playwright call log

The first useful error is usually near the top of the failure details.

## Use Screenshots

This project creates screenshots only on failure:

```ts
screenshot: 'only-on-failure'
```

Screenshots are stored in `test-results/`.

## Use Videos

This project keeps videos on failure:

```ts
video: 'retain-on-failure'
```

Videos help you see what happened before the failure.

## Open A Playwright Trace

This project keeps traces on failure:

```ts
trace: 'retain-on-failure'
```

Open a trace with:

```bash
npx playwright show-trace path-to-trace.zip
```

The trace viewer shows actions, locators, network calls, console messages, screenshots, and timing.

## Rerun Failed Tests

After fixing an issue, rerun the failed file or folder first.

Examples:

```bash
npx playwright test tests/ui/beginner
npx playwright test tests/api
npx playwright test -g "User can log in"
```

Then run the full suite:

```bash
npm test
```
