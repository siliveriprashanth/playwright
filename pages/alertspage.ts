import { Page, expect } from "@playwright/test";
import { BasePage } from "./basepage";

export class AlertsPage extends BasePage {

  constructor(page: Page) {
    super(page);
  }

  async goto() {
    await this.visit("https://the-internet.herokuapp.com/javascript_alerts");
  }

  get result() {
    return this.page.locator("#result");
  }

  //  Simple Alert (OK)
  async acceptSimpleAlert() {
    this.page.once("dialog", async dialog => {
      await dialog.accept();
    });

    await this.page.getByText("Click for JS Alert").click();
    await expect(this.result).toHaveText("You successfully clicked an alert");
  }

  //  Confirm Alert (OK / Cancel)
  async confirmAlert(accept: boolean) {
    this.page.once("dialog", async dialog => {
      if (accept) await dialog.accept();
      else await dialog.dismiss();
    });

    await this.page.getByText("Click for JS Confirm").click();
  }

  //  Prompt Alert (enter text + OK)
  async promptAlert(text: string) {
    this.page.once("dialog", async dialog => {
      await dialog.accept(text);
    });

    await this.page.getByText("Click for JS Prompt").click();
  }

  async expectResult(text: string) {
    await expect(this.result).toHaveText(text);
  }
}

