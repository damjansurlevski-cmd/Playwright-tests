import { expect, test, type Page } from '@playwright/test';

async function removeDemoQaAds(page: Page) {
  await page.addStyleTag({
    content: `
      #fixedban,
      .advertisement,
      .adsbygoogle,
      iframe[id^="google_ads_iframe"],
      iframe[src*="googlesyndication"],
      div[id^="google_ads"] {
        display: none !important;
        visibility: hidden !important;
        height: 0 !important;
        width: 0 !important;
        pointer-events: none !important;
      }
    `,
  });
}

test.describe('DemoQA Actions Homework', () => {
  test('Text Box - fill all inputs and submit', async ({ page }) => {
    await page.goto('https://demoqa.com/text-box');
    await removeDemoQaAds(page);

    await page.locator('#userName').fill('Damjan Surlevski');
    await page.locator('#userEmail').fill('damjan.surlevski@example.com');
    await page.locator('#currentAddress').fill('Skopje, North Macedonia');
    await page.locator('#permanentAddress').fill('Prespa, North Macedonia');

    await page.locator('#submit').scrollIntoViewIfNeeded();
    await page.locator('#submit').click();

    await expect(page.locator('#output')).toBeVisible();
    await expect(page.locator('#output #name')).toContainText('Damjan Surlevski');
    await expect(page.locator('#output #email')).toContainText('damjan.surlevski@example.com');
    await expect(page.locator('#output #currentAddress')).toContainText('Skopje, North Macedonia');
    await expect(page.locator('#output #permanentAddress')).toContainText('Prespa, North Macedonia');
  });

  test('Check Box - select Public, Private and Word File.doc', async ({ page }) => {
    await page.goto('https://demoqa.com/checkbox');
    await removeDemoQaAds(page);

    await page.locator('button[title="Expand all"]').click();

    await page.locator('label[for="tree-node-public"]').scrollIntoViewIfNeeded();
    await page.locator('label[for="tree-node-public"]').click();

    await page.locator('label[for="tree-node-private"]').scrollIntoViewIfNeeded();
    await page.locator('label[for="tree-node-private"]').click();

    await page.locator('label[for="tree-node-wordFile"]').scrollIntoViewIfNeeded();
    await page.locator('label[for="tree-node-wordFile"]').click();

    await expect(page.locator('#tree-node-public')).toBeChecked();
    await expect(page.locator('#tree-node-private')).toBeChecked();
    await expect(page.locator('#tree-node-wordFile')).toBeChecked();

    await expect(page.locator('#result')).toContainText('public');
    await expect(page.locator('#result')).toContainText('private');
    await expect(page.locator('#result')).toContainText('wordFile');
  });

  test('Radio Button - click Yes and Impressive', async ({ page }) => {
    await page.goto('https://demoqa.com/radio-button');
    await removeDemoQaAds(page);

    await page.locator('label[for="yesRadio"]').click();
    await expect(page.locator('.text-success')).toHaveText('Yes');

    await page.locator('label[for="impressiveRadio"]').click();
    await expect(page.locator('.text-success')).toHaveText('Impressive');
  });

  test('Web Tables - add a new record', async ({ page }) => {
    await page.goto('https://demoqa.com/webtables');
    await removeDemoQaAds(page);

    await page.locator('#addNewRecordButton').click();

    await page.locator('#firstName').fill('Damjan');
    await page.locator('#lastName').fill('Surlevski');
    await page.locator('#userEmail').fill('damjan.surlevski@example.com');
    await page.locator('#age').fill('35');
    await page.locator('#salary').fill('50000');
    await page.locator('#department').fill('Quality Assurance');

    await page.locator('#submit').click();

    await expect(page.getByRole('grid')).toContainText('Damjan');
    await expect(page.getByRole('grid')).toContainText('Surlevski');
    await expect(page.getByRole('grid')).toContainText('damjan.surlevski@example.com');
    await expect(page.getByRole('grid')).toContainText('35');
    await expect(page.getByRole('grid')).toContainText('50000');
    await expect(page.getByRole('grid')).toContainText('Quality Assurance');
  });
});
