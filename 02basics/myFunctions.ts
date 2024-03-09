function addTwo(num: number): number {
  return num + 2;
  //   return "hello";
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

let myValue = addTwo(5);
getUpper("bablu");
signUpUser("bable", "mail@gmail.com", false);
loginUser("bablu", "mail.com");

// function getValue(myVal: number): boolean{
//     if(myVal > 5)
//     {
//         return true;
//     }

//     return "200 ok"
// }

const getHello = (str: string): string => {
  return "";
};

// const heros = ["thor", "spiderman", "ironman"];
const heros = [1, 2, 3];

heros.map((hero): string => {
  return `hero is ${hero}`;
});

function consoleError(errMessage: string): void {
  console.log(errMessage);
}

function handleError(errMessage: string): never {
  throw new Error(errMessage);
}

export {};
