const{test,expect}=require('@playwright/test');

test("Load google.com and verify the Title",async ({page})=>{

    await page.goto('https://www.google.com');
    const url = await page.url();
    const title = await page.title();
    console.log("Title of the page "+title);
    await expect(page).toHaveTitle('Google');
    await expect(page).not.toHaveTitle('Yahoo');

})