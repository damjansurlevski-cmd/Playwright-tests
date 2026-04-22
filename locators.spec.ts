import {test} from "@playwright/test";
import {setTimeout} from "timers/promises";

test("GetByRole locator", async ({ page }) => {
  await setTimeout(4000);
  await page.goto("https://testing.qaautomationlabs.com/form.php");
  await setTimeout(2000);
  await page.getByText("CheckBox").click();
  await setTimeout(2000);
  await page.getByRole("checkbox", { name: "Check me!" }).click();
  await setTimeout(2000);
});
