const{test,expect}=require('@playwright/test')

test.use({viewport:{width:1600,height:999}})

test("Verify the error messages",async function({page}){
       
    console.log(await page.viewportSize().width); // used to get the width of the screen
    console.log(await page.viewportSize().height) // used to get the height of the screen
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.getByPlaceholder("Username").fill("Admin",{delay:100})  
// delay :100 is used to keep a 100ms gap while entering each characters in the username textbox 
    await page.locator("//input[@name='password']").fill("admin12344");
    await page.locator("button[type='submit']").click();

    const errorMessage = await page.locator("//p[contains(@class,'alert-content-text')]").textContent();
    console.log("Error message is : "+errorMessage);
    expect(errorMessage.includes("Invalid")).toBeTruthy();
// expect(errorMessage.includes("Error")).toBeTruthy();
    expect(errorMessage==="Invalid credentials").toBeTruthy();

})