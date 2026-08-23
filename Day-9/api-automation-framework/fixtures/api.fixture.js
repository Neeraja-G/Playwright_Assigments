const { test: base } = require("@playwright/test");

const AuthService = require("../services/auth.service");
const BookingService = require("../services/booking.service");

const config = require("../config/env.config");

const test = base.extend({

    authService: async ({ request }, use) => {

        const authService =
            new AuthService(request, config);

        await use(authService);
    },

    token: async ({ authService }, use) => {

        const response =
            await authService.login();

        const body =
            await response.json();

        await use(body.token);
    },

    bookingService: async ({ request }, use) => {

        const bookingService =
            new BookingService(request);

        await use(bookingService);
    }
});

module.exports = {
    test,
    expect: base.expect
};