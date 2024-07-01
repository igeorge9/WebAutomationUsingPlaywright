const{test,expect}=require('@playwright/test')

test('Handle Hidden dropdowns',async({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')
    await page.getByRole('button').click()
    await page.locator("//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'][normalize-space()='PIM']").click();
    await page.locator('//div[6]//div[1]//div[2]//div[1]//div[1]//div[1]').click();

    await page.waitForSelector("div[role='listbox'] span")
    const dropdownElements = await page.$$("div[role='listbox'] span")
    console.log('Printing dropdownElements : ');
    for(let element of dropdownElements)
    {
        const elementValue = await element.textContent();
        console.log(elementValue);
        if(elementValue.includes('Content Specialist'))
        {
            await element.click()
            await page.waitForTimeout(1500);
            break;
        }
    }
})  