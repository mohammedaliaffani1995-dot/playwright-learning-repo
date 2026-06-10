import { expect, type Locator, type Page } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly title: Locator;
  readonly cartLink: Locator;
  readonly cartBadge: Locator;
  readonly sortDropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.getByText('Products');
    this.cartLink = page.locator('.shopping_cart_link');
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.sortDropdown = page.locator('[data-test="product-sort-container"]');
  }

  async expectLoaded() {
    await expect(this.title).toBeVisible();
  }

  async sortBy(value: string) {
    await this.sortDropdown.selectOption(value);
  }

  productName(name: string) {
    return this.page.getByText(name);
  }

  async addProductToCart(productSlug: string) {
    await this.page.locator(`[data-test="add-to-cart-${productSlug}"]`).click();
  }

  async removeProductFromCart(productSlug: string) {
    await this.page.locator(`[data-test="remove-${productSlug}"]`).click();
  }

  async openCart() {
    await this.cartLink.click();
  }
}
