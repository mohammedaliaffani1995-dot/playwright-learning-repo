import { expect, type Page, test } from '@playwright/test';
import testData from '../../../fixtures/test-data.json';
import users from '../../../fixtures/users.json';

async function login(page: Page, username: string, password: string) {
  await page.getByPlaceholder('Username').fill(username);
  await page.getByPlaceholder('Password').fill(password);
  await page.getByRole('button', { name: 'Login' }).click();
}

async function loginAsValidUser(page: Page) {
  await page.goto('https://www.saucedemo.com/');
  await login(page, users.validUser.username, users.validUser.password);
}

test.describe('Intermediate UI tests: SauceDemo login', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
  });

  test('Intermediate UI test: User can log in successfully', async ({ page }) => {
    // Arrange
    const username = users.validUser.username;
    const password = users.validUser.password;

    // Act
    await login(page, username, password);

    // Assert
    await expect(page).toHaveURL(/inventory\.html/);
    await expect(page.getByText('Products')).toBeVisible();
  });

  test('Intermediate UI test: User sees an error with an invalid password', async ({ page }) => {
    // Arrange
    const username = users.invalidPasswordUser.username;
    const password = users.invalidPasswordUser.password;

    // Act
    await login(page, username, password);

    // Assert
    await expect(page.getByText('Username and password do not match')).toBeVisible();
  });

  test('Intermediate UI test: User sees an error with an empty username', async ({ page }) => {
    // Arrange
    const password = users.validUser.password;

    // Act
    await page.getByPlaceholder('Password').fill(password);
    await page.getByRole('button', { name: 'Login' }).click();

    // Assert
    await expect(page.getByText('Username is required')).toBeVisible();
  });

  test('Intermediate UI test: User sees an error with an empty password', async ({ page }) => {
    // Arrange
    const username = users.validUser.username;

    // Act
    await page.getByPlaceholder('Username').fill(username);
    await page.getByRole('button', { name: 'Login' }).click();

    // Assert
    await expect(page.getByText('Password is required')).toBeVisible();
  });
});

test.describe('Intermediate UI tests: SauceDemo inventory and cart', () => {
  test.beforeEach(async ({ page }) => {
    await loginAsValidUser(page);
  });

  test('Intermediate UI test: User can sort products by name from Z to A', async ({ page }) => {
    // Arrange
    const sortDropdown = page.locator('[data-test="product-sort-container"]');

    // Act
    await sortDropdown.selectOption(testData.sortOptions.nameZToA);

    // Assert
    await expect(sortDropdown).toHaveValue(testData.sortOptions.nameZToA);
    await expect(page.locator('.inventory_item_name').first()).toHaveText('Test.allTheThings() T-Shirt (Red)');
  });

  test('Intermediate UI test: User can add one product to the cart', async ({ page }) => {
    // Arrange
    const backpack = page.getByText(testData.products.backpack);

    // Act
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    // Assert
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
    await expect(backpack).toBeVisible();
  });

  test('Intermediate UI test: User can add multiple products to the cart', async ({ page }) => {
    // Arrange
    const cartBadge = page.locator('.shopping_cart_badge');

    // Act
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

    // Assert
    await expect(cartBadge).toHaveText('2');
  });

  test('Intermediate UI test: User can remove a product from the cart', async ({ page }) => {
    // Arrange
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await page.locator('.shopping_cart_link').click();

    // Act
    await page.locator('[data-test="remove-sauce-labs-backpack"]').click();

    // Assert
    await expect(page.getByText(testData.products.backpack)).not.toBeVisible();
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
  });

  test('Intermediate UI test: User can validate the cart count', async ({ page }) => {
    // Arrange
    const cartBadge = page.locator('.shopping_cart_badge');

    // Act
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();

    // Assert
    await expect(cartBadge).toHaveText('3');
  });

  test('Intermediate UI test: User can navigate between pages', async ({ page }) => {
    // Arrange
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    // Act
    await page.locator('.shopping_cart_link').click();

    // Assert
    await expect(page).toHaveURL(/cart\.html/);
    await expect(page.getByText('Your Cart')).toBeVisible();

    // Act
    await page.locator('[data-test="continue-shopping"]').click();

    // Assert
    await expect(page).toHaveURL(/inventory\.html/);
    await expect(page.getByText('Products')).toBeVisible();
  });
});

test.describe('Intermediate UI tests: SauceDemo checkout', () => {
  test.beforeEach(async ({ page }) => {
    await loginAsValidUser(page);
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('.shopping_cart_link').click();
    await page.locator('[data-test="checkout"]').click();
  });

  test('Intermediate UI test: User can complete a checkout form', async ({ page }) => {
    // Arrange
    const customer = testData.checkoutCustomer;

    // Act
    await page.locator('[data-test="firstName"]').fill(customer.firstName);
    await page.locator('[data-test="lastName"]').fill(customer.lastName);
    await page.locator('[data-test="postalCode"]').fill(customer.postalCode);
    await page.locator('[data-test="continue"]').click();

    // Assert
    await expect(page).toHaveURL(/checkout-step-two\.html/);
    await expect(page.getByText('Checkout: Overview')).toBeVisible();
    await expect(page.getByText(testData.products.backpack)).toBeVisible();
  });

  test('Intermediate UI test: User sees a required-field error message during checkout', async ({ page }) => {
    // Arrange
    const customer = testData.checkoutCustomer;

    // Act
    await page.locator('[data-test="lastName"]').fill(customer.lastName);
    await page.locator('[data-test="postalCode"]').fill(customer.postalCode);
    await page.locator('[data-test="continue"]').click();

    // Assert
    await expect(page.getByText('First Name is required')).toBeVisible();
  });
});

test.describe('Intermediate UI tests: fixture data', () => {
  test('Intermediate UI test: User can log in using fixture data', async ({ page }) => {
    // Arrange
    await page.goto('https://www.saucedemo.com/');

    // Act
    await login(page, users.validUser.username, users.validUser.password);

    // Assert
    await expect(page.getByText('Products')).toBeVisible();
  });
});
