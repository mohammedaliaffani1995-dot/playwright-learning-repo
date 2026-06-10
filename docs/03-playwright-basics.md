# Playwright Basics

This guide explains the basic words you need before reading beginner UI tests.

## What Is A Browser?

A browser is the application people use to visit websites.

Examples:

- Chrome
- Firefox
- Safari
- Edge

Playwright can open and control browsers for automated testing.

## What Is A Webpage?

A webpage is one screen or page on a website.

For example:

- A login page
- A product page
- A checkout page
- A contact form

In a UI test, Playwright opens a webpage and checks how it behaves.

## What Is A UI Test?

A UI test checks the user interface of an application.

The user interface is what a person can see and interact with, such as:

- Text
- Buttons
- Input fields
- Checkboxes
- Dropdowns
- Error messages

A beginner UI test usually follows three simple steps:

```text
Arrange: Open the page or prepare test data.
Act: Do the user action.
Assert: Check the expected result.
```

## What Does `page` Mean In Playwright?

In Playwright, `page` represents one browser tab.

You use `page` to:

- Open a webpage
- Find elements
- Click buttons
- Fill input fields
- Take screenshots
- Check page behavior

Example:

```ts
await page.goto('https://www.saucedemo.com/');
```

This tells Playwright to open the SauceDemo login page in the browser tab.

## What Is A Locator?

A locator is how Playwright finds something on the page.

Examples:

```ts
page.getByPlaceholder('Username')
page.getByRole('button', { name: 'Login' })
page.getByText('Products')
```

Locators are important because Playwright needs to know which element to use.

## What Is An Assertion?

An assertion checks that something is true.

Examples:

```ts
await expect(page).toHaveTitle('Swag Labs');
await expect(page.getByText('Products')).toBeVisible();
```

Assertions make tests useful. Without assertions, a test may do actions but not verify the result.

## How Playwright Waits Automatically

Playwright automatically waits for many things before taking action.

For example, before clicking a button, Playwright checks that the button is:

- Attached to the page
- Visible
- Stable
- Enabled
- Ready to receive the click

This makes tests more reliable without adding manual sleep time.

## Why Hard-Coded Waits Should Usually Be Avoided

A hard-coded wait pauses the test for a fixed amount of time.

Example to avoid:

```ts
await page.waitForTimeout(5000);
```

This usually makes tests slower and less reliable. If the page is ready after 1 second, the test still waits 5 seconds. If the page needs 6 seconds, the test still fails.

Prefer Playwright actions and assertions:

```ts
await expect(page.getByText('Products')).toBeVisible();
```

This waits for the expected condition instead of waiting blindly.

## Beginner Test Websites Used

These beginner tests use:

- SauceDemo: `https://www.saucedemo.com/`
- The Internet dropdown page: `https://the-internet.herokuapp.com/dropdown`
- The Internet checkboxes page: `https://the-internet.herokuapp.com/checkboxes`

These are public demo websites. They are useful for learning, but they can sometimes be slow or unavailable because they are outside this repository.
