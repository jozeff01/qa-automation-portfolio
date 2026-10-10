import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';

test('Successful login using the Page Object Model', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/.*inventory.html/);
  
  const addToCartButton = page.locator('#add-to-cart-sauce-labs-backpack');
  await expect(addToCartButton).toBeVisible();
});