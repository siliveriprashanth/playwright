import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginpage';

test('User can login successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('student', 'Password123');

  await expect(loginPage.isLoginSuccessful()).toBeVisible();
});
