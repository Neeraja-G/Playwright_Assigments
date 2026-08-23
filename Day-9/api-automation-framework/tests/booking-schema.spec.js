const { test, expect } =
    require("../fixtures/api.fixture");

const { validateSchema } =
    require("../utils/schema-validator");

const bookingSchema =
    require("../schemas/booking.schema");


test("Validate booking schema", async ({
    bookingService
}) => {

    const response =
        await bookingService.getBookingById(1);

    expect(response.status()).toBe(200);

    const body =
        await response.json();

    const isValid =
        validateSchema(body, bookingSchema);

    expect(isValid).toBeTruthy();
});