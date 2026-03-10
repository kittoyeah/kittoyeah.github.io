import { expect, test } from "@playwright/test";

test("renders the key sections and primary CTA", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { name: /Chris Kittichod/i }),
  ).toBeVisible();
  await expect(page.locator("#summary")).toBeVisible();
  await expect(page.locator("#work")).toBeVisible();
  await expect(page.locator("#skills")).toBeVisible();
  await expect(page.locator("#evidence")).toBeVisible();
  await expect(page.locator("#contact")).toBeVisible();

  await expect(
    page.getByRole("link", { name: /Contact me/i }).first(),
  ).toHaveAttribute("href", /linkedin/i);
});

test("expands a case study inline without using a modal", async ({ page }) => {
  await page.goto("/");

  const details = page.locator("details").first();
  await expect(details).toHaveJSProperty("open", false);

  await page.locator("summary.case-study__toggle").first().click();
  await expect(details).toHaveJSProperty("open", true);
});
