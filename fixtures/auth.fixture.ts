import { test as base, expect } from "@playwright/test";

export const test = base.extend({
  // Create a logged-in page
  page: async ({ page }, use) => {
    await page.goto("https://practicetestautomation.com/practice-test-login/");

    await page.getByLabel("Username").fill("student");
    await page.getByLabel("Password").fill("Password123");
    await page.getByRole("button", { name: "Submit" }).click();

    await expect(page).toHaveURL(/logged-in-successfully/);

    await use(page);
  }
});

export { expect };

