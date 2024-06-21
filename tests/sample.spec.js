const {test, expect}=require('@playwright/test')

test("My First Playwright Test",async function(){
    expect("Meghana Vinay").toBe("Meghana Vinay");
    expect("Meghana Vinay".includes("Vinay")).toBeTruthy()
})

test.skip("This is my skipping testcase",async function(){
    expect(12).toBe(12);
})