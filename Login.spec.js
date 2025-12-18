import {test, expect} from '@playwright/test';

test('has title', async ({page}) => { 
    await page.goto('https://www.saucedemo.com')
    await expect(page).toHaveTitle("Swag Labs");
})

//positive login test cases
test('login successfully', async ({page}) => { 
    await page.goto('https://www.saucedemo.com')
    await page.getByPlaceholder('Username').fill('standard_user')
    await page.getByPlaceholder('Password').fill('secret_sauce')
    await page.getByRole('button', {name: 'Login'}).click()
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
})

//negative login test cases
test('login failed with invalid credentials', async ({page}) => { 
    await page.goto('https://www.saucedemo.com')
    await page.getByPlaceholder('Username').fill('invalid_user')    
    await page.getByPlaceholder('Password').fill('invalid_password')
    await page.getByRole('button', {name: 'Login'}).click()
    await expect(page.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible()
})      