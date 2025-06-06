import crypto from "crypto";

export class Carrito {
  items = [];
  totalCheckout = 0;

  getTotalItems() {
    return this.items.length;
  }

  getTotalCheckout(item) {
    // return 10;
    // return this.items * 10
    // return this.items === 1 ? 10 : 20;
    return this.totalCheckout;
  }

  addItem(item) {
    this.checkItem(item);

    this.items.push({
      ...item,
      id: crypto.randomUUID(),
    });

    this.totalCheckout += item.price;
  }

  checkItem(item) {
    if (typeof item !== "object") throw new Error("Item must be an object");
    if (!item.price || !item.name) {
      throw new Error("Item must have price and name");
    }
  }

  removeItem(item) {
    const findItem = this.items.find((i) => i.name === item.name);
    this.items = this.items.filter((i) => i.id !== findItem.id);
    return this.items;
  }
}
