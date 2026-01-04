import { test } from "@playwright/test";
import { AlertsPage } from "../../pages/alertspage";

test("Accept confirm alert", async ({ page }) => {
  const alerts = new AlertsPage(page);

  await alerts.goto();
  await alerts.confirmAlert(true);
  await alerts.expectResult("You clicked: Ok");
});

test("Dismiss confirm alert", async ({ page }) => {
  const alerts = new AlertsPage(page);

  await alerts.goto();
  await alerts.confirmAlert(false);
  await alerts.expectResult("You clicked: Cancel");
});
