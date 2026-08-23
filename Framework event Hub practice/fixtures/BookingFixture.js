import { test as base, expect } from '@playwright/test';
import { BookingPage } from '../pages/BookPage';

export const test = base.extend({
  Booking: async ({ page }, use) => {
    await use(new BookingPage(page));
  },
});

export { expect };