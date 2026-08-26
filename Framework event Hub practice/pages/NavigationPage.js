import { expect } from '@playwright/test';

export class Navigation {
    constructor(page) {
        this.page = page;

        // Main navigation
        this.home = page.locator('#nav-home')
        this.events = page.locator('#nav-events');
        this.viewall = page.getByRole('link',{name:'View all →'})
        this.mybooking = page.locator('#nav-bookings');
        this.apiDocs = page.getByRole('link', { name: 'API Docs' });

        // Admin dropdown
        this.admin = page.getByRole('button', { name: 'Admin' });
        this.manageEvents = page.getByRole('navigation').getByRole('link', { name: 'Manage Events' });
        this.manageBookings = page.getByRole('navigation').getByRole('link', { name: 'Manage Bookings' });
        this.logoutbutton = page.locator('#logout-btn')
    }


    async HomeNavigation(){
        await this.home.click()
    }

    async EventsNavigation(){
        await  this.events.click()
    }

    async ViewAll(){
        await this.viewall.click()
    }
    
    async MyBookingNavigation(){
        await  this.mybooking.click()
    }

    async APIDocNavigation(){
        const apiDocsPagePromise = this.page.waitForEvent('popup')
        await this.apiDocs.click()
        return await apiDocsPagePromise
    }

    async AdminDropDown(){
        await this.admin.click()
    }

    async ManageEventsNavigation(){
        await this.manageEvents.click()
    }

    async ManageBookingsNavigation(){
        await this.page.goto(new URL('/admin/bookings', this.page.url()).toString())
    }

    async Logout(){
        await this.logoutbutton.click()
    }

}