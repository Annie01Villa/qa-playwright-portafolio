markdown
# QA Automation Portfolio - Playwright + Claude AI

Portafolio de automatización E2E + API Testing usando **Playwright + Vibe Coding con Claude AI**

![Playwright Tests](https://github.com/Annie01Villa/qa-playwright-portafolio/actions/workflows/playwright.yml/badge.svg)

## 🚀 Construido con Vibe Coding
Este proyecto fue desarrollado utilizando **Claude AI** como pair programmer para:
- Generación de Page Objects y test cases
- Optimización de selectores y validaciones
- Debugging y creación de reportes

## ✅ Resultados
**8 tests automatizados - 8/8 passing**
- 6 UI E2E: SauceDemo (login, inventario, carrito, checkout)
- 2 API: FakeStore (validación de status, contratos JSON)

## 🛠️ Stack
- **Core:** Playwright, JavaScript, Vibe Coding con Claude AI
- **Testing:** API Testing REST, JSON Schema Validation
- **DevOps:** Git, GitHub Actions CI/CD, HTML Report, Video Evidence

## 📸 Evidencia
- Videos de cada test en `/test-results`
- Reporte HTML interactivo
- Ejecución automática en GitHub Actions en cada push

## ▶️ Cómo correrlo
```bash
npm ci
npx playwright install
npx playwright test
npx playwright show-report
