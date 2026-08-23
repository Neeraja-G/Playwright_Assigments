const { test, expect } =
    require("../fixtures/api.fixture");

const {
    createBookingData
} = require("../utils/test-data");

test("Delete booking", async ({
    bookingService,
    token
}) => {

    const createResponse =
        await bookingService.createBooking(
            createBookingData()
        );

    expect(createResponse.status()).toBe(200);

    const createBody =
        await createResponse.json();

    const bookingId =
        createBody.bookingid;

    const deleteResponse =
        await bookingService.deleteBooking(
            bookingId,
            token
        );

    expect(deleteResponse.status()).toBe(201);
});