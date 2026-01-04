import { test } from "@playwright/test";
import { AlertsPage } from "../../pages/alertspage";

test("Handle prompt alert", async ({ page }) => {
  const alerts = new AlertsPage(page);

  await alerts.goto();
  await alerts.promptAlert("Playwright");
  await alerts.expectResult("You entered: Playwright");
});
