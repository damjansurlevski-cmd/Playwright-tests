import { test } from '@playwright/test';

test.setTimeout(120000);

test('alerts iframes and pages homework', async ({ page, context }) => {
  await page.goto('https://demoqa.com/');
  await page.waitForTimeout(1000);

  await page.locator('.card-body').filter({ hasText: 'Alerts, Frame & Windows' }).click();
  await page.waitForTimeout(1000);

  await page.locator('span').filter({ hasText: /^Alerts$/ }).click();
  await page.waitForTimeout(1000);

  page.once('dialog', async dialog => {
    console.log(dialog.message());
    await dialog.accept('Damjan');
  });

  await page.locator('#promtButton').click();
  await page.waitForTimeout(1000);

  const promptResult = await page.locator('#promptResult').textContent();
  console.log(promptResult);
  await page.waitForTimeout(1000);

  await page.locator('span').filter({ hasText: /^Frames$/ }).click();
  await page.waitForTimeout(1000);

  const firstFrameText = await page.frameLocator('#frame1').locator('#sampleHeading').textContent();
  console.log(firstFrameText);
  await page.waitForTimeout(1000);

  const secondFrameText = await page.frameLocator('#frame2').locator('#sampleHeading').textContent();
  console.log(secondFrameText);
  await page.waitForTimeout(1000);

  await page.locator('span').filter({ hasText: /^Nested Frames$/ }).click();
  await page.waitForTimeout(1000);

  const parentFrame = page.frame({ name: 'frame1' });

  if (parentFrame) {
    const parentText = await parentFrame.locator('body').textContent();
    console.log(parentText?.trim());

    const childFrame = parentFrame.childFrames()[0];

    if (childFrame) {
      const childText = await childFrame.locator('body').textContent();
      console.log(childText?.trim());
    }
  }

  await page.waitForTimeout(1000);

  await page.goto('https://testing.qaautomationlabs.com/index.php');
  await page.waitForTimeout(1000);

  await page.getByText('Iframe').click();
  await page.waitForTimeout(1000);

  const firstQaFrame = page.frameLocator('iframe').first();
  await firstQaFrame.getByRole('button').click();
  await page.waitForTimeout(1000);
  const firstQaFrameText = await firstQaFrame.locator('body').textContent();
  console.log(firstQaFrameText?.trim());
  await page.waitForTimeout(1000);

  const secondQaFrame = page.frameLocator('iframe').nth(1);
  await secondQaFrame.getByRole('button').click();
  await page.waitForTimeout(1000);
  const secondQaFrameText = await secondQaFrame.locator('body').textContent();
  console.log(secondQaFrameText?.trim());
  await page.waitForTimeout(1000);

  await page.goto('https://demoqa.com/');
  await page.waitForTimeout(1000);

  await page.locator('.card-body').filter({ hasText: 'Alerts, Frame & Windows' }).click();
  await page.waitForTimeout(1000);

  await page.locator('span').filter({ hasText: /^Browser Windows$/ }).click();
  await page.waitForTimeout(1000);

  const newTabPromise = context.waitForEvent('page');
  await page.locator('#tabButton').click();
  const newTab = await newTabPromise;
  await newTab.waitForLoadState();
  await page.waitForTimeout(1000);
  console.log(await newTab.locator('#sampleHeading').textContent());
  await newTab.close();
  await page.waitForTimeout(1000);

  const newWindowPromise = context.waitForEvent('page');
  await page.locator('#windowButton').click();
  const newWindow = await newWindowPromise;
  await newWindow.waitForLoadState();
  await page.waitForTimeout(1000);
  console.log(await newWindow.locator('#sampleHeading').textContent());
  console.log(await newWindow.title());
  await newWindow.close();
  await page.waitForTimeout(1000);

  const pageOne = await context.newPage();
  await pageOne.goto('https://www.setec.mk/', { waitUntil: 'domcontentloaded' });
  console.log(await pageOne.title());
  await page.waitForTimeout(1000);

  const pageTwo = await context.newPage();
  await pageTwo.goto('https://www.anhoch.com/', { waitUntil: 'domcontentloaded' });
  console.log(await pageTwo.title());
  await page.waitForTimeout(1000);

  const pageThree = await context.newPage();
  await pageThree.goto('https://www.neptun.mk/', { waitUntil: 'domcontentloaded' });
  console.log(await pageThree.title());
  await page.waitForTimeout(1000);
});
