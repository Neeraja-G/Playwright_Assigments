const { test, expect } = require("../fixtures/api.fixture");

test("Get all bookings", async ({ bookingService }) => {

    const response = await bookingService.getBookings();

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(Array.isArray(body)).toBeTruthy();
});

test("Get booking by ID", async ({ bookingService }) => {

    const response = await bookingService.getBookingById(1);

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body).toHaveProperty("firstname");
    expect(body).toHaveProperty("lastname");
    expect(body).toHaveProperty("totalprice");
});