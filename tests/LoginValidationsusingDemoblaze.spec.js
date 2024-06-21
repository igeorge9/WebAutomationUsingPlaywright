import { test,expect } from "@playwright/test";

test("Title and URL validations", async ({page})=>{
    
    await page.goto("https://demoblaze.com/")
    const pageTitle = await page.title()
    expect(pageTitle.includes('STORE'))
    const pageURL = await page.url()
    await expect(page).toHaveURL('https://demoblaze.com/')

})

test("Login Validations",async ({page})=>{

    await page.goto("https://demoblaze.com/")
    await page.click("#login2");
    await page.fill("#loginusername","pavanol")
    await page.fill('#loginpassword','test@123')
    await page.click("//button[@onclick='logIn()']")
    // await page.click('#logout2')
    const logOutButton = await page.locator("#logout2")
    await expect(logOutButton).toBeVisible();
    await logOutButton.click()
})

test("Printing the product names and links ina page", async ({page})=>{

    await page. goto("https://demoblaze.com/")
    await page.waitForSelector("//a")
    const links = await page.$$("//a")
    console.log("\nLink Texts\n")
    for(const link of links)
    {
       const linkText = await link.textContent()
       console.log(linkText)
    }

    await page.waitForSelector("//div[@id='tbodyid']//div//h4/a")
    const products = await page.$$("//div[@id='tbodyid']//div//h4/a")
    console.log("\nProduct Names\n")
    for(const product of products)
    {
        const productName=await product.textContent()
        console.log(productName);
    }
})