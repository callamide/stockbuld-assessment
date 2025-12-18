import {test, expect} from '@playwright/test';

//login 
test('login successfully', async ({page}) => { 
    await page.goto('https://www.saucedemo.com')
    await page.getByPlaceholder('Username').fill('standard_user')
    await page.getByPlaceholder('Password').fill('secret_sauce')
    await page.getByRole('button', {name: 'Login'}).click()  
    //navigate to product page
    const productitem = page.locator("xpath=//div[@class='inventory_item']")
    await expect(productitem).toHaveCount(6)

    //add to cart
    await page.getByRole('button', {name: 'Add to cart', exact: true}).first().click()
    await page.getByRole('button', {name: 'Add to cart', exact: true}).nth(1).click()

    //check cart count
    const cartcount = page.locator("xpath=//*[@id='shopping_cart_container']")
    await expect(cartcount).toHaveText('2')
    
    //go to cart
    await page.locator('#shopping_cart_container a').click()
    const cartitem = page.locator("xpath=//div[@class='cart_item']")
    await expect(cartitem).toHaveCount(2)

    //remove item from cart
    await page.getByRole('button', {name: 'Remove', exact: true}).first().click()
    await expect(cartcount).toHaveText('1')
    await expect(cartitem).toHaveCount(1)
});

