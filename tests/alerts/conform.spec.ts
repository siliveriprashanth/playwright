import { test, expect } from "@playwright/test";

test("Handle confirm dialog (Cancel)", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

  page.once("dialog", async dialog => {
    await dialog.dismiss();   // click Cancel
  });

  await page.getByText("Click for JS Confirm").click();

  await expect(page.locator("#result"))
    .toHaveText("You clicked: Cancel");
});
