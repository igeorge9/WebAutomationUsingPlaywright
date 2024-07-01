const {test,expect} = require('@playwright/test')

test('Handle basic dropdowns',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('#country').selectOption({label:'Brazil'}) // using visible text or label
    // can be written like this too
    await page.locator('#country').selectOption('United Kingdom') // using visible text

    // await page.locator('#country').selectOption(1)
    await page.locator('#country').selectOption({value:'japan'}) // using value
    await page.locator('#country').selectOption({index:5}) // using value
    await page.selectOption('#country','Germany') // directly selecting the option by text
    await page.waitForTimeout(5000);
})

test('Assertions',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
        
    //1.  Approach 1 - verify the number of options present in the dropdown

    const optionsCount = await page.locator('#country option')
    console.log("There are : "+ await optionsCount.count()+" options");
    expect(await optionsCount).toHaveCount(10);

    //1. Approach 2 -  verify the number of options present in the dropdown

    const options = await page.$$('#country option')
    console.log("Number of options : "+await options.length)
    await expect(options.length).toBe(10);

    //2. Verify if a particluar option is present in the dropdown

    const countryName = await page.locator('#country').textContent();
    await expect(countryName).toContain('France')
    await expect(countryName.includes('India')).toBeTruthy()

    //2. Approach 2 - Verify if a particluar option is present in the dropdown

    const countryNames = await page.$$('#country option');
    for(const countryName of countryNames)
    {
        const name = await countryName.textContent();
        if(await name.includes('Germany'))
            {
                console.log('Found Germany');
                break;
            } 
    }
})

test('Select value from dropdowns using loops',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    const countryNames = await page.$$('#country option');
    for(const countryName of countryNames)
    {
        const value = await countryName.textContent();
        if(value.includes('Canada'))
        {
            await page.selectOption('#country',value);
            console.log(value+" selected from dropdown");
        }
    }
})
