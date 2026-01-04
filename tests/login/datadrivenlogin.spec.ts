import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/loginpage";
import { log } from "console";

const users = [
  { username: "student", password: "Password123", valid: true },
  { username: "wrong", password: "Password123", valid: false }
];

for (const data of users) {
  test(`Login test: ${data.username}`, async ({ page }) => {
    await page.goto("https://practicetestautomation.com/practice-test-login/");

    await page.getByLabel("Username").fill(data.username);
    await page.getByLabel("Password").fill(data.password);
    await page.getByRole("button", { name: "Submit" }).click();

    if (data.valid) {
      await expect(page).toHaveURL(/logged-in-successfully/);
    } else {
        console.log(await page.textContent('body'));
        
        await expect(page.locator('#error')).toHaveText(/invalid/i)
    }
  });
}
