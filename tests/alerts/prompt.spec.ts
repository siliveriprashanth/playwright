import { test, expect } from "@playwright/test";

test("Handle prompt dialog", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

  page.once("dialog", async dialog => {
    await dialog.accept("Prashanth");
  });

  await page.getByText("Click for JS Prompt").click();

  await expect(page.locator("#result"))
    .toHaveText("You entered: Prashanth");
});
