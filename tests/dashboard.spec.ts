import { expect } from '@playwright/test';
import { test } from '../fixtures/auth.fixture';

test('User stays logged in after login', async ({ page, loginPage }) => {
  // loginPage fixture runs automatically before this line
  await expect(page.getByText(/you successfully logged in/i)).toBeVisible();
});
