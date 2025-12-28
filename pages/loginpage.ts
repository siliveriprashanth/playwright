import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://practicetestautomation.com/practice-test-login/');
  }

  async login(username: string, password: string) {
    await this.page.fill('#username', username);
    await this.page.fill('#password', password);
    await this.page.click('#submit');

    await this.page.waitForURL('**/logged-in-successfully/');
  }

  isLoginSuccessful() {
    // Case-insensitive text — much more reliable
    return this.page.getByText(/logged in successfully/i);
  }
}
