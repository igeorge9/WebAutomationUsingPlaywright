const{test,expect}= require('@playwright/test')

test('Handle Inputbox', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    // Interact with the Input box
    const nameInputBox= await page.locator('#name');
    const emailInputBox=await page.locator('#email');

    await expect(nameInputBox).toBeEditable();
    await expect(nameInputBox).toBeEmpty();
    await expect(emailInputBox).toBeVisible();
    await expect(emailInputBox).toBeEnabled();
    await page.locator('#name').fill('Meghana Chakraborty')
    await page.fill('#email','test@demo.com')
    await expect(emailInputBox).toHaveValue('test@demo.com')
    await expect(nameInputBox).toHaveValue('Meghana Chakraborty')

})