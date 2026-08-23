const { test, expect } =
    require("../fixtures/api.fixture");

const {
    createBookingData
} = require("../utils/test-data");


test("Partially update booking using PATCH", async ({
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

    console.log("Created Booking ID:", bookingId);


    // 2. Get original booking
    const getResponse =
        await bookingService.getBookingById(
            bookingId
        );

    expect(getResponse.status()).toBe(200);

    const originalBooking =
        await getResponse.json();


    // 3. Partially update only firstname
    const patchData = {
        firstname: "Neeraja Updated"
    };

    const patchResponse =
        await bookingService.partialUpdateBooking(
            bookingId,
            patchData,
            token
        );


    // 4. Validate status
    expect(patchResponse.status()).toBe(200);


    // 5. Get updated response
    const updatedBooking =
        await patchResponse.json();

    console.log("Updated Booking:", updatedBooking);


    // 6. Validate changed field
    expect(updatedBooking.firstname)
        .toBe("Neeraja Updated");


    // 7. Validate unchanged fields
    expect(updatedBooking.lastname)
        .toBe(originalBooking.lastname);

    expect(updatedBooking.totalprice)
        .toBe(originalBooking.totalprice);

    expect(updatedBooking.depositpaid)
        .toBe(originalBooking.depositpaid);
});