const{test,expect}=require('@playwright/test')

test('Handle Radiobuttons',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    // Handle Radio buttons

    const maleRadioButton = await page.locator('#male')
    const femaleRadioButton = await page.locator('#female')
    await expect(maleRadioButton).not.toBeChecked();
    await maleRadioButton.check();
    await expect(maleRadioButton).toBeChecked();
    //same can be achieved through isChecked()
    expect(maleRadioButton.isChecked).toBeTruthy();
    
    await femaleRadioButton.check();
    expect.soft(femaleRadioButton.isChecked()).toBeTruthy();

}) 