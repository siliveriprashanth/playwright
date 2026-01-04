import { test, expect } from "@playwright/test";
import { DashboardPage } from "../../pages/dashboardpage";

test("User cannot access dashboard without login", async ({ page }) => {
  const dashboard = new DashboardPage(page);

  await dashboard.goto();

  await expect(page).toHaveURL(/logged-in-successfully/);
});
