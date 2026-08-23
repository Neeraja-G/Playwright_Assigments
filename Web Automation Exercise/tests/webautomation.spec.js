import {test, expect} from '@playwright/test'
test('Web Automation Practice', async({page}) =>{
 
  const productName="Zara coat 4";
  const products = page.locator(".card-body");
  await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
  const loginEmailInput = page.locator('#userEmail');
  await loginEmailInput.fill('anshika@gmail.com');
  const loginPasswordInput = page.locator('#userPassword');
  await loginPasswordInput.fill('Iamking@000');
  await page.locator('#login').click()
  const title = await page.locator(".card-body b").allTextContents();
  console.log(titles);
  //zara coat 4
  const count = products.count();
  for(let i=0;i<count;++i){
    if(await products.nth(i).locator("b").textContent()==productName){
      await productName.nth(i).locator("text= Add To Cart").click();
      break;
    }
  }

})
  