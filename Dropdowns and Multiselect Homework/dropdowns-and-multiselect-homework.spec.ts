import { test, type Locator } from '@playwright/test';

test('dropdowns and multiselect homework', async ({ page }) => {
  await page.goto('https://demoqa.com/');

  await page.locator('text=Widgets').click();
  await page.locator('text=Select Menu').click();

  await page.locator('#withOptGroup').click();

  const selectValueOptions: Locator = page.locator('div[id^="react-select-2-option"]');
  const selectValueCount = await selectValueOptions.count();
  console.log(`Total clickable elements found: ${selectValueCount}`);

  for (let i = 0; i < selectValueCount; i++) {
    const optionText = await selectValueOptions.nth(i).textContent();
    console.log(`Option ${i + 1}: ${optionText?.trim()}`);

    if (optionText?.trim() === 'Group 2, option 2') {
      await selectValueOptions.nth(i).click();
      break;
    }
  }

  await page.locator('#selectOne').click();

  const selectOneOptions: Locator = page.locator('div[id^="react-select-3-option"]');
  const selectOneCount = await selectOneOptions.count();

  for (let i = 0; i < selectOneCount; i++) {
    const optionText = await selectOneOptions.nth(i).textContent();
    console.log(`Option ${i + 1}: ${optionText?.trim()}`);

    if (optionText?.trim() === 'Prof.') {
      await selectOneOptions.nth(i).click();
      break;
    }
  }

  await page.locator('#selectOne').click();
  await page.locator('div[id^="react-select-3-option"]').nth(0).click();
});
