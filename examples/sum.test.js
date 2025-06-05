// Cada archivo es una suite de test.
// Y puede contener uno o varios test.

// const sum = require('./sum');
// import  sum  from './sum';
import { sum } from "./sum";
describe("Función sum", () => {
  describe("Suma de valores positivos", () => {
    test("sumar 1 + 2 es igual a 3", () => {
      expect(sum(1, 2)).toBe(3);
    });
  });

  // Si un test falla, toda la suite de test falla
  // test('sumar 1 + 2 es igual a 3', () => {
  //   expect(sum(1, 2)).toBe(2);
  // });

  describe("Suma con 0", () => {
    // 0 + 0 -> 0
    test("Sumar 0 + 0 es igual a 0", () => {
      expect.assertions(3);
      expect(sum(0, 0)).toBe(0);
      expect(sum(0, 0)).toEqual(0);
      expect(sum(0, 0)).not.toEqual(1);

      // Los test no pueden estar anidados
      // test('Sumar 0 + 1 es igual a 1', () => {
      //   expect(sum(0, 1)).toBe(1);
      // });
    });

    // 0 + 1 -> 1
    test("Sumar 0 + 1 es igual a 1", () => {
      expect(sum(0, 1)).toBe(1);
    });
  });

  describe("Suma de valores negativos", () => {
    // 1 + -3 -> -2
    test("Sumar 1 + -3 es igual a -2", () => {
      expect(sum(1, -3)).toBe(-2);
    });

    test("Sumar -1 + -3 es igual a -4", () => {
      expect(sum(-1, -3)).toBe(-4);
    });

    // Valorar 3 combinaciones de numeros. Asegurar que el valor es NEGATIVO -1 -1 > NEGATIVO. -1 -4 NEGATIVO. ETC.
    test("Sumar dos valores negativos es igual a un valor negativo", () => {
      expect(sum(-1, -1)).not.toBeGreaterThan(0);
      expect(sum(-1, -4)).toBeLessThan(0);
      expect(sum(-2, -6)).toBeLessThan(0);
      expect(sum(-2, -6)).toBeNegative();
    });

    test("Sumar dos valores negativos cualesquiera es igual a un valor negativo", () => {
      // Podemos testear valores calculados sin problema
      for (let i = 0; i++; i < 3) {
        const a = Math.random() * -1;
        const b = Math.random() * -1;
        expect(sum(a, b)).toBeLessThanOrEqual(0);
      }
    });
  });

  describe("Suma con valores decimales", () => {
    test("Sumar 0.1 + 0.2 es 0.3", () => {
      // Para trabajar con decimales en JS
      expect(sum(0.1, 0.2)).toBeCloseTo(0.3, 5);
    });
  });

  describe("Suma con valores no numéricos", () => {
    it('Sumar 1 y "a" debe devolver un error', () => {
      expect(() => sum(1, "a")).toThrow("Must be a number");
    });

    it('Sumar "a" y 1 debe devolver un error', () => {
      expect(() => sum("a", 1)).toThrow("Must be a number");
    });
  });
});
