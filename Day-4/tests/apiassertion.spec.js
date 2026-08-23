// Respose Assertion
//API URL = https://jsonplaceholder.typicode.com/
//API Response = Single Object

import {test, expect} from '@playwright/test'
import { request } from 'node:http'

test("Response Check", async({request}) =>{

    const response = await request.get("https://jsonplaceholder.typicode.com/posts/1")
    const responsebody = await response.json();
    expect(responsebody).toMatchObject({
        userId: expect.any(Number),
        id: 1,
        title: expect.any(String),
        body: expect.any(String)
    })
    console.log(responsebody)
})

//API Response = set of objects
test("Response Check1", async({request}) =>{

    const response = await request.get("https://jsonplaceholder.typicode.com/posts")
    const responsebody1 = await response.json();
    expect(Array.isArray(responsebody1)).toBeTruthy()
    expect(responsebody1).toHaveLength(100)
    console.log(responsebody1)

    for(const post of responsebody1){
         expect(post).toMatchObject({
        userId: expect.any(Number),
        id: expect.any(Number),
        title: expect.any(String),
        body: expect.any(String)
    })
    }
})

test("Response Check2", async ({ request }) => {

    const responsebody2 = await request.get('https://jsonplaceholder.typicode.com/users');
    const users = await responsebody2.json();

    for (const user of users) {

        expect(user).toMatchObject({
            id: expect.any(Number),
            name: expect.any(String),
            username: expect.any(String),
            email: expect.stringMatching(/@/),

            address: {
                street: expect.any(String),
                suite: expect.any(String),
                city: expect.any(String),
                zipcode: expect.any(String),

                geo: {
                    lat: expect.any(String),
                    lng: expect.any(String),
                }
            },

            phone: expect.any(String),
            website: expect.any(String),

            company: {
                name: expect.any(String),
                catchPhrase: expect.any(String),
                bs: expect.any(String),
            }
        });
    }

    console.log(users)
});