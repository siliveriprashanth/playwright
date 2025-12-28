/*
 
Locator: Identify the element on the page
DOM :Document object model
DOM is an API interface provided by browser


page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content. (non interactive elements)
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).

*/
// we need to import the locator 


import {test,expect,Locator} from "@playwright/test";

test('verify PLaywright locators',async({page})=>
{
    await page.goto('https://demo.nopcommerce.com/');
// 1.page.getByAltText() - identifies images (and similar elements) based on alt attribute.
// use this locator when your element supports alt text such as img and area elements.
    const logo:Locator=page.getByAltText('nopCommerce demo store');
    await expect(logo).toBeVisible();

// 2.page.getByText() find an element by the text it contains.you can match by a substring,exact string 
// locate by visible text
// use this locator to find non interactive elements like div,span,p,etc
// for interactive elements like button, a, input, etc use role locator 
    // const text:Locator=page.getByText('Welcome to our store');
    // await expect(text).toBeVisible();
    await expect(page.getByText('Welcome to our store')).toBeVisible();

// 3.page.getByRole() locating by role (role is nit a attribute)
// role locators include buttons,checckboxes,heading,links,lists,tables and many mire and followa w3c specifications for ARIA role
// prefer for interactive elements like buttons,checkboxes, links,lists,heading,tables etc  
    await page.getByRole('link',{name:'Register'}).click();

    await expect(page.getByRole('heading',{name:'/Register/i'})).toBeVisible();





})

