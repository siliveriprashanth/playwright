import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginpage';

export const test = base.extend<{ loginPage: LoginPage }>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('student', 'Password123');

    // 🔎 verify login inside fixture (important)
    await expect(page.getByText(/you successfully logged in/i)).toBeVisible();

    await use(loginPage);
  },
});

