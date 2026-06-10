import { expect, test } from '@playwright/test';

test('Beginner UI test: User can check a checkbox', async ({ page }) => {
  // Arrange
  await page.goto('https://the-internet.herokuapp.com/checkboxes');
  const firstCheckbox = page.locator('input[type="checkbox"]').first();

  // Act
  await firstCheckbox.check();

  // Assert
  await expect(firstCheckbox).toBeChecked();
});
