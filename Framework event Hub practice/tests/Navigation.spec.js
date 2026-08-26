import {test, expect} from '@playwright/test'
import {urls} from '../utils/Urls'
import {Navigation} from '../pages/NavigationPage'


test('Navigation Verification', async({page}) =>{
     const navigation = new Navigation(page)
     await page.goto(urls.homepage)
     await navigation.HomeNavigation()
     await expect(page).toHaveURL(urls.homepage)
     await navigation.EventsNavigation()
     await expect(page).toHaveURL(urls.events)
     await navigation.MyBookingNavigation()
     await expect(page).toHaveURL(urls.ViewBooking)
     const apiDocsPage = await navigation.APIDocNavigation()
     await expect(apiDocsPage).toHaveURL(urls.apiDocs)
     await apiDocsPage.close()
     await navigation.AdminDropDown()
     await navigation.ManageEventsNavigation()
     await expect(page).toHaveURL(urls.addevent)
     await navigation.ManageBookingsNavigation()
     await expect(page).toHaveURL(urls.managebooking)
     await navigation.Logout()
     await expect(page).toHaveURL(urls.login)

});