import { expect, test } from "@playwright/test";
import { BaseHooks } from "../utils/BaseHooks";
import { DemoqaHomePage } from "../pages/demoqaHomePage";
import { ElementsPage } from "../pages/elementsPage";
import { TextBoxPage } from "../pages/textBoxPage";
import { FormsPage } from "../pages/formsPage";
import { PracticeFormPage } from "../pages/practiceFormPage";


test.describe("DemoQA POM tests", () => {
    BaseHooks.registerHooks(test);

    test("Validate Elements page and Text Box labels", async ({ page }) => {
        const demoqaHomePage = new DemoqaHomePage(page);
        const elementsPage = new ElementsPage(page);
        const textBoxPage = new TextBoxPage(page);

        await demoqaHomePage.clickElementsButton();
        await expect(page).toHaveTitle("DEMOQA");
        await expect(page.locator(elementsPage.pageTitleLocator)).toHaveText("Elements");

        await elementsPage.clickTextBoxButton();
        await expect(page.locator(textBoxPage.fullNameLabelLocator)).toHaveText("Full Name");
        await expect(page.locator(textBoxPage.emailLabelLocator)).toHaveText("Email");
        await expect(page.locator(textBoxPage.currentAddressLabelLocator)).toHaveText("Current Address");
        await expect(page.locator(textBoxPage.permanentAddressLabelLocator)).toHaveText("Permanent Address");
    });

    test("Validate Practice Form page header", async ({ page }) => {
        const demoqaHomePage = new DemoqaHomePage(page);
        const formsPage = new FormsPage(page);
        const practiceFormPage = new PracticeFormPage(page);

        await demoqaHomePage.clickFormsButton();
        await formsPage.clickPracticeFormButton();
        await expect(page.locator(practiceFormPage.practiceFormHeaderLocator)).toHaveText("Practice Form");
    });
});
