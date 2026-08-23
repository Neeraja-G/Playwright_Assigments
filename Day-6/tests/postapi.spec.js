import {test, expect} from '@playwright/test'
import { request } from 'node:http'

test("Post users api request", async({request}) =>{
  const createresponse = await request.post('https://jsonplaceholder.typicode.com/posts',{
  data:{
      "userId": 11,
    "id": 101,
    "title": "sunt aut facere repellat provident eprehenderit",
    "body": "quia et suscipit\nsuscipitrem eveniet architecto"
  },
  headers:{
  "Accept":"application/json"
  }
 });
 console.log(await createresponse.json())
 expect(createresponse.status()).toBe(201)
 var res = await createresponse.json()
 var userId = res.id
})