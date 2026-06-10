import { expect, test } from '@playwright/test';

test('Example: Prefer user-facing locators when possible', async ({ page }) => {
  await page.setContent(`
    <label for="username">Username</label>
    <input id="username" />
    <button type="button">Save</button>
  `);

  await page.getByLabel('Username').fill('standard_user');
  await page.getByRole('button', { name: 'Save' }).click();

  await expect(page.getByLabel('Username')).toHaveValue('standard_user');
});

test('Example: Test IDs are useful when user-facing locators are not enough', async ({ page }) => {
  await page.setContent('<button data-testid="save-profile">Save</button>');

  await expect(page.getByTestId('save-profile')).toBeVisible();
});
