// @ts-check
import { test, expect } from '@playwright/test';

const API_CAT_IMAGES = 'https://cataas.com';
const LOCALHOST_URL = 'http://localhost:5173/';

test('App shows random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  const image = page.getByRole('img');
  const text = page.getByRole('paragraph');

  const textContent = await text.textContent();
  const imageContent = await image.getAttribute('src');

  expect(textContent?.length).toBeGreaterThan(0);
  expect(imageContent?.startsWith(API_CAT_IMAGES)).toBeTruthy();
});