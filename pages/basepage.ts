import { Page, expect } from "@playwright/test";

export class BasePage {
  constructor(protected page: Page) {}

  async visit(url: string) {
    await this.page.goto(url);
  }

  async click(locator: string) {
    await this.page.click(locator);
  }

  async type(locator: string, value: string) {
    await this.page.fill(locator, value);
  }

  async shouldHaveTitle(text: string) {
    await expect(this.page).toHaveTitle(new RegExp(text, "i"));
  }
}
