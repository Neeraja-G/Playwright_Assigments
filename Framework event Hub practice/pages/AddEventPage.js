import { expect } from '@playwright/test';

export class AddNewEvent {
    constructor(page) {
        this.page = page;

        this.addneweventbutton = page.getByRole('button', {
            name: 'Add New Event'
        });

        this.newevent = page.getByRole('heading', {
            name: '+ New Event'
        });

        this.title = page.getByPlaceholder('Event title');
        this.description = page.getByPlaceholder('Describe the event…');
        this.category = page.locator('#category');
        this.city = page.locator('#city');
        this.venue = page.locator('#venue');
        this.date = page.locator('[id="event-date-&-time"]');
        this.price = page.locator('[id="price-($)"]');
        this.totalseats = page.locator('#total-seats');
        this.imageurl = page.locator('[id="image-url-(optional)"]');
        this.addevent = page.locator('#add-event-btn')
    }

    async AddNewEvent() {
        await this.addneweventbutton.click();
    }

    async AddEventForm(
        title,
        description,
        category,
        city,
        venue,
        date,
        price,
        totalseats,
        imageurl
    ) {
        await expect(this.newevent).toBeVisible();

        await this.title.fill(title);
        await this.description.fill(description);

        // For <select>
        await this.category.selectOption({ label: category });

        await this.city.fill(city);
        await this.venue.fill(venue);
        const dateTime = date.includes('T') ? date : `${date}T00:00`;
        await this.date.fill(dateTime);
        await this.price.fill(String(price));
        await this.totalseats.fill(String(totalseats));
        await this.imageurl.fill(imageurl);
    }

    async AddEvent(){
        await this.addevent.click()
    }
}