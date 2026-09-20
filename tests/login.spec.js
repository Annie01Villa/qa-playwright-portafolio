// login.spec.js
// Test automatizado con Playwright para el flujo de login y carrito en saucedemo.com

const { test, expect } = require('@playwright/test');

test('Login exitoso, agregar producto al carrito y verificar cantidad', async ({ page }) => {

  // 1. Navegar a la página de login de SauceDemo
  await page.goto('https://www.saucedemo.com/');

  // 2. Completar el campo de usuario con "standard_user"
  await page.fill('#user-name', 'standard_user');

  // 3. Completar el campo de contraseña con "secret_sauce"
  await page.fill('#password', 'secret_sauce');

  // 4. Hacer clic en el botón de login para iniciar sesión
  await page.click('#login-button');

  // 5. Verificar que la URL actual corresponde a la página de productos (inventory)
  await expect(page).toHaveURL(/.*inventory.html/);

  // 6. Verificar que el título "Products" sea visible, confirmando que estamos en la página correcta
  await expect(page.locator('.title')).toHaveText('Products');

  // Pausa breve para que se alcance a ver la página de productos en el video
  await page.waitForTimeout(1500);

  // 7. Agregar la mochila (Sauce Labs Backpack) al carrito usando su botón específico
  //    El id de este botón es fijo para ese producto en SauceDemo
  await page.click('#add-to-cart-sauce-labs-backpack');

  // 8. Verificar que el ícono del carrito muestra el número "1",
  //    confirmando que el producto fue agregado correctamente
  const cartBadge = page.locator('.shopping_cart_badge');
  await expect(cartBadge).toHaveText('1');

  // Pausa final para que se vea el resultado (carrito con 1 item) antes de cerrar
  await page.waitForTimeout(2000);

});
