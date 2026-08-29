### Pagina de Informacion del proyecto
En adelante escribiremos informacion relevante a este proyecto de pipeline.


## Instrucciones para crear un nuevo branch en este repositorio

```bash
git switch main
git pull
git switch -c feature/update-readme

# Usando git checkout
git checkout -b feature/12345_update_readme
git push -u origin feature/12345_update_readme

```

## Pruebas automatizadas (Laboratorio 3)

Este repositorio incluye un pequeño proyecto de ejemplo en `src/` con pruebas unitarias en `tests/`,
usadas para validar la etapa de pruebas del pipeline de CI.

Ejecutar localmente:

```bash
npm install
npm run build   # compila src/index.js a dist/bundle.js con esbuild
npm test        # ejecuta las pruebas con Jest y genera cobertura
```

El pipeline (`.github/workflows/pipeline.yml`) ejecuta estos mismos pasos en cada `push` a una
rama `feature/**`, en cada `push` a `main` y en cada Pull Request hacia `main`:

1. Instala dependencias (`npm ci`).
2. Compila la aplicación (`npm run build`).
3. Ejecuta las pruebas unitarias con cobertura (`npm test`).
4. Publica como artefactos descargables el reporte de pruebas (JUnit, `reports/junit.xml`) y el
   reporte de cobertura (`coverage/`), incluso si las pruebas fallan.

Si la etapa de pruebas falla, el pipeline se detiene y no llega a los pasos finales, actuando como
un Quality Gate básico.