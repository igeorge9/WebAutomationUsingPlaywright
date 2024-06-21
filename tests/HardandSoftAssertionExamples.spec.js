const{test,expect}=require('@playwright/test')

test('Soft Asserions', async ({page})=>{

    await page.goto('https://demoblaze.com/')

    // Hard Assertions

    await expect(page).toHaveTitle('STORE123');
    await expect(page).toHaveURL('https://demoblaze.com/')
    const logoIcon = await page.locator("a[class='navbar-brand']");
    await expect(logoIcon).toBeVisible()

    // Soft Assertions

    await expect.soft(page).toHaveTitle('STORE123');
    await expect.soft(page).toHaveURL('https://demoblaze.com/')
    await expect.soft(logoIcon).toBeVisible()


})