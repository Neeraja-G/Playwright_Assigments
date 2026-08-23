import {test, expect} from '@playwright/test'


test("Get users api request", async({request}) =>{
 const getresponse = await request.get('https://jsonplaceholder.typicode.com/posts')
 console.log(await getresponse.json())
 expect(getresponse.status()).toBe(200)
})