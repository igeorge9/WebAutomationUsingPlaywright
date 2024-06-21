const {test,expect}=require('@playwright/test')

test("Assertions Examples",async ({page})=>{

// 1) expect(page).toHaveURL()   Page has URL
// 2) expect(page).toHaveTitle()   Page has title
// 3) expect(locator).toBeVisible()  Element is visible
// 4) expect(locator).toBeEnabled()  Control is enabled
// 5) expect(locator).toBeChecked()  Radio/Checkbox is checked
// 6) expect(locator).toHaveAttribute() Element has attribute
// 7) expect(locator).toHaveText()  Element matches text
// 8) expect(locator).toContainText()  Element contains text
// 9) expect(locator).toHaveValue(value) Input has a value
// 10) expect(locator).toHaveCount()  List of elements has given length

    await page.goto('https://demoblaze.com/')
    
    page.waitForSelector("a[id='nava']")
    // 1) expect(page).toHaveURL()   Page has URL
    await expect(page).toHaveURL('https://demoblaze.com/');
    
    // 2) expect(page).toHaveTitle()   Page has title
    await expect(page).toHaveTitle('STORE');

    // 3) expect(locator).toBeVisible()  Element is visible
    const productStoreText = await page.locator("a[id='nava']")
    await expect(productStoreText).toBeVisible()

    // // 4) expect(locator).toBeEnabled()  Control is enabled
    const nextArrowButton= await page.locator(".carousel-control-next-icon")
    await expect(nextArrowButton).toBeEnabled()

    // // 5) expect(locator).toBeChecked()  Radio/Checkbox is checked
    // const checkBox = await page.locator('.custom-control-label')
    // expect(checkBox).toBeChecked()

    // 10) expect(locator).toHaveCount()  List of elements has given length
    const productsCount = await page.locator(".card-block h4")
    await expect(productsCount).toHaveCount(9)

    // 6) expect(locator).toHaveAttribute() Element has attribute
    const cartNavLink = await page.locator("a[id='cartur']")
    await expect(cartNavLink).toHaveAttribute('id','cartur')
   
    // 7) expect(locator).toHaveText()  Element matches text
    // 8) expect(locator).toContainText()  Element contains text
    await page.click("#cartur")
    const placeOrderButton = await page.locator('.btn.btn-success')
    await expect(placeOrderButton).toHaveText('Place Order')
    await expect(placeOrderButton).toContainText('Place');
})