import { expect, test } from '@playwright/test';
import { existsSync } from 'fs';

test('Beginner UI test: User can take a screenshot', async ({ page }, testInfo) => {
  // Arrange
  await page.goto('https://www.saucedemo.com/');
  const screenshotPath = testInfo.outputPath('saucedemo-login-page.png');

  // Act
  await page.screenshot({ path: screenshotPath, fullPage: true });

  // Assert
  expect(existsSync(screenshotPath)).toBe(true);
});
