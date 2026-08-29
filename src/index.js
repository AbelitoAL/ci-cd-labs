/**
 * Punto de entrada de la aplicacion de ejemplo.
 * Sirve como target real para el paso de "compilacion" (build) del pipeline.
 */
const { sum, subtract, multiply, divide, isEven } = require("./math");

function main() {
  console.log("=== ci-cd-labs: aplicacion de ejemplo ===");
  console.log("sum(2, 3) =", sum(2, 3));
  console.log("subtract(5, 2) =", subtract(5, 2));
  console.log("multiply(4, 3) =", multiply(4, 3));
  console.log("divide(10, 2) =", divide(10, 2));
  console.log("isEven(4) =", isEven(4));
}

if (require.main === module) {
  main();
}

module.exports = { main };
