import { test, expect } from "../../fixtures/auth.fixture";

test("User stays logged in on dashboard", async ({ page }) => {
  await expect(page).toHaveURL(/logged-in-successfully/);
  await expect(page.getByText(/Congratulations/i)).toBeVisible();
});
