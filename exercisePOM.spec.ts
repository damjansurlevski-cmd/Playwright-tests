import { expect, test } from "@playwright/test";
import { HomePage } from "../pages/webpage";
import { WebTablePage } from "../pages/webTablepage";

test("filters the web table by country and logs the matching name", async ({ page }) => {

  const homePage = new HomePage(page);
  const webTablePage = new WebTablePage(page);

  const country = "Spain";

  await page.goto(homePage.testUrl);

  await expect(page).toHaveTitle("Home | QA Automation Labs");
  await page.waitForTimeout(3000);

  await homePage.goToWebTable();

  await expect(page).toHaveTitle("Table Demo | QA Automation Labs");
  await page.waitForTimeout(3000);

  await webTablePage.filterByCountry(country);

  await page.waitForTimeout(3000);

  const name = await webTablePage.getNameForCountry(country);

  console.log(`Filtered country: ${country}`);
  console.log(`Matching name: ${name}`);

  expect(name).toBe("Maria Garcia");
});