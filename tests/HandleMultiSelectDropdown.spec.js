const{test,expect}= require('@playwright/test')

test('Handle Multi select Dropdowns', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    // Select Blue, Green, Yellow from Multi select dropdowns

    const multiSelectDropdownOptions = await page.locator('#colors')
    // await multiSelectDropdownOptions.selectOption(['Green','Blue','Yellow'])
    // await multiSelectDropdownOptions.selectOption({value:'blue',value:'green',value:'yellow'})
   
    await page.selectOption('#colors',['Blue','Green','Yellow','Red'])

})
    
test('Handle Multi select Dropdowns Assertions', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    
    //  Assertions

    // 1. Check number of options in a dropdown

    const numberOfOptions = await page.locator('#colors option').count()
    console.log("number Of Options : "+ numberOfOptions)
    await expect(page.locator('#colors option')).toHaveCount(5)

    // await page. waitForTimeout(4000)

    // 2. Check number of options in a dropdown using JS array

    const options = await page.$$("#colors option")
    await expect(options.length).toBe(5)
    console.log("number Of Options1 : "+options.length)

    // 3. Check the presence of value in the dropdown

    const content = await page.locator("#colors").textContent()
    await expect(content).toContain('Red')
    await expect(content.includes('Green')).toBeTruthy()
    await expect(content.includes('Magenta')).toBeFalsy()

    })