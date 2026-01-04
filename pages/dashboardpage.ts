import { Page, expect } from "@playwright/test";
import { BasePage } from "./basepage";

export class DashboardPage extends BasePage {

  constructor(page: Page) {
    super(page);
  }

  async goto() {
    await this.visit(
      "https://practicetestautomation.com/logged-in-successfully/"
    );
  }

  get successMessage() {
    return this.page.getByText(/Congratulations/i);
  }

  async verifyLoginSuccess() {
    await expect(this.successMessage).toBeVisible();
  }

  get logoutButton() {
    return this.page.getByRole("link", { name: "Log out" });
  }

  async logout() {
    await this.logoutButton.click();
  }
}
