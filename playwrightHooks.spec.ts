import { test } from '@playwright/test';

test('Test 1', async ({ page }) => {
  await page.locator("xpath=//a[text()='Radio Button']").click();
  console.log(await page.title());
});

test('Test 2', async ({ page }) => {
  await page.locator("xpath=//a[text()='Web Table']").click();
  console.log(await page.title());
});

test('Test 3', async ({ page }) => {
  await page.locator("xpath=//a[text()='Drop Down']").click();
  console.log(await page.title());
});

// test.beforeAll("beforeAll hook", async () => {
//   console.log("This runs before all tests");
// });

test.beforeEach('beforeEach hook', async ({ page }) => {
  await page.goto('https://testing.qaautomationlabs.com');
});

test.afterEach('afterEach hook', async ({ page }) => {
  await page.close();
});

// test.beforeAll('beforeAll hook', async () => {
//   console.log('This runs before all tests');
// });

// test.beforeEach('beforeEach hook', async () => {
//   console.log('This runs before each test');
// });

// test.afterEach('afterEach hook', async () => {
//   console.log('This runs after each test');
// });

// test.afterAll('afterAll hook', async () => {
//   console.log('This runs after all tests');
// });

// test('Test 1', async () => {
//   console.log('This is Test 1');
// });

// test('Test 2', async () => {
//   console.log('This is Test 2');
// });