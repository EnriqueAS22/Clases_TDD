import { Carrito } from "./Carrito";

describe("Testing de la clase Carrito", () => {
  const sushiItem = {
    price: 10,
    name: "sushiItem",
  };

  const waterItem = {
    price: 1.5,
    name: "waterItem",
  };

  let carrito;
  beforeEach(() => {
    carrito = new Carrito();
  });
  describe("Testing de getTotalItems", () => {
    it("Carrito debe tener una función llamada getTotalItems que devuelva 0 a la inicialización del carrito", () => {
      // const carrito = new Carrito();
      expect(carrito.getTotalItems()).toEqual(0);
    });

    it("Carrito.getTotalItems debe devolver 1 después de añadir un elemento al carrito", () => {
      // const carrito = new Carrito();
      // carrito.addItem({ price: 1, name: "sushiItem" });
      carrito.addItem(sushiItem);
      expect(carrito.getTotalItems()).toEqual(1);
    });

    it("Carrito.getTotalItems debe devolver 2 después de añadir un elemento al carrito dos veces", () => {
      // carrito.addItem({ price: 1, name: "sushiItem" });
      // carrito.addItem({ price: 1, name: "sushiItem" });
      carrito.addItem(sushiItem);
      carrito.addItem(sushiItem);
      expect(carrito.getTotalItems()).toEqual(2);
    });

    describe("Gestión de errores", () => {
      it("Carrito.addItem debe devolver un error si se añade un item sin precio", () => {
        expect(() => carrito.addItem({ name: "sushi" })).toThrow();
      });
      it("Carrito.addItem debe devolver un error si se añade un item sin nombre", () => {
        expect(() => carrito.addItem({ price: 1 })).toThrow();
      });
      it("Carrito.addItem debe devolver un error diciendo 'Item must have price and name' si el item no tiene nombre o precio", () => {
        expect(() => carrito.addItem({ price: 1 })).toThrow(
          "Item must have price and name"
        );
        expect(() => carrito.addItem({ name: "sushi" })).toThrow(
          "Item must have price and name"
        );
      });
      it("Carrito.addItem debe devolver un error diciendo 'Item must be an object' si el item no es un objeto", () => {
        expect(() => carrito.addItem("sushiItem")).toThrow(
          "Item must be an object"
        );
      });
    });
  });

  describe("Testeando getTotalCheckout", () => {
    it("Carrito.getTotalCheckout debe devolver 10 después de añadir 1 sushiItem", () => {
      carrito.addItem(sushiItem);
      expect(carrito.getTotalCheckout()).toEqual(10);
    });
    it("Carrito.getTotalCheckout debe devolver 20 después de añadir 2 sushiItem", () => {
      carrito.addItem(sushiItem);
      carrito.addItem(sushiItem);
      expect(carrito.getTotalCheckout()).toEqual(20);
    });
    it("Carrito.getTotalCheckout debe devolver 11.5 después de añadir 1 sushiItem y 1 waterItem", () => {
      carrito.addItem(sushiItem);
      carrito.addItem(waterItem);
      expect(carrito.getTotalCheckout()).toEqual(11.5);
    });
    it("Carrito.getTotalCheckout debe devolver 0 si el carrito esta vacío", () => {
      expect(carrito.getTotalCheckout()).toEqual(0);
    });
  });
});
