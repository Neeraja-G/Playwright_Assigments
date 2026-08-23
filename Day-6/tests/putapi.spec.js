import { test, expect } from '@playwright/test';

test("Put users api request", async ({ request }) => {

    const updateresponse = await request.put(
        'https://jsonplaceholder.typicode.com/posts/10',
        {
            data: {
                userId: 11,
                id: 103,
                title: "sunt aut facere",
                body: "quia et suscipit\nsuscipitrem o"
            },
            headers: {
                "Accept": "application/json"
            }
        }
    );

    console.log(await updateresponse.json());

    expect(updateresponse.status()).toBe(200);
});