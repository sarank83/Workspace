import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('yahoo login button click', async ({ page }) => {
  // Navigate to Yahoo homepage
  await page.goto('https://www.yahoo.com');

  // Click the Sign in button/link
  await page.getByRole('link', { name: 'Sign in' }).click();

  // Verify we've navigated to the login page
  await expect(page).toHaveURL(/login\.yahoo\.com/);

  // Verify the login page has the expected title
  await expect(page).toHaveTitle(/Login - Sign in to Yahoo/);
});
