import { test, expect } from '@playwright/test';
import { urls } from '../utils/Urls';
import { AddNewEvent } from '../pages/AddEventPage'
import { AddEventTestData } from '../test-data/AddEventTestData'


test('Add Event', async ({ page }) => {

    const addnewevent = new AddNewEvent(page);

    await page.goto(urls.events);

    await addnewevent.AddNewEvent();
    await addnewevent.AddEventForm(
        AddEventTestData.title,
        AddEventTestData.description,
        AddEventTestData.category,
        AddEventTestData.city,
        AddEventTestData.venue,
        AddEventTestData.date,
        AddEventTestData.price,
        AddEventTestData.totalseats,
        AddEventTestData.imageurl
    )
   await addnewevent.AddEvent()
});