const { test, expect } = require("../fixtures/api.fixture");
const { createBookingData } = require("../utils/test-data");

test("Create new booking", async ({ bookingService }) => {

    const bookingData = createBookingData();

    const response =
        await bookingService.createBooking(bookingData);

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body).toHaveProperty("bookingid");

    expect(body.booking.firstname)
        .toBe(bookingData.firstname);

    expect(body.booking.lastname)
        .toBe(bookingData.lastname);

    expect(body.booking.totalprice)
        .toBe(bookingData.totalprice);
});