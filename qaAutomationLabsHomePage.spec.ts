import { expect, test } from "@playwright/test";
import { QaAutomationLabsHomePage } from "../pages/qaAutomationLabsHomePage";
import { CheckBoxPage } from "../pages/checkBoxPage";
import { RadioButtonPage } from "../pages/radioButtonPage";
import { DropDownPage } from "../pages/dropdownPage";       

test("Verify that user can navigate to checkbox page", async ({ page }) => {
  const qaAutomationLabsHomePage = new QaAutomationLabsHomePage(page);
  const checkBoxPage = new CheckBoxPage(page);

  await page.goto("https://testing.qaautomationlabs.com/");

  await expect(
    page.locator(qaAutomationLabsHomePage.checkBoxLocator)
  ).toBeVisible();

  await expect(
    page.locator(qaAutomationLabsHomePage.checkBoxLocator)
  ).toHaveText("Checkbox");

  await qaAutomationLabsHomePage.clickCheckBox();

  await expect(page.locator(checkBoxPage.headerLocator)).toHaveText(
    "Checkbox Demo"
  );
});

test("Verify that user can navigate to radio button page", async ({ page }) => {
  const qaAutomationLabsHomePage = new QaAutomationLabsHomePage(page);
  const radioButtonPage = new RadioButtonPage(page);

  await page.goto("https://testing.qaautomationlabs.com/");

  await expect(
    page.locator(qaAutomationLabsHomePage.radioButtonLocator)
  ).toBeVisible();

  await expect(
    page.locator(qaAutomationLabsHomePage.radioButtonLocator)
  ).toHaveText("Radio Button");

  await qaAutomationLabsHomePage.clickRadioButton();

  await expect(page.locator(radioButtonPage.headerLocator)).toHaveText(
    "Radio Button Demo"
  );
});