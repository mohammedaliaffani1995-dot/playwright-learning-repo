import { expect, test } from '@playwright/test';

test('Beginner UI test: User can select a dropdown value', async ({ page }) => {
  // Arrange
  await page.goto('https://the-internet.herokuapp.com/dropdown');
  const dropdown = page.locator('#dropdown');

  // Act
  await dropdown.selectOption('1');

  // Assert
  await expect(dropdown).toHaveValue('1');
});
