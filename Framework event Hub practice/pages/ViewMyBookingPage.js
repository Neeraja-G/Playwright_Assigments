import { expect } from '@playwright/test';

export class ViewBookings {
    constructor(page) {
        this.page = page;

        this.viewmybooking = page.getByRole('button', {
            name: 'View My Bookings'
        });

        this.myBookingmsg = page.getByRole('heading', {
            name: 'My Bookings'
        });
    }

    async ViewMyBookings() {
        await this.viewmybooking.click();
    }

    async MyBookingMsg() {
        await expect(this.myBookingmsg).toBeVisible();
    }
}