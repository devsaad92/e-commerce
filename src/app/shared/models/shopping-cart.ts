import { Product } from './product';
import { ShoppingCartItem } from './shopping-cart-item';

/* export class ShoppingCart {
  items: ShoppingCartItem[] = [];

  constructor(private itemsMap: { [productId: string]: ShoppingCartItem }) {
    this.itemsMap = itemsMap || {};

    for (let productId in itemsMap) {
      let item = itemsMap[productId];
      this.items.push(new ShoppingCartItem({ ...item, $key: productId }));
    }
  }

  getQuantity(product: Product) {
    let item = this.itemsMap[product.$key];
    return item ? item.quantity : 0;
  }

  get totalPrice() {
    let sum = 0;
    for (let productId in this.items)
      sum += this.items[productId].totalPrice;
    return sum;
  }

  get totalItemsCount() {
    let count = 0;
    for (let productId in this.itemsMap)
      count += this.itemsMap[productId].quantity;
    return count;
  }
} */


export class ShoppingCart {
  items: ShoppingCartItem[] = [];

  constructor(private itemsMap: { [productId: string]: ShoppingCartItem}) {
    this.itemsMap = itemsMap || {};

    for (const productId in itemsMap) {
      if (itemsMap.hasOwnProperty(productId)) {
      const item = itemsMap[productId];
      this.items.push(new ShoppingCartItem({ ...item, $key: productId }));
      }
    }
  }

  getQuantity(product: Product) {
    const item = this.itemsMap[product.$key];
    return item ? item.quantity : 0;
  }

  get totalPrice() {
    let sum = 0;
    for (const productId in this.items) {
      if (this.items.hasOwnProperty(productId)) {
      sum += this.items[productId].totalPrice;
      }
    }
    return sum;

  }

  /* get productsIds() {
    return Object.keys(this.items);
  }
 */
  get totalItemsCount() {
    let count = 0;
    for (const productId in this.itemsMap) {
      if (this.itemsMap.hasOwnProperty(productId)) {
      count += this.itemsMap[productId].quantity;
      }
    }
    return count;
  }
}
