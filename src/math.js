/**
 * Utilidades matematicas de ejemplo para el Laboratorio 3.
 * Estas funciones existen unicamente para tener algo real que compilar
 * y probar dentro del pipeline de CI.
 */

function sum(a, b) {
  // BUG deliberado (Laboratorio 3 - Parte 4): resta en vez de sumar.
  return a - b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("No se puede dividir entre cero");
  }
  return a / b;
}

function isEven(n) {
  return n % 2 === 0;
}

module.exports = { sum, subtract, multiply, divide, isEven };
