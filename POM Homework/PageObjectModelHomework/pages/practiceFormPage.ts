import { Page } from "@playwright/test";

export class PracticeFormPage {
    readonly page: Page;
    readonly practiceFormHeaderLocator: string = "//div[@class='main-header']";
    readonly firstNameLocator: string = "#firstName";
    readonly lastNameLocator: string = "#lastName";
    readonly emailLocator: string = "#userEmail";
    readonly femaleGenderLocator: string = "//label[text()='Female']";
    readonly mobileNumberLocator: string = "#userNumber";
    readonly dateOfBirthLocator: string = "#dateOfBirthInput";
    readonly monthLocator: string = ".react-datepicker__month-select";
    readonly yearLocator: string = ".react-datepicker__year-select";
    readonly subjectsLocator: string = "#subjectsInput";
    readonly sportsHobbyLocator: string = "//label[text()='Sports']";
    readonly readingHobbyLocator: string = "//label[text()='Reading']";
    readonly currentAddressLocator: string = "#currentAddress";
    readonly stateInputLocator: string = "#react-select-3-input";
    readonly cityInputLocator: string = "#react-select-4-input";
    readonly submitButtonLocator: string = "#submit";
    readonly popupTitleLocator: string = "#example-modal-sizes-title-lg";
    readonly studentNameValueLocator: string = "//td[text()='Student Name']/following-sibling::td";
    readonly studentEmailValueLocator: string = "//td[text()='Student Email']/following-sibling::td";
    readonly genderValueLocator: string = "//td[text()='Gender']/following-sibling::td";
    readonly mobileValueLocator: string = "//td[text()='Mobile']/following-sibling::td";
    readonly dateOfBirthValueLocator: string = "//td[text()='Date of Birth']/following-sibling::td";
    readonly subjectsValueLocator: string = "//td[text()='Subjects']/following-sibling::td";
    readonly hobbiesValueLocator: string = "//td[text()='Hobbies']/following-sibling::td";
    readonly addressValueLocator: string = "//td[text()='Address']/following-sibling::td";
    readonly stateAndCityValueLocator: string = "//td[text()='State and City']/following-sibling::td";

    constructor(page: Page) {
        this.page = page;
    }

    async fillStudentName(firstName: string, lastName: string) {
        await this.page.locator(this.firstNameLocator).fill(firstName);
        await this.page.locator(this.lastNameLocator).fill(lastName);
    }

    async fillEmail(email: string) {
        await this.page.locator(this.emailLocator).fill(email);
    }

    async selectGender() {
        await this.page.locator(this.femaleGenderLocator).click();
    }

    async fillMobileNumber(mobileNumber: string) {
        await this.page.locator(this.mobileNumberLocator).fill(mobileNumber);
    }

    async selectDateOfBirth() {
        await this.page.locator(this.dateOfBirthLocator).click();
        await this.page.locator(this.monthLocator).selectOption({ label: "March" });
        await this.page.locator(this.yearLocator).selectOption({ label: "1995" });
        await this.page.locator("//div[contains(@class,'react-datepicker__day') and not(contains(@class,'outside-month')) and text()='15']").click();
    }

    async fillSubjects() {
        await this.page.locator(this.subjectsLocator).fill("Maths");
        await this.page.keyboard.press("Enter");
    }

    async selectHobbies() {
        await this.page.locator(this.sportsHobbyLocator).click();
        await this.page.locator(this.readingHobbyLocator).click();
    }

    async fillCurrentAddress(address: string) {
        await this.page.locator(this.currentAddressLocator).fill(address);
    }

    async selectStateAndCity() {
        await this.page.locator(this.stateInputLocator).scrollIntoViewIfNeeded();
        await this.page.locator(this.stateInputLocator).fill("NCR");
        await this.page.keyboard.press("Enter");
        await this.page.locator(this.cityInputLocator).fill("Delhi");
        await this.page.keyboard.press("Enter");
    }

    async submitForm() {
        await this.page.locator(this.submitButtonLocator).scrollIntoViewIfNeeded();
        await this.page.locator(this.submitButtonLocator).click({ force: true });
    }
}
