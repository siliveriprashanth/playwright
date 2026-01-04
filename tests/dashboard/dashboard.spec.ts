import { test } from "../../fixtures/auth.fixture";
import { DashboardPage } from "../../pages/dashboardpage";

test("User stays logged in on dashboard", async ({ page }) => {
  const dashboard = new DashboardPage(page);

  await dashboard.verifyLoginSuccess();
});
