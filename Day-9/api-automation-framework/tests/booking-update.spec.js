const { test, expect } =
    require("../fixtures/api.fixture");

const {
    createBookingData,
    updateBookingData
} = require("../utils/test-data");


test("Update complete booking using PUT", async ({
    bookingService,
    token
}) => {

    // 1. Create booking
    const createResponse =
        await bookingService.createBooking(
            createBookingData()
        );

    expect(createResponse.status()).toBe(200);

    const createBody =
        await createResponse.json();

    const bookingId =
        createBody.bookingid;

    console.log("Booking ID:", bookingId);


    // 2. Update complete booking
    const updatedData =
        updateBookingData();

    const updateResponse =
        await bookingService.updateBooking(
            bookingId,
            updatedData,
            token
        );


    // 3. Validate status
    expect(updateResponse.status()).toBe(200);


    // 4. Validate response
    const updateBody =
        await updateResponse.json();

    console.log("Updated booking:", updateBody);


    expect(updateBody.firstname)
        .toBe(updatedData.firstname);

    expect(updateBody.lastname)
        .toBe(updatedData.lastname);

    expect(updateBody.totalprice)
        .toBe(updatedData.totalprice);

    expect(updateBody.depositpaid)
        .toBe(updatedData.depositpaid);
});