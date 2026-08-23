import { test, expect } from '@playwright/test';

test("Get user by ID", async ({ request }) => {

    const getresponse = await request.get(
        'https://jsonplaceholder.typicode.com/posts/1'
    );

    const responseBody = await getresponse.json();

    console.log(responseBody);

    // Status code assertion
    expect(getresponse.status()).toBe(200);

    // Response body assertions
    expect(responseBody).toMatchObject({
    id: 1,
    userId: 1,
    title: expect.any(String),
    body: expect.any(String)
});
});