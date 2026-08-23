export class BookingPage {
  constructor(page) {
    this.page = page;

    this.Book = page
      .locator('.p-4')
      .first()
      .getByRole('link', { name: 'Book Now' });

    this.Fullname = page.getByPlaceholder('Your full name');
    this.Email = page.getByPlaceholder('you@email.com');
    this.Phonenumber = page.getByPlaceholder('+919876543210');

    this.ConfirmBooking = page.getByRole('button', {
      name: 'Confirm Booking'
    });

    this.SuccessMsg = page.getByText('Booking Confirmed! 🎉');
  }

  async ClickBookNow() {
    await this.Book.click();
  }

  async BookTickets(fullname, email1, phonenumber) {
    await this.Fullname.fill(fullname);
    await this.Email.fill(email1);
    await this.Phonenumber.fill(phonenumber);
  }

  async ClickConfirmBooking() {
    await this.ConfirmBooking.click();
  }

  async BookingSuccessMessage() {
    await this.SuccessMsg.toBeVisible();
  }
}