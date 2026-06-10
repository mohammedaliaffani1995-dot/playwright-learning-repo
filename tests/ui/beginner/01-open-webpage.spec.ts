import { expect, test } from '@playwright/test';

test('Beginner UI test: User can open the SauceDemo login page', async ({ page }) => {
  // Arrange
  const loginPageUrl = 'https://www.saucedemo.com/';

  // Act
  await page.goto(loginPageUrl);

  // Assert
  await expect(page).toHaveURL(/saucedemo\.com/);
});
