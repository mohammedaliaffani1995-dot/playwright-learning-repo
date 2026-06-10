import { expect, test } from '@playwright/test';

test('Beginner UI test: User can check whether an element is visible', async ({ page }) => {
  // Arrange
  await page.goto('https://www.saucedemo.com/');

  // Act
  const loginLogo = page.locator('.login_logo');

  // Assert
  await expect(loginLogo).toBeVisible();
});
