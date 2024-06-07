const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

function identityThree<Type>(val: Type): Type {
  return val;
}

// identityThree("bablu")

function identityFour<T>(val: T): T {
  return val;
}

interface Bottle {
  brand: string;
  isPlastic: boolean;
}

// identityFour<Bottle>({
//   brand: "bislery",
//   isPlastic: true,
// });

function getSearchProducts<T>(products: T[]): T {
  //do some databases operations
  const myIndex = 3;
  return products[myIndex];
}

const getMoreSearchProducts = <T>(product: T[]): T => {
  //do some database operation
  const myIndex = 4;
  return product[myIndex];
};

interface Database {
  connection: string;
  username: string;
  password: string;
}

function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}

anotherFunction(3, {
  connection: "true",
  username: "Bablu",
  password: "anything",
});

interface Quiz {
  name: string;
  type: string;
}

interface course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];

  addToCart(product: T) {
    this.cart.push(product);
  }
}
