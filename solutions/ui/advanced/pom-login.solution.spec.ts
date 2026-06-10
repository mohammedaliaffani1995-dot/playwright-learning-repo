import { expect, test } from '@playwright/test';
import users from '../../../fixtures/users.json';
import { InventoryPage } from '../../../pages/inventory.page';
import { LoginPage } from '../../../pages/login.page';

test('Solution UI advanced: User can log in with Page Object Model @solution-ui', async ({ page }) => {
  // Arrange
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  // Act
  await loginPage.goto();
  await loginPage.login(users.validUser.username, users.validUser.password);

  // Assert
  await inventoryPage.expectLoaded();
  await expect(page).toHaveURL(/inventory\.html/);
});

test('Solution UI advanced: Locked-out user sees a login error @solution-ui @negative', async ({ page }) => {
  // Arrange
  const loginPage = new LoginPage(page);

  // Act
  await loginPage.goto();
  await loginPage.login(users.lockedOutUser.username, users.lockedOutUser.password);

  // Assert
  await loginPage.expectLoginError('Sorry, this user has been locked out');
});
