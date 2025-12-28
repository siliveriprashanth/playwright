import {test,expect,Locator} from "@playwright/test";
import { log } from "console";


// text boxes
test("Test Input Action", async ({page})=>{
    
    await page.goto("https://testautomationpractice.blogspot.com/");

    const textbox:Locator=page.locator("#name");
    await expect(textbox).toBeVisible();
    await expect(textbox).toBeEnabled();

    const maxLength: string|null= await textbox.getAttribute('maxlength');

    expect(maxLength).toBe('15');

    await textbox.fill("bunny");

    const enteredValue:string=await textbox.inputValue();
    console.log('input value',enteredValue);


    expect(enteredValue).toBe("bunny");

    await page.waitForTimeout(5000);

})

// radio buttons
test("Radio buttons", async ({page})=>{
    
    await page.goto("https://testautomationpractice.blogspot.com/");

     const maleRadio:Locator=page.locator('#male');
     await expect(maleRadio).toBeVisible();
     await expect(maleRadio).toBeEnabled();
     expect (await maleRadio.isChecked()).toBe(false);

    //  await maleRadio.check();
    //  expect (await maleRadio.isChecked()).toBe(true);
    //  await expect(maleRadio).toBeChecked();
     


    await page.waitForTimeout(5000);

})

test.only("check box actions", async ({page})=>{
    
    await page.goto("https://testautomationpractice.blogspot.com/");

     const sundaycheckbox:Locator=page.getByLabel('Sunday');
     await sundaycheckbox.check();
     await expect(sundaycheckbox).toBeChecked();
     

    // await page.waitForTimeout(5000);

})