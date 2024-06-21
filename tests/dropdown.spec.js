const {test, expect}=require('@playwright/test');
const exp = require('constants');

test("Selecting value from a Single Select Dropdown",async function({page}){

    await page.goto('https://www.hyrtutorials.com/p/html-dropdown-elements-practice.html');
    await page.locator('#course').selectOption({value:"python"})
    // await page.waitForTimeout(2000)
    await page.locator('#course').selectOption({label:"Javascript"})
    // const textContents = await page.locator('#course').allTextContents();    // await page.locator("//div[@class=' css-yk16xz-control']").first().selectOption({label:"Group 1, option 2"});
    const textContents = await page.locator('#course').textContent()
    // await page.waitForTimeout(2000)
    console.log("All dropdown values : "+textContents);
    await expect(textContents.includes("Javascript")).toBeTruthy()

    /*
    the precedence of locator in select dropdown is 
    1. label - if this is changed, that can be either a new requirement or a bug which needs code change
    2. Value - can change if developer does some changes in teh script
    3. Index - Can change depending on client requirements
    */

// To check if a particluar value exisrts in the dropdown

})

test("Validating the values in the single select dropdown", async function({page}){
   
    await page.goto('https://www.hyrtutorials.com/p/html-dropdown-elements-practice.html');
    let courseFlag = false
    const course = await page.$('#course')
    const coursesNames = await course.$$('option')
    
    for(let i=0;i<coursesNames.length-1;i++)
        {
            let element = coursesNames[i];
            const courseNameValue=await element.textContent()
            if(courseNameValue.includes('Javascript'))
            {
                courseFlag = true
                break
            }
            console.log("Dropdown value is :"+element)
        }
        await expect(courseFlag).toBeTruthy
})

test("Multi select dropdown",async function({page}){
    
    await page.goto('https://www.hyrtutorials.com/p/html-dropdown-elements-practice.html');
    await page.locator("#ide").selectOption(['Eclipse','IntelliJ IDEA'])
})