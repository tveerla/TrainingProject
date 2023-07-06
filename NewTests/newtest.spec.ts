import{test,expect} from '@playwright/test';

test.describe('Home1', () => {
    test('open about page and verify title', async ({ page }) => {
        
        await page.goto("https://practice.automationbro.com/about/");
        await expect(page).toHaveTitle("About – Practice E-Commerce Site");
    })
    
    
})
