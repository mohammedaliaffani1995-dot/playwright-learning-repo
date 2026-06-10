import { expect, test } from '@playwright/test';

test('Beginner UI test: User can check the page title', async ({ page }) => {
  // Arrange
  await page.goto('https://www.saucedemo.com/');

  // Act
  const pageTitle = page;

  // Assert
  await expect(pageTitle).toHaveTitle('Swag Labs');
});
