// @ts-check
const { test, expect } = require('@playwright/test');

const host = 'https://rahulshettyacademy.com/client';
const email = 'samgreen@qa.com';
const password = 'Qa_Password1';

test('Purchase all products', async ({ page }) => {
    await page.goto(host);

    //Login page form
    await page.locator('#userEmail').fill(email);
    await page.locator('#userPassword').fill(password);
    await page.click('#login');
    await page.waitForLoadState('networkidle');

    //add product to shoping cart

    const products = await page.locator('.card-body');

    const titles = await page.locator('.card-body b').allTextContents();
    
   let size = await products.count();

   // Add all products to the shopping cart
   for(let i = 0; i < size; i++) {
    await products.nth(i)
    .locator('button')
    .locator('text=Add To Cart')
    .click();     
   }

   // click on cart icon

   await page.getByRole('button', {name: 'Cart'}).first().click();
    
   // get all elements in cart
   

});
