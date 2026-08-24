import { test, expect } from '@playwright/test';
import { urls } from '../utils/Urls';
import { ViewBookings } from '../pages/ViewMyBookingPage';

test('View Bookings', async ({ page }) => {

    const viewBookings = new ViewBookings(page);

    await page.goto(urls.ViewBooking);

    await viewBookings.MyBookingMsg();

    await expect(page).toHaveURL(urls.ViewBooking);
});