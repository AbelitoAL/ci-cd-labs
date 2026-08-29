const { sum, subtract, multiply, divide, isEven } = require("../src/math");

describe("math utils", () => {
  test("sum suma dos numeros correctamente", () => {
    expect(sum(2, 3)).toBe(5);
    expect(sum(-1, 1)).toBe(0);
  });

  test("subtract resta dos numeros correctamente", () => {
    expect(subtract(5, 2)).toBe(3);
    expect(subtract(2, 5)).toBe(-3);
  });

  test("multiply multiplica dos numeros correctamente", () => {
    expect(multiply(4, 3)).toBe(12);
    expect(multiply(-2, 3)).toBe(-6);
  });

  test("divide divide dos numeros correctamente", () => {
    expect(divide(10, 2)).toBe(5);
  });

  test("divide lanza un error al dividir entre cero", () => {
    expect(() => divide(10, 0)).toThrow("No se puede dividir entre cero");
  });

  test("isEven detecta numeros pares e impares", () => {
    expect(isEven(4)).toBe(true);
    expect(isEven(7)).toBe(false);
  });
});
