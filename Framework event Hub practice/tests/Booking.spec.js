import { test, expect } from '../fixtures/BookingFixture';
import { urls } from '../utils/Urls';
import { BookingTestData } from '../test-data/BookingTestData';

test('Booking Event', async ({ page, Booking }) => {
   await page.goto(urls.homepage)
   await page.waitForTimeout(5000)

// await page.waitForLoadState('networkidle');
  await Booking.ClickBookNow();

  await expect(page).toHaveURL(urls.Booking);

  await Booking.BookTickets(
    BookingTestData.fullname,
    BookingTestData.email1,
    BookingTestData.phonenumber
  );

  await Booking.ClickConfirmBooking();

  await Booking.BookingSuccessMessage();
});