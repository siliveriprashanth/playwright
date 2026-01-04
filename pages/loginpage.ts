import { Page, expect } from "@playwright/test";
import { BasePage } from "./basepage";

export class LoginPage extends BasePage {

  constructor(page: Page) {
    super(page);
  }

  get username() {
    return this.page.getByLabel("Username");
  }

  get password() {
    return this.page.getByLabel("Password");
  }

  get submitBtn() {
    return this.page.getByRole("button", { name: "Submit" });
  }

  async goto() {
    await this.visit("https://practicetestautomation.com/practice-test-login/");
  }

  async login(user: string, pass: string) {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.submitBtn.click();
  }

  async isLoginSuccessful() {
    await expect(
      this.page.getByText(/successfully logged in/i)
    ).toBeVisible();
  }
}

