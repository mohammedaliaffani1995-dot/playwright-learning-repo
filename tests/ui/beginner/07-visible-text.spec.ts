import { expect, test } from '@playwright/test';

test('Beginner UI test: User can validate visible error text', async ({ page }) => {
  // Arrange
  await page.goto('https://www.saucedemo.com/');

  // Act
  await page.getByRole('button', { name: 'Login' }).click();

  // Assert
  await expect(page.getByText('Epic sadface: Username is required')).toBeVisible();
});
