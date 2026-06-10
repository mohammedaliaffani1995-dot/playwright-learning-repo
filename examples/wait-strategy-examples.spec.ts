import { expect, test } from '@playwright/test';

test('Example: Wait for useful UI state instead of waiting for time', async ({ page }) => {
  await page.setContent(`
    <button type="button">Show message</button>
    <p role="status" hidden>Saved</p>
    <script>
      document.querySelector('button').addEventListener('click', () => {
        document.querySelector('[role="status"]').hidden = false;
      });
    </script>
  `);

  await page.getByRole('button', { name: 'Show message' }).click();

  await expect(page.getByRole('status')).toHaveText('Saved');
});
