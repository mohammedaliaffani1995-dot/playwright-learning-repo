import { expect, test } from '@playwright/test';

test('Beginner UI test: User can enter text into the username field', async ({ page }) => {
  // Arrange
  await page.goto('https://www.saucedemo.com/');
  const usernameField = page.getByPlaceholder('Username');

  // Act
  await usernameField.fill('standard_user');

  // Assert
  await expect(usernameField).toHaveValue('standard_user');
});
