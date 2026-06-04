import { expect, test } from "@playwright/test";
import { BaseHooks } from "../utils/BaseHooks";
import { DemoqaHomePage } from "../pages/demoqaHomePage";
import { FormsPage } from "../pages/formsPage";
import { PracticeFormPage } from "../pages/practiceFormPage";


test.describe("Practice Form POM tests", () => {
    BaseHooks.registerHooks(test);

    test("Submit practice form and validate popup values", async ({ page }) => {
        const demoqaHomePage = new DemoqaHomePage(page);
        const formsPage = new FormsPage(page);
        const practiceFormPage = new PracticeFormPage(page);

        await demoqaHomePage.clickFormsButton();
        await formsPage.clickPracticeFormButton();
        await practiceFormPage.fillStudentName("Ana", "Student");
        await practiceFormPage.fillEmail("ana.student@example.com");
        await practiceFormPage.selectGender();
        await practiceFormPage.fillMobileNumber("0712345678");
        await practiceFormPage.selectDateOfBirth();
        await practiceFormPage.fillSubjects();
        await practiceFormPage.selectHobbies();
        await practiceFormPage.fillCurrentAddress("Skopje Test Address 1");
        await practiceFormPage.selectStateAndCity();
        await practiceFormPage.submitForm();

        await expect(page.locator(practiceFormPage.popupTitleLocator)).toHaveText("Thanks for submitting the form");
        await expect(page.locator(practiceFormPage.studentNameValueLocator)).toHaveText("Ana Student");
        await expect(page.locator(practiceFormPage.studentEmailValueLocator)).toHaveText("ana.student@example.com");
        await expect(page.locator(practiceFormPage.genderValueLocator)).toHaveText("Female");
        await expect(page.locator(practiceFormPage.mobileValueLocator)).toHaveText("0712345678");
        await expect(page.locator(practiceFormPage.dateOfBirthValueLocator)).toHaveText("15 March,1995");
        await expect(page.locator(practiceFormPage.subjectsValueLocator)).toHaveText("Maths");
        await expect(page.locator(practiceFormPage.hobbiesValueLocator)).toContainText("Sports");
        await expect(page.locator(practiceFormPage.hobbiesValueLocator)).toContainText("Reading");
        await expect(page.locator(practiceFormPage.addressValueLocator)).toHaveText("Skopje Test Address 1");
        await expect(page.locator(practiceFormPage.stateAndCityValueLocator)).toHaveText("NCR Delhi");
    });
});
