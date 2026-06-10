# Best Practices

This guide explains practical testing habits used in this repository.

## Keep Beginner Tests Simple

A simple test is enough when the goal is to learn one Playwright concept.

Example:

```ts
test('Beginner UI test: User can find the username field', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await expect(page.getByPlaceholder('Username')).toBeVisible();
});
```

This is better than hiding the locator in a helper because the learner needs to see what Playwright is doing.

## Use A Reusable Method When Steps Repeat

A reusable method is helpful when the same steps appear many times.

Example:

```ts
async function login(page: Page, username: string, password: string) {
  await page.getByPlaceholder('Username').fill(username);
  await page.getByPlaceholder('Password').fill(password);
  await page.getByRole('button', { name: 'Login' }).click();
}
```

This is useful in intermediate tests because many tests need login setup.

## Use Page Object Model When A Page Is Reused Often

Page Object Model is helpful when many tests use the same page.

Example:

```ts
const loginPage = new LoginPage(page);

await loginPage.goto();
await loginPage.login(users.validUser.username, users.validUser.password);
```

This works well for advanced UI tests because the same pages and workflows are reused.

## Avoid Abstractions That Hide The Test

An abstraction makes the code harder to understand when it hides important behavior.

Less helpful example:

```ts
await doThing(page, 'login');
```

This is unclear. The reader cannot tell what action is happening.

Better example:

```ts
await loginPage.login(username, password);
```

This says what the user is doing.

## Keep Assertions Easy To Find

Assertions should be visible in the test whenever possible.

Good:

```ts
await expect(page.getByText('Products')).toBeVisible();
```

Harder to read:

```ts
await checkPageLoaded();
```

The advanced page objects include a few assertion methods, such as `expectLoaded()`, only when the meaning is obvious.

## Keep Positive And Negative Tests Separate

Positive tests check successful behavior.

Negative tests check error behavior.

Keep them in separate `test()` blocks so failures are easier to understand.

## Keep Test Data Separate When It Is Reused

Use fixture files for repeated values:

```text
fixtures/users.json
fixtures/test-data.json
fixtures/api-test-data.json
```

Do not move every tiny value into a fixture. Inline values are fine for one-time beginner examples.

## Prefer Playwright Waiting Over Hard-Coded Waits

Avoid:

```ts
await page.waitForTimeout(5000);
```

Prefer:

```ts
await expect(page.getByText('Products')).toBeVisible();
```

Playwright waits for actions and assertions automatically.

## Use Tags For Intent

Tags help run selected tests.

Examples:

```text
@smoke
@advanced
@negative
@schema
@performance
```

Use tags when the group has a clear purpose.

## Keep Default Commands Beginner-Friendly

This repository keeps default npm scripts focused on Chromium.

That means:

```bash
npm test
```

runs the full test suite in Chromium.

Use this command when you intentionally want all configured browsers:

```bash
npm run test:browsers
```

This keeps daily learning fast while still teaching multiple-browser testing.

## Keep Helpers Small

Good helpers do one clear job.

Example:

```ts
createPost(request, postData)
```

Avoid helpers that try to control the whole test. The test should still tell the story.

## Use Environment Variables For Configurable Values

Use `.env` for values that change by environment:

```env
BASE_URL=https://www.saucedemo.com
API_BASE_URL=https://jsonplaceholder.typicode.com
API_TIMEOUT_MS=3000
```

Never commit real passwords or tokens.

## Make Tests Independent

Each test should prepare what it needs.

Avoid tests that only pass if another test ran first.

This matters because Playwright can run tests in parallel.

## Be Honest About Public Demo Limits

Public demo sites are useful for learning, but they are not controlled by this repository.

JSONPlaceholder does not save created data. SauceDemo and The Internet may be slow or unavailable.

When a demo site has a limitation, document it clearly instead of writing misleading assertions.
