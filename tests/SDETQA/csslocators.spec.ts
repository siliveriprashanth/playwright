/*
types of css locators
1.absolute css locators
2.relative css locators

tag with id                     tag#id
tag with class                  tag.class
tag with any other attribute    tag[attribute=value]
tag with class and attribute    tag.class[attribute=value]

*/

import {test,expect} from "@playwright/test";

test("verify css locators",async ({page}) =>{
    await page.goto("https://demowebshop.tricentis.com/");


    // tag#id
    await expect (page.locator("input#small-searchterms")).toBeVisible();
    await page.locator("input#small-searchterms").fill("T-Shirts");
    await page.waitForTimeout(5000);
})