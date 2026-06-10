import { expect, test } from '@playwright/test';

test('Example: Assertions check what the user should see', async ({ page }) => {
  await page.setContent('<h1>Products</h1>');

  await expect(page.getByRole('heading', { name: 'Products' })).toBeVisible();
});

test('Example: Assertions can check values', async ({ page }) => {
  await page.setContent('<input aria-label="First name" value="Alex" />');

  await expect(page.getByLabel('First name')).toHaveValue('Alex');
});
