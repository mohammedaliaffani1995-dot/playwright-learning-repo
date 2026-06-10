import { expect, type Page, test } from '@playwright/test';
import testData from '../../../fixtures/test-data.json';
import users from '../../../fixtures/users.json';

async function login(page: Page) {
  await page.goto('https://www.saucedemo.com/');
  await page.getByPlaceholder('Username').fill(users.validUser.username);
  await page.getByPlaceholder('Password').fill(users.validUser.password);
  await page.getByRole('button', { name: 'Login' }).click();
}

test('Solution UI intermediate: User can add one product to the cart', async ({ page }) => {
  // Arrange
  await login(page);

  // Act
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  // Assert
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
});

test('Solution UI intermediate: User sees required-field validation during checkout', async ({ page }) => {
  // Arrange
  await login(page);
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('.shopping_cart_link').click();
  await page.locator('[data-test="checkout"]').click();

  // Act
  await page.locator('[data-test="lastName"]').fill(testData.checkoutCustomer.lastName);
  await page.locator('[data-test="postalCode"]').fill(testData.checkoutCustomer.postalCode);
  await page.locator('[data-test="continue"]').click();

  // Assert
  await expect(page.getByText('First Name is required')).toBeVisible();
});
