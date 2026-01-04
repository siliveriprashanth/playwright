import { test } from "@playwright/test";
import { AlertsPage } from "../../pages/alertspage";

test("Handle simple alert", async ({ page }) => {
  const alerts = new AlertsPage(page);

  await alerts.goto();
  await alerts.acceptSimpleAlert();
});
