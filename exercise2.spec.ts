import { expect, test } from '@playwright/test';
import { DemoqaHomePage } from '../pages/demoqaHomePage.ts';
import { ElementsPage } from '../pages/elementsPage.ts';
import { TextBoxPage } from '../pages/textBoxPage.ts';

test('Validate the Labels in the Text Box', async ({ page }) => {
  const demoqaHomePage = new DemoqaHomePage(page);
  const elementsPage = new ElementsPage(page);
  const textBoxPage = new TextBoxPage(page);

  await demoqaHomePage.clickElements();

  await expect(page).toHaveTitle('demosite');

  await elementsPage.clickTextBox();

  await expect(page.locator(textBoxPage.fullNameLabelLocator)).toHaveText('Full Name');
  await expect(page.locator(textBoxPage.emailLabelLocator)).toHaveText('Email');
  await expect(page.locator(textBoxPage.currentAddressLabelLocator)).toHaveText('Current Address');
  await expect(page.locator(textBoxPage.permanentAddressLabelLocator)).toHaveText('Permanent Address');
});

test.beforeEach(async ({ page }) => {
  await page.goto('https://demoqa.com/');
});

test.afterEach(async ({ page }) => {
  await page.close();
});