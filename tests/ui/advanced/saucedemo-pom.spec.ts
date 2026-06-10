import { expect, test } from '@playwright/test';
import path from 'path';
import testData from '../../../fixtures/test-data.json';
import users from '../../../fixtures/users.json';
import { CartPage } from '../../../pages/cart.page';
import { CheckoutPage } from '../../../pages/checkout.page';
import { InventoryPage } from '../../../pages/inventory.page';
import { LoginPage } from '../../../pages/login.page';

test.describe('Advanced UI tests: Page Object Model with SauceDemo', () => {
  test('Advanced UI test: User can complete a checkout using page objects @advanced @smoke', async ({ page }) => {
    // Arrange
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const customer = testData.checkoutCustomer;

    // Act
    await loginPage.goto();
    await loginPage.login(users.validUser.username, users.validUser.password);
    await inventoryPage.expectLoaded();
    await inventoryPage.addProductToCart('sauce-labs-backpack');
    await inventoryPage.openCart();
    await cartPage.checkout();
    await checkoutPage.fillCustomerInfo(customer.firstName, customer.lastName, customer.postalCode);
    await checkoutPage.continue();

    // Assert
    await checkoutPage.expectOverviewPage();
    await expect(page.getByText(testData.products.backpack)).toBeVisible();
  });

  test('Advanced UI test: User can reuse page methods for cart actions @advanced', async ({ page }) => {
    // Arrange
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    // Act
    await loginPage.goto();
    await loginPage.login(users.validUser.username, users.validUser.password);
    await inventoryPage.addProductToCart('sauce-labs-backpack');
    await inventoryPage.addProductToCart('sauce-labs-bike-light');
    await inventoryPage.removeProductFromCart('sauce-labs-bike-light');
    await inventoryPage.openCart();

    // Assert
    await cartPage.expectLoaded();
    await expect(cartPage.cartItem(testData.products.backpack)).toBeVisible();
    await expect(cartPage.cartItem(testData.products.bikeLight)).not.toBeVisible();
    await expect(inventoryPage.cartBadge).toHaveText('1');
  });

  test('Advanced UI test: User can use authentication state in a new browser context @advanced', async ({ browser, page }, testInfo) => {
    // Arrange
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const storageStatePath = testInfo.outputPath('saucedemo-auth-state.json');

    // Act
    await loginPage.goto();
    await loginPage.login(users.validUser.username, users.validUser.password);
    await inventoryPage.expectLoaded();
    await page.context().storageState({ path: storageStatePath });

    const reusedContext = await browser.newContext({ storageState: storageStatePath });
    const reusedPage = await reusedContext.newPage();

    // Assert
    await reusedPage.goto('https://www.saucedemo.com/inventory.html');
    await expect(reusedPage.getByText('Products')).toBeVisible();

    await reusedContext.close();
  });
});

test.describe('Advanced UI tests: meaningful waits and network control', () => {
  test('Advanced UI test: User can wait for a meaningful dynamic UI state @advanced', async ({ page }) => {
    // Arrange
    await page.setContent(`
      <button type="button">Load status</button>
      <p role="status" hidden>Ready for testing</p>
      <script>
        document.querySelector('button').addEventListener('click', () => {
          document.querySelector('[role="status"]').hidden = false;
        });
      </script>
    `);

    // Act
    await page.getByRole('button', { name: 'Load status' }).click();

    // Assert
    await expect(page.getByRole('status')).toHaveText('Ready for testing');
  });

  test('Advanced UI test: User can mock an API response with route fulfillment @advanced', async ({ page }) => {
    // Arrange
    await page.route('https://example.com/products.json', async route => {
      await route.fulfill({
        contentType: 'application/json',
        body: JSON.stringify({ products: ['Backpack', 'Bike Light'] })
      });
    });

    await page.setContent(`
      <button type="button">Load products</button>
      <ul aria-label="Products"></ul>
      <script>
        document.querySelector('button').addEventListener('click', async () => {
          const response = await fetch('https://example.com/products.json');
          const data = await response.json();
          document.querySelector('ul').innerHTML = data.products
            .map(product => '<li>' + product + '</li>')
            .join('');
        });
      </script>
    `);

    // Act
    await page.getByRole('button', { name: 'Load products' }).click();

    // Assert
    await expect(page.getByRole('listitem')).toHaveText(['Backpack', 'Bike Light']);
  });

  test('Advanced UI test: User can intercept a network request and continue it @advanced', async ({ page }) => {
    // Arrange
    const interceptedUrls: string[] = [];
    await page.route('**/inventory.html', async route => {
      interceptedUrls.push(route.request().url());
      await route.continue();
    });

    // Act
    await page.goto('https://www.saucedemo.com/inventory.html');

    // Assert
    await expect(page).toHaveURL(/saucedemo\.com/);
    expect(interceptedUrls.some(url => url.includes('inventory.html'))).toBe(true);
  });
});

test.describe('Advanced UI tests: browser features on public demo pages', () => {
  test('Advanced UI test: User can upload a file on a public demo page @advanced', async ({ page }) => {
    // Arrange
    await page.goto('https://the-internet.herokuapp.com/upload');
    const uploadFilePath = path.join(process.cwd(), 'fixtures', 'upload-example.txt');

    // Act
    await page.locator('#file-upload').setInputFiles(uploadFilePath);
    await page.getByRole('button', { name: 'Upload' }).click();

    // Assert
    await expect(page.getByText('File Uploaded!')).toBeVisible();
    await expect(page.getByText('upload-example.txt')).toBeVisible();
  });

  test.skip('Advanced UI test: User can download a file from a public demo page @advanced', async () => {
    // Skipped because public download pages often change available files.
    // A reliable project test should use a controlled app or fixture server.
  });

  test('Advanced UI test: User can work with a popup or new tab @advanced', async ({ page }) => {
    // Arrange
    await page.goto('https://the-internet.herokuapp.com/windows');

    // Act
    const popupPromise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Click Here' }).click();
    const popup = await popupPromise;

    // Assert
    await expect(popup.getByRole('heading', { name: 'New Window' })).toBeVisible();
  });

  test('Advanced UI test: User can read text inside an iframe @advanced', async ({ page }) => {
    // Arrange
    await page.goto('https://the-internet.herokuapp.com/iframe');

    // Act
    const editorBody = page.frameLocator('#mce_0_ifr').locator('body');

    // Assert
    await expect(editorBody).toContainText('Your content goes here.');
  });
});
