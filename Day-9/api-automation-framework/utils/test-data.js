function createBookingData() {

    return {
        firstname: "Neeraja",
        lastname: "Gaddam",
        totalprice: 1500,
        depositpaid: true,

        bookingdates: {
            checkin: "2026-08-20",
            checkout: "2026-08-25"
        },

        additionalneeds: "Breakfast"
    };
}


function updateBookingData() {

    return {
        firstname: "Neeraja Updated",
        lastname: "Gaddam Updated",
        totalprice: 2000,
        depositpaid: false,

        bookingdates: {
            checkin: "2026-08-22",
            checkout: "2026-08-28"
        },

        additionalneeds: "Lunch"
    };
}


module.exports = {
    createBookingData,
    updateBookingData
};