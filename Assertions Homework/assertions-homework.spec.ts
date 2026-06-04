import { expect, test } from '@playwright/test';

test('Fill automation practice form and check result', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');

  await expect(page).toHaveURL('https://demoqa.com/automation-practice-form');
  await expect(page).toHaveTitle('DEMOQA');
  await expect(page.locator('h1')).toHaveText('Practice Form');

  await expect(page.locator('#firstName')).toBeVisible();
  await expect(page.locator('#lastName')).toBeVisible();
  await expect(page.locator('#userEmail')).toBeVisible();
  await expect(page.locator('#userNumber')).toBeVisible();

  await page.locator('#firstName').fill('Damjan');
  await page.locator('#lastName').fill('Surlevski');
  await page.locator('#userEmail').fill('damjan@example.com');
  await page.locator('label[for="gender-radio-1"]').click();
  await page.locator('#userNumber').fill('0712345678');

  await expect(page.locator('#firstName')).toHaveValue('Damjan');
  await expect(page.locator('#lastName')).toHaveValue('Surlevski');
  await expect(page.locator('#userEmail')).toHaveValue('damjan@example.com');
  await expect(page.locator('#gender-radio-1')).toBeChecked();
  await expect(page.locator('#userNumber')).toHaveValue('0712345678');

  await page.locator('#subjectsInput').fill('Maths');
  await page.keyboard.press('Enter');

  await page.locator('label[for="hobbies-checkbox-1"]').click();
  await page.locator('label[for="hobbies-checkbox-3"]').click();

  await expect(page.locator('#hobbies-checkbox-1')).toBeChecked();
  await expect(page.locator('#hobbies-checkbox-3')).toBeChecked();

  await page.locator('#currentAddress').fill('Test Address 123');
  await expect(page.locator('#currentAddress')).toHaveValue('Test Address 123');

  await page.locator('#state').click();
  await page.locator('#react-select-3-option-0').click();
  await page.locator('#city').click();
  await page.locator('#react-select-4-option-0').click();

  await expect(page.locator('#state')).toContainText('NCR');
  await expect(page.locator('#city')).toContainText('Delhi');

  await page.locator('#submit').scrollIntoViewIfNeeded();
  await expect(page.locator('#submit')).toBeEnabled();
  await page.locator('#submit').click({ force: true });

  await expect(page.locator('#example-modal-sizes-title-lg')).toHaveText('Thanks for submitting the form');
  await expect(page.locator('.modal-content')).toBeVisible();
  await expect(page.locator('tbody tr')).toHaveCount(10);

  await expect(page.locator('tbody')).toContainText('Student Name');
  await expect(page.locator('tbody')).toContainText('Damjan Surlevski');
  await expect(page.locator('tbody')).toContainText('Student Email');
  await expect(page.locator('tbody')).toContainText('damjan@example.com');
  await expect(page.locator('tbody')).toContainText('Gender');
  await expect(page.locator('tbody')).toContainText('Male');
  await expect(page.locator('tbody')).toContainText('Mobile');
  await expect(page.locator('tbody')).toContainText('0712345678');
  await expect(page.locator('tbody')).toContainText('Subjects');
  await expect(page.locator('tbody')).toContainText('Maths');
  await expect(page.locator('tbody')).toContainText('Hobbies');
  await expect(page.locator('tbody')).toContainText('Sports, Music');
  await expect(page.locator('tbody')).toContainText('Address');
  await expect(page.locator('tbody')).toContainText('Test Address 123');
  await expect(page.locator('tbody')).toContainText('State and City');
  await expect(page.locator('tbody')).toContainText('NCR Delhi');

  await page.locator('#closeLargeModal').click({ force: true });
  await expect(page.locator('.modal-content')).not.toBeVisible();
});
