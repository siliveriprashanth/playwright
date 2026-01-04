import { test } from "@playwright/test";
import { LoginPage } from "../../pages/loginpage";
import { DashboardPage } from "../../pages/dashboardpage";

test("User can logout successfully", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboard = new DashboardPage(page);

  await loginPage.goto();
  await loginPage.login("student", "Password123");
  await dashboard.verifyLoginSuccess();

  await dashboard.logout();

  // After logout user is redirected back to login
  await loginPage.goto();
});
