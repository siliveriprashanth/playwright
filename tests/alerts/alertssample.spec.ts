import { test, expect } from '@playwright/test';

test.describe('Day 3 - Alerts and New Tabs', () => {

  test('Handle JavaScript Alert', async ({ page }) => {

    // Step 1: Register dialog handler BEFORE action
    page.on('dialog', async dialog => {
      console.log('Alert message:', dialog.message());
      await dialog.accept(); // Click OK
    });

    // Step 2: Open test site
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    // Step 3: Trigger alert
    await page.click('text=Click for JS Alert');

    // Step 4: Assertion
    await expect(page.locator('#result'))
      .toHaveText('You successfully clicked an alert');
  });


  test('Handle Confirm Alert (Cancel)', async ({ page }) => {

    page.on('dialog', async dialog => {
      console.log('Confirm message:', dialog.message());
      await dialog.dismiss(); // Click Cancel
    });

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    await page.click('text=Click for JS Confirm');

    await expect(page.locator('#result'))
      .toHaveText('You clicked: Cancel');
  });


  test('Handle New Tab / Window', async ({ context, page }) => {

    await page.goto('https://the-internet.herokuapp.com/windows');

    // Step 1: Wait for new tab + click
    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      page.click('text=Click Here'),
    ]);

    // Step 2: Wait until new tab loads
    await newPage.waitForLoadState();

    // Step 3: Assertion on new tab
    await expect(newPage.locator('h3'))
      .toHaveText('New Window');

    // Optional: close new tab
    await newPage.close();
  });

});
