const{test,expect} = require('@playwright/test');
const { validateHeaderName } = require('http');

test('Handle Auto suggest dropdown',async({page})=>{

    await page.goto('https://www.redbus.in/');
    await page.click('#src');
    // await page.locator('#src').clear(); // not necessary
    await page.fill('#src','Kochi');
    // const suggestionsList = await page.$$('#autoSuggestContainer ul li')
    await page.waitForSelector("ul li div text[class='placeHolderMainText']")
    const suggestionsList= await page.$$("ul li div text[class='placeHolderMainText']")
    console.log("Suggestions List:");
    for(let value of suggestionsList)
    {
        console.log(await value.innerText())
        const innerTextValue = await value.innerText();
        if(innerTextValue.includes('Kanchikacherla'))
        {
            await value.click();
            break;
        }
    }
    await page.waitForTimeout(3000)
})