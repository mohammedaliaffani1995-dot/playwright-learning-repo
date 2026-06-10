import { expect, test } from '@playwright/test';

test('Beginner UI test: User can find the username field', async ({ page }) => {
  // Arrange
  await page.goto('https://www.saucedemo.com/');

  // Act
  const usernameField = page.getByPlaceholder('Username');

  // Assert
  await expect(usernameField).toBeVisible();
});
