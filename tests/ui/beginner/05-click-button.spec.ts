import { expect, test } from '@playwright/test';

test('Beginner UI test: User can click the login button', async ({ page }) => {
  // Arrange
  await page.goto('https://www.saucedemo.com/');
  const loginButton = page.getByRole('button', { name: 'Login' });

  // Act
  await loginButton.click();

  // Assert
  await expect(page.getByText('Username is required')).toBeVisible();
});
