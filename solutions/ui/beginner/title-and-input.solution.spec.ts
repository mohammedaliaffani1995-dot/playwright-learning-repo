import { expect, test } from '@playwright/test';

test('Solution UI beginner: User can open SauceDemo and validate the title', async ({ page }) => {
  // Arrange and Act
  await page.goto('https://www.saucedemo.com/');

  // Assert
  await expect(page).toHaveTitle(/Swag Labs/);
});

test('Solution UI beginner: User can enter text into the username field', async ({ page }) => {
  // Arrange
  await page.goto('https://www.saucedemo.com/');
  const usernameInput = page.getByPlaceholder('Username');

  // Act
  await usernameInput.fill('standard_user');

  // Assert
  await expect(usernameInput).toHaveValue('standard_user');
});
