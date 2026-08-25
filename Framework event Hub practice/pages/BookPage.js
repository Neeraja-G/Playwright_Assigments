import { expect } from '@playwright/test';
export class BookingPage {
  constructor(page) {
    this.page = page;

    this.eventCard = page.locator('.p-4').nth(1);
    this.Book = this.eventCard.getByRole('link', {
      name: 'Book Now'
    });
    this.bookNowButton = this.eventCard.getByTestId('book-now-btn');
    this.mybookings = page.getByRole('button',{name: 'My Bookings'})
    this.browseevents = page.getByRole('button',{name:"Browse Events →"})

    this.Fullname = page.getByPlaceholder('Your full name');
    this.Email = page.getByPlaceholder('you@email.com');
    this.Phonenumber = page.getByPlaceholder('+91 98765 43210');

    this.ConfirmBooking = page.getByRole('button', {
      name: 'Confirm Booking'
    });

    this.SuccessMsg = page.getByRole('heading', {
      name: 'Booking Confirmed! 🎉'
    });

    this.Exploreallevents = page.getByRole('button', {
      name: 'Explore All Events'
    });
  }

  async ClickBookNow() {
    await this.Book.click();
  }
  async SoldOut(){
    return (await this.bookNowButton.getAttribute('aria-disabled')) === 'true';
  }
  async MyBookins(){
    await this.mybookings.click()
  }

  async BrowseEvents(){
    await this.browseevents.click()
  }
  async BookTickets(fullname, email1, phonenumber) {
    await this.Fullname.fill(fullname);
    await this.Email.fill(email1);
    await this.Phonenumber.fill(String(phonenumber));
  }

  async ClickConfirmBooking() {
    await this.ConfirmBooking.click();
  }

  async BookingSuccessMessage() {
    await expect(this.SuccessMsg).toBeVisible();
  }

  async ExploreAllEvents(){
   await this.Exploreallevents.click()
  }
}