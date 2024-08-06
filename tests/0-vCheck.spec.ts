import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import { json } from 'stream/consumers';

const jsonData = require('D:/a/voiceCheck/voiceCheck/datetime.json');



test('Send a voice message', async ({ page }) => {

  await page.goto('https://target110.brightarrow.com/r/');
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('ryantest6');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('RogerOf26');
  await page.getByLabel('Password').press('Enter');
  await expect(page.getByText('Welcome, Ryantest6')).toBeVisible();
  await page.frameLocator('iframe[title="Help Scout Beacon - Messages and Notifications"]').getByRole('button', { name: 'Close' }).click();

  await page.locator('div').filter({ hasText: /^My Lists$/ }).click();
  await page.getByRole('button', { name: 'ryantest6' }).click();
  await page.getByRole('link', { name: 'send vm' }).click();
  await expect(page.getByText('List Details')).toBeVisible();
  await page.locator('div').filter({ hasText: 'Send Message' }).nth(3).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await expect(page.getByText('Welcome, Ryantest6')).toBeVisible();
  await expect(page.getByText('send vm -- 1 contacts')).toBeHidden({timeout: 120000});

});