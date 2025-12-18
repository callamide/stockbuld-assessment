import {test, expect} from '@playwright/test';

//get user
test ('API GET Request', async ({request}) => { 

    const response = await request.get('https://reqres.in/api/users');
    expect(response.status()).toBe(200);

})

//login
test('API POST Request', async ({request}) => {
    const response = await request.post('https://reqres.in/api/login');
    expect(response.status()).toBe(201)
})