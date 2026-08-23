const { test, expect } = require("@playwright/test");
const { ApiClient } = require("../utils/apiClient");
const users = require("../testdata/userPayloads");

test.describe("Create User - Positive Scenarios", () => {

    let apiClient;

    test.beforeEach(async ({ request }) => {
        apiClient = new ApiClient(request);
    });


    // 1. Create user with valid data
    test("POS-01 - Create user with valid data", async () => {

        const response = await apiClient.createUser(users.validUser);

        expect(response.status()).toBe(201);

        const body = await response.json();

        expect(body.id).toEqual(expect.any(Number));
        expect(body.name).toBe("Neeraja");
        expect(body.username).toBe("neeraja");
        expect(body.email).toBe("neeraja@test.com");
    });


    // 2. Validate response content type
    test("POS-02 - Validate response content type", async () => {

        const response = await apiClient.createUser(users.validUser);

        expect(response.status()).toBe(201);

        const contentType = response.headers()["content-type"];

        expect(contentType).toContain("application/json");
    });


    // 3. Validate response time
    test("POS-03 - Validate API response time", async () => {

        const startTime = Date.now();

        const response = await apiClient.createUser(users.validUser);

        const endTime = Date.now();

        expect(response.status()).toBe(201);
        expect(endTime - startTime).toBeLessThan(5000);
    });


    // 4. Create user with different name
    test("POS-04 - Create user with different name", async () => {

        const payload = {
            name: "Rahul",
            username: "rahul",
            email: "rahul@test.com"
        };

        const response = await apiClient.createUser(payload);

        expect(response.status()).toBe(201);

        const body = await response.json();

        expect(body.name).toBe("Rahul");
    });


    // 5. Create user with uppercase values
    test("POS-05 - Create user with uppercase values", async () => {

        const payload = {
            name: "NEERAJA",
            username: "NEERAJA",
            email: "NEERAJA@TEST.COM"
        };

        const response = await apiClient.createUser(payload);

        expect(response.status()).toBe(201);

        const body = await response.json();

        expect(body.name).toBe("NEERAJA");
    });


    // 6. Create user with special characters in name
    test("POS-06 - Create user with special characters", async () => {

        const payload = {
            name: "Neeraja G@ddam",
            username: "neeraja123",
            email: "neeraja123@test.com"
        };

        const response = await apiClient.createUser(payload);

        expect(response.status()).toBe(201);
    });


    // 7. Validate generated user ID
    test("POS-07 - Validate generated user ID", async () => {

        const response = await apiClient.createUser(users.validUser);

        expect(response.status()).toBe(201);

        const body = await response.json();

        expect(body.id).toEqual(expect.any(Number));
        expect(body.id).toBeGreaterThan(0);
    });


    // 8. Validate all response fields
    test("POS-08 - Validate response fields", async () => {

        const response = await apiClient.createUser(users.validUser);

        expect(response.status()).toBe(201);

        const body = await response.json();

        expect(body).toHaveProperty("id");
        expect(body).toHaveProperty("name");
        expect(body).toHaveProperty("username");
        expect(body).toHaveProperty("email");
    });


    // 9. Validate response data types
    test("POS-09 - Validate response data types", async () => {

        const response = await apiClient.createUser(users.validUser);

        const body = await response.json();

        expect(body.id).toEqual(expect.any(Number));
        expect(body.name).toEqual(expect.any(String));
        expect(body.username).toEqual(expect.any(String));
        expect(body.email).toEqual(expect.any(String));
    });


    // 10. Validate created user response matches request
    test("POS-10 - Validate request and response data", async () => {

        const payload = users.validUser;

        const response = await apiClient.createUser(payload);

        expect(response.status()).toBe(201);

        const body = await response.json();

        expect(body.name).toBe(payload.name);
        expect(body.username).toBe(payload.username);
        expect(body.email).toBe(payload.email);
    });

});