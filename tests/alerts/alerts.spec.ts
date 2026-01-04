import { test, expect } from "@playwright/test";

test("Handle simple alert", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

  // Listen for alert BEFORE clicking
  page.once("dialog", async dialog => {
    console.log(dialog.message());
    await dialog.accept();   // click OK
  });

  await page.getByText("Click for JS Alert").click();

  await expect(page.locator("#result")).toHaveText("You successfully clicked an alert");
});
