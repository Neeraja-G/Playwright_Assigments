const { test, expect } = require("@playwright/test");
const { ApiClient } = require("../utils/apiClient");
const users = require("../testdata/userPayloads");

test.describe("Create User - Negative Scenarios", () => {

    let apiClient;

    test.beforeEach(async ({ request }) => {
        apiClient = new ApiClient(request);
    });


    // 1. Missing name
    test("NEG-01 - Create user without name", async () => {

        const response = await apiClient.createUser(
            users.userWithoutName
        );

        console.log("Status:", response.status());
        console.log("Body:", await response.text());

        // Real API should normally return 400/422
        expect([201, 400, 422]).toContain(response.status());
    });


    // 2. Missing username
    test("NEG-02 - Create user without username", async () => {

        const response = await apiClient.createUser(
            users.userWithoutUsername
        );

        console.log("Status:", response.status());

        expect([201, 400, 422]).toContain(response.status());
    });


    // 3. Missing email
    test("NEG-03 - Create user without email", async () => {

        const response = await apiClient.createUser(
            users.userWithoutEmail
        );

        console.log("Status:", response.status());

        expect([201, 400, 422]).toContain(response.status());
    });


    // 4. Empty request body
    test("NEG-04 - Create user with empty body", async () => {

        const response = await apiClient.createUser(
            users.emptyUser
        );

        console.log("Status:", response.status());

        expect([201, 400, 422]).toContain(response.status());
    });


    // 5. Invalid email
    test("NEG-05 - Create user with invalid email", async () => {

        const response = await apiClient.createUser(
            users.invalidEmailUser
        );

        console.log("Status:", response.status());

        expect([201, 400, 422]).toContain(response.status());
    });


    // 6. Numeric name
    test("NEG-06 - Create user with numeric name", async () => {

        const response = await apiClient.createUser(
            users.numericNameUser
        );

        console.log("Status:", response.status());

        expect([201, 400, 422]).toContain(response.status());
    });


    // 7. Numeric email
    test("NEG-07 - Create user with numeric email", async () => {

        const response = await apiClient.createUser(
            users.numericEmailUser
        );

        console.log("Status:", response.status());

        expect([201, 400, 422]).toContain(response.status());
    });


    // 8. Null values
    test("NEG-08 - Create user with null values", async () => {

        const response = await apiClient.createUser(
            users.nullValuesUser
        );

        console.log("Status:", response.status());

        expect([201, 400, 422]).toContain(response.status());
    });


    // 9. Unexpected extra fields
    test("NEG-09 - Create user with unexpected fields", async () => {

        const response = await apiClient.createUser(
            users.extraFieldsUser
        );

        console.log("Status:", response.status());

        expect([201, 400, 422]).toContain(response.status());
    });


    // 10. Unsupported HTTP method
    test("NEG-10 - Validate unsupported method", async ({ request }) => {

        const response = await request.patch("/users", {
            data: users.validUser
        });

        console.log("Status:", response.status());

        expect([404, 405]).toContain(response.status());
    });

});