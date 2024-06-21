const{test,expect}= require('@playwright/test')

test('Handle Checkboxes', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

// Select single checkbox

    const sundayCheckbox = await page.locator('#sunday')
    const mondayCheckbox = await page.locator('#monday')
    await sundayCheckbox.check();
    await expect(await sundayCheckbox.isChecked()).toBeTruthy();
    // await expect(mondayCheckbox).toBeChecked();
    await expect(await mondayCheckbox.isChecked()).toBeFalsy()
    await mondayCheckbox.check();
    await expect(await mondayCheckbox).toBeChecked();
    await expect(await mondayCheckbox.isChecked()).toBeTruthy()
    await expect(await page.locator('#thursday').isChecked()).toBeFalsy();
    // const thursdayCheckbox = await page.locator("//input[@id='thursday' and @type='checkbox']")
    // await expect(sundayCheckbox.isChecked()).toBeFalsy();

    // Select multiple checkboxes

    const checkboxesLocators =['#wednesday','#saturday','#thursday'];
    for(const checkBox of checkboxesLocators)
    {
        await page.locator(checkBox).check()
        await expect(await page.locator(checkBox).isChecked).toBeTruthy();
    }

    for(const checkbox of checkboxesLocators)
    {
        if(await page.locator(checkbox).isChecked())
        {
         await page.locator(checkbox).uncheck()
         await page.waitForTimeout(4000)
         await expect(await page.locator(checkbox).isChecked()).toBeFalsy()

        }
    }
    await page.waitForTimeout(4000)
})