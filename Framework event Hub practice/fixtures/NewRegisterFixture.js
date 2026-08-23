import { test as base, expect } from '@playwright/test';
import { NewRegistrationPage } from '../pages/NewRegesterPage';

export const test = base.extend({
  newRegistrationPage: async ({ page }, use) => {
    await use(new NewRegistrationPage(page));
  },
});

export { expect };