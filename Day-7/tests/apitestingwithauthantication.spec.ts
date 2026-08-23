// reference - https://restful-booker.herokuapp.com/apidoc/index.html#api-Booking-DeleteBooking
// reference vidoe - https://youtu.be/IZh2t8UAnjk?si=V5XkITsDev5FdjwG
/*
“Authentication and authorization are two different security concepts. Authentication means verifying the identity of a user — basically, ‘Who are you?’ For example,
 when I log in with a username and password, the system verifies my credentials and may generate an access token.

Authorization comes after authentication. It determines what that authenticated user is allowed to access or perform — basically, 
‘What are you allowed to do?’ For example, a normal user may be allowed to view their profile, while an admin may be allowed to create, update, or delete users.

So, authentication verifies the identity, whereas authorization verifies the permissions.”
*/

import { test, expect, request } from "@playwright/test";

let tokenValue: string;

test.beforeAll("Get Authentication Token", async ({ request }) => {
    const respToken = await request.post(
        "https://restful-booker.herokuapp.com/auth",
        {
            data: {
                username: "admin",
                password: "password123"
            }
        }
    );

    expect(respToken.status()).toBe(200);

    tokenValue = (await respToken.json()).token;
});



test("Authentication of Get call", async ({ request }) => {
    const respGet = await request.get('https://restful-booker.herokuapp.com/booking', {
        headers: {
            "Cookie": `token=${tokenValue}`
        }
    })
    console.log("GET Status:", respGet.status());
    console.log("GET Response:", await respGet.text());
    expect(respGet.ok()).toBeTruthy();
})


test("Authentication of GetById call", async ({ request }) => {
    const respGetById = await request.get('https://restful-booker.herokuapp.com/booking/8', {
        headers: {
            "Cookie": `token=${tokenValue}`
        }
    })
    console.log("GET By ID  Status:", respGetById.status());
    console.log("GET By ID Response:", await respGetById.text());
    expect(respGetById.ok()).toBeTruthy();
})

test("Authentication of Create call using token", async ({ request }) => {
    const respCreate = await request.post(
        "https://restful-booker.herokuapp.com/booking",
        {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Cookie": `token=${tokenValue}`
            },
            data: {
                "firstname": "Jim",
                "lastname": "Brown",
                "totalprice": 111,
                "depositpaid": true,
                "bookingdates": {
                    "checkin": "2018-01-01",
                    "checkout": "2019-01-01"
                },
                "additionalneeds": "Breakfast"
            }
        }
    );

    console.log("Create Status:", respCreate.status());
    console.log("Create Response:", await respCreate.text());

    expect(respCreate.ok()).toBeTruthy();
});

test("Authentication of PUT call using token", async ({ request }) => {
    const respPut = await request.put(
        "https://restful-booker.herokuapp.com/booking/5",
        {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Cookie": `token=${tokenValue}`
            },
            data: {
                firstname: "WinInfinite",
                lastname: "Brown",
                totalprice: 111,
                depositpaid: true,
                bookingdates: {
                    checkin: "2018-01-01",
                    checkout: "2019-01-01"
                }
            }
        }
    );

    console.log("PUT Status:", respPut.status());
    console.log("PUT Response:", await respPut.text());

    expect(respPut.ok()).toBeTruthy();
});

test("Authentication of PATCH call using token", async ({ request }) => {
    const respPatch = await request.patch(
        "https://restful-booker.herokuapp.com/booking/5",
        {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Cookie": `token=${tokenValue}`
            },
            data: {
                firstname: "WinInfinite",
                lastname: "Brown",
            }
        }
    );

    console.log("PATCH Status:", respPatch.status());
    console.log("PATCH Response:", await respPatch.text());

    expect(respPatch.ok()).toBeTruthy();
});

test("Delete action with authentication", async ({ request }) => {
    const respDelete = await request.delete(
        "https://restful-booker.herokuapp.com/booking/11",
        {
            headers: {
                "Cookie": `token=${tokenValue}`
            }
        }
    );

    console.log("DELETE  Status:", respDelete.status());
    console.log("DELETE Response:", await respDelete.text());
    expect(respDelete.status()).toBe(201);
});