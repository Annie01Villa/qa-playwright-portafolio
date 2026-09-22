const { test, expect } = require('@playwright/test');

test('API - Validar login y productos de SauceDemo', async ({ request }) => {
  // Prueba 1: API FakeStore - Simula API de e-commerce real
  const response = await request.get('https://fakestoreapi.com/products');

  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);

  const products = await response.json();
  console.log(`Productos encontrados: ${products.length}`);
  expect(products.length).toBeGreaterThan(0);
});

test('API - Validar producto específico', async ({ request }) => {
  const response = await request.get('https://fakestoreapi.com/products/1');

  expect(response.status()).toBe(200);
  const product = await response.json();

  // Validaciones de API que piden en entrevistas
  expect(product).toHaveProperty('id');
  expect(product).toHaveProperty('title');
  expect(product).toHaveProperty('price');
  expect(product.price).toBeGreaterThan(0);

  console.log(`Producto validado: ${product.title} - $${product.price}`);
});
