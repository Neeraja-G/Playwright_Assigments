import {test, expect} from '@playwright/test'
import { request } from 'node:http'

test("Delete users api request", async({request}) =>{
  const deleteresponse = await request.delete('https://jsonplaceholder.typicode.com/posts/1')
  expect(deleteresponse.status()).toBe(200)
})