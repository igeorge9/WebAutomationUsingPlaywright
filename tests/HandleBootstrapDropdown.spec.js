const{test,expect} = require('@playwright/test')

test("Handling Bootstrap Dropdowns",async ({page})=>{

    await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2');

    // Bootstrap Dropdowns doesn't have a select tag generally. Such dropdowns may have some other tags 

    await page.click('.multiselect.dropdown-toggle');
    const content = await page.locator(".multiselect-container li input")
    console.log("Number of options : "+ await content.count());
    await expect(content).toHaveCount(11)

    const options = await page.$$('.multiselect-container li input')
    // returns options with an array on using a $$ locator
    
    const dropdownValues = await page.$$('.multiselect-container li label')
    console.log("Innertext elements :");
    for(let value of dropdownValues)
    {
       //   console.log("Text content is : \n"+await value.textContent());
       console.log(await value.innerText())
       const valueText = await value.textContent()

       if(valueText.includes('Angular')||valueText.includes('Python'))
        {
                await value.click();
        }
       else if(valueText.includes('HTML')||valueText.includes('CSS'))
        {
            // deselect already selected HTML and CSS from dropdown list
            await value.click()
        }
    }
})