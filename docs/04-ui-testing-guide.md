# Beginner UI Testing Guide

This guide explains the beginner UI tests in `tests/ui/beginner`.

Run all UI tests:

```bash
npm run test:ui
```

Run only beginner UI tests:

```bash
npx playwright test tests/ui/beginner
```

Run beginner UI tests with the browser visible:

```bash
npx playwright test tests/ui/beginner --headed
```

Run only intermediate UI tests:

```bash
npm run test:ui:intermediate
```

You can also run the same tests with Playwright directly:

```bash
npx playwright test tests/ui/intermediate
```

## Test 1: Opening A Webpage

File: `tests/ui/beginner/01-open-webpage.spec.ts`

This test opens the SauceDemo login page and checks that the page URL contains `saucedemo.com`.

What you learn:

- How to use `page.goto()`
- How to check the browser URL

## Test 2: Checking The Page Title

File: `tests/ui/beginner/02-check-page-title.spec.ts`

This test opens SauceDemo and checks that the browser page title is `Swag Labs`.

What you learn:

- How page titles work
- How to use `toHaveTitle()`

## Test 3: Finding An Element

File: `tests/ui/beginner/03-find-element.spec.ts`

This test finds the username field on the login page.

What you learn:

- What a locator is
- How to use `getByPlaceholder()`
- How to check that an element is visible

## Test 4: Entering Text Into An Input Field

File: `tests/ui/beginner/04-enter-text.spec.ts`

This test types a username into the username field and checks that the field contains the typed value.

What you learn:

- How to use `fill()`
- How to use `toHaveValue()`

## Test 5: Clicking A Button

File: `tests/ui/beginner/05-click-button.spec.ts`

This test clicks the login button without entering a username, then checks that an error message appears.

What you learn:

- How to click a button
- How button clicks can change the page

## Test 6: Checking Whether An Element Is Visible

File: `tests/ui/beginner/06-element-visible.spec.ts`

This test checks that the SauceDemo login logo is visible.

What you learn:

- How to check visibility
- Why visible elements matter in UI testing

## Test 7: Validating Visible Text

File: `tests/ui/beginner/07-visible-text.spec.ts`

This test clicks the login button and checks the exact error text shown to the user.

What you learn:

- How to find visible text
- How to check user-facing messages

## Test 8: Selecting A Dropdown Value

File: `tests/ui/beginner/08-select-dropdown.spec.ts`

This test opens a simple dropdown page and selects Option 1.

What you learn:

- How dropdowns work
- How to use `selectOption()`
- How to check the selected value

## Test 9: Checking A Checkbox

File: `tests/ui/beginner/09-check-checkbox.spec.ts`

This test opens a simple checkbox page, checks the first checkbox, and verifies that it is checked.

What you learn:

- How checkboxes work
- How to use `check()`
- How to use `toBeChecked()`

## Test 10: Taking A Screenshot

File: `tests/ui/beginner/10-take-screenshot.spec.ts`

This test opens SauceDemo and saves a screenshot to the Playwright test output folder.

What you learn:

- How to use `page.screenshot()`
- Where Playwright stores test output files

## Public Demo Website Limitations

Public demo websites are helpful for learning, but they are not controlled by this repository.

Possible limitations:

- The website may be temporarily unavailable.
- The website may respond slowly.
- The website may change its text or HTML.
- Your network may block access.

If a test fails because a public website is unavailable, try again later before changing the test.

# Intermediate UI Testing Guide

The intermediate tests are in `tests/ui/intermediate`.

These tests continue using SauceDemo because it has a stable login page, inventory page, cart page, and checkout flow.

## New Playwright Concepts

### `test.describe`

`test.describe` groups related tests together.

Example:

```ts
test.describe('Login tests', () => {
  test('User can log in', async ({ page }) => {
    // Test steps go here
  });
});
```

We use it to group login tests, cart tests, checkout tests, and fixture-data tests.

### `test.beforeEach`

`test.beforeEach` runs before each test in a group.

Example:

```ts
test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
});
```

This keeps repeated setup steps in one place.

### Reusing Setup Steps

Some tests need the same starting point. For example, cart tests need a logged-in user.

In Phase 4, the tests use small helper functions such as `login()` and `loginAsValidUser()` to avoid repeating the same login steps. These helpers stay inside the test file so the structure remains easy to understand.

### Positive And Negative Tests

A positive test checks that something works when valid information is used.

Example:

- Successful login
- Completing a checkout form

A negative test checks that the application handles invalid or missing information correctly.

Example:

- Invalid password
- Empty username
- Missing checkout first name

Positive and negative scenarios are kept in separate `test()` blocks so each test has one clear purpose.

### Reading Test Data From Fixture Files

Fixture files store reusable test data.

Phase 4 adds:

```text
fixtures/users.json
fixtures/test-data.json
```

The tests import these files and use the data for login, products, sorting, and checkout forms.

Example:

```ts
import users from '../../../fixtures/users.json';
```

This helps learners see how test data can live outside the test file.

## Intermediate Test Coverage

### Successful Login

Checks that a valid user can log in and reach the inventory page.

Concepts:

- Positive testing
- Reusing fixture data
- URL validation
- Visible text validation

### Login With An Invalid Password

Checks that an invalid password shows an error message.

Concepts:

- Negative testing
- Error-message validation

### Login With An Empty Username

Checks that submitting the login form without a username shows a required-field error.

Concepts:

- Form validation
- Required fields

### Login With An Empty Password

Checks that submitting the login form without a password shows a required-field error.

Concepts:

- Form validation
- Error-message validation

### Sorting Products

Checks that the product sort dropdown can change the product order.

Concepts:

- Dropdown validation
- `selectOption()`
- Checking selected values

### Adding One Product To The Cart

Checks that one product can be added and the cart count becomes `1`.

Concepts:

- Cart validation
- Button clicks
- Badge text validation

### Adding Multiple Products To The Cart

Checks that adding two products updates the cart count to `2`.

Concepts:

- Repeated actions
- Cart-count validation

### Removing A Product From The Cart

Checks that a product can be removed from the cart and the cart count updates.

Concepts:

- Cart item validation
- Removing items

### Validating The Cart Count

Checks that adding three products shows a cart count of `3`.

Concepts:

- Count validation
- Visible badge validation

### Completing A Checkout Form

Checks that a user can fill in checkout details and continue to the overview page.

Concepts:

- Form filling
- Form submission
- Checkout validation

### Validating A Required-Field Error Message

Checks that leaving the first name empty shows the correct checkout error.

Concepts:

- Negative checkout testing
- Required-field validation

### Navigating Between Pages

Checks that the user can move from inventory to cart and back to inventory.

Concepts:

- Page navigation
- URL assertions
- Visible page-heading validation

### Using Fixture Data

Checks that login data can be read from a JSON fixture file.

Concepts:

- Fixture files
- Data reuse
- Keeping test data separate from test steps

## How To Run Intermediate UI Tests

Run only intermediate UI tests:

```bash
npm run test:ui:intermediate
```

Or:

```bash
npx playwright test tests/ui/intermediate
```

Run them with the browser visible:

```bash
npx playwright test tests/ui/intermediate --headed
```

# Advanced UI Testing And Page Object Model

The advanced tests are in `tests/ui/advanced`.

Phase 5 introduces Page Object Model, advanced locator strategy, meaningful waits, browser features, network control, tags, retries, traces, parallel execution, and multiple browser projects.

## What Page Object Model Means

Page Object Model, often called POM, is a pattern where each important page gets its own TypeScript class.

For example:

```text
pages/login.page.ts
pages/inventory.page.ts
pages/cart.page.ts
pages/checkout.page.ts
```

Each page class stores locators and page interactions for that page.

## Why Teams Use Page Object Model

Teams use Page Object Model to:

- Reuse common page actions
- Keep test files easier to read
- Reduce repeated locator code
- Make locator updates easier when the app changes

## When Page Object Model Is Helpful

Page Object Model is helpful when:

- Many tests use the same page
- The same steps are repeated often
- A page has several important user actions
- The test suite is growing

## When Page Object Model Can Become Overcomplicated

Page Object Model can become too complicated when:

- Every tiny action becomes a separate method
- Assertions are hidden inside page objects without a clear reason
- Page objects become large and hard to understand
- The pattern is added before there is real repetition

In this repository, page objects stay focused on page interactions. Most assertions stay inside the test files so learners can clearly see what each test verifies.

## Simple Flow Without Page Object Model

```ts
test('User can log in without page objects', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByText('Products')).toBeVisible();
});
```

This is clear for one small test. But if many tests repeat these same login steps, the file can become noisy.

## Same Flow Using Page Object Model

```ts
test('User can log in with page objects', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await inventoryPage.expectLoaded();
});
```

The test now reads closer to the user workflow.

## Advanced Test Coverage

### Reusable Page Methods

File: `tests/ui/advanced/saucedemo-pom.spec.ts`

The tests use page methods such as:

- `loginPage.login()`
- `inventoryPage.addProductToCart()`
- `cartPage.checkout()`
- `checkoutPage.fillCustomerInfo()`

### Dynamic Elements

The dynamic UI test uses a small page created with `page.setContent()`.

This avoids relying on a public website that may change, while still teaching the Playwright skill: wait for a meaningful UI state with an assertion.

### Better Locator Strategies

The examples in `examples/locator-examples.spec.ts` show:

- `getByRole()`
- `getByLabel()`
- `getByTestId()`

Prefer user-facing locators when possible. Use test IDs when the page does not expose good accessible names.

### Waiting For Meaningful UI States

The examples in `examples/wait-strategy-examples.spec.ts` show how to wait for text or visibility instead of using `waitForTimeout()`.

Good:

```ts
await expect(page.getByRole('status')).toHaveText('Saved');
```

Avoid:

```ts
await page.waitForTimeout(3000);
```

### File Upload

The file upload test uses The Internet upload page:

```text
https://the-internet.herokuapp.com/upload
```

The test uploads `fixtures/upload-example.txt`.

### File Download

The file download example is skipped.

Reason: public download demo pages often change their available files. A reliable download test should use a controlled application or fixture server. This repository avoids creating a flaky public-site download test just to check a box.

### Popups Or New Tabs

The popup test uses:

```text
https://the-internet.herokuapp.com/windows
```

It waits for a new browser tab with:

```ts
const popupPromise = page.waitForEvent('popup');
```

### Iframes

The iframe test uses:

```text
https://the-internet.herokuapp.com/iframe
```

It reads text inside the iframe with:

```ts
page.frameLocator('#mce_0_ifr')
```

### Network Request Interception

The interception test uses `page.route()` to observe a request and continue it.

This teaches how to inspect or control network traffic during a UI test.

### Mocking An API Response

The mock test uses `page.route()` and `route.fulfill()` to return a controlled response.

This keeps the example reliable because it does not depend on a public API service.

### Authentication State Reuse

The authentication-state test logs in once, saves storage state, opens a new browser context with that state, and verifies that the user can access the inventory page.

This is useful for larger suites where repeated login slows tests down.

### Tags

Some advanced tests include tags in the test title:

```text
@advanced
@smoke
```

Run smoke-tagged tests:

```bash
npm run test:tag:smoke
```

Run advanced-tagged tests:

```bash
npm run test:tag:advanced
```

Or use Playwright directly:

```bash
npx playwright test --grep @advanced
```

### Running Tests In Multiple Browsers

The Playwright config now has projects for:

- Chromium
- Firefox
- WebKit

Run all configured browser projects:

```bash
npm test
```

Run one browser project:

```bash
npx playwright test --project=chromium
```

### Parallel Execution

The config uses:

```ts
fullyParallel: true
```

This allows independent tests to run in parallel when Playwright can do so safely.

### Retry Configuration

The config uses:

```ts
retries: process.env.CI ? 2 : 1
```

This means tests retry more in CI than they do locally.

Retries should not hide real bugs. Use them to reduce noise from rare environment issues, then investigate repeated failures.

### Trace Viewer Usage

The config uses:

```ts
trace: 'on-first-retry'
```

If a test fails and retries, Playwright records a trace.

Open the HTML report:

```bash
npm run report
```

Open a trace file directly:

```bash
npx playwright show-trace path/to/trace.zip
```

The trace viewer helps you inspect actions, locators, screenshots, console messages, and network activity.

## How To Run Advanced UI Tests

Run only advanced UI tests:

```bash
npm run test:ui:advanced
```

Or:

```bash
npx playwright test tests/ui/advanced
```

Run advanced UI tests with the browser visible:

```bash
npx playwright test tests/ui/advanced --headed
```

Run the locator/assertion/wait examples:

```bash
npx playwright test examples/locator-examples.spec.ts
npx playwright test examples/assertion-examples.spec.ts
npx playwright test examples/wait-strategy-examples.spec.ts
```
