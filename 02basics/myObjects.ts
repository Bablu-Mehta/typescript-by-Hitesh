// const user = {
//   name: "bablu",
//   email: "bablue@dev.com",
//   isActive: true,
// };

// function createUser({ name: string, isPaid: boolean }) {}

// let newUser = { name: "bablu", isPaid: false, email: "b@l.com" };

// createUser(newUser);

// function createCourse(): { name: string; price: number } {
//   return { name: "reactJS", price: 399 };
// }

// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// };

// function createUser(user: User): User {
//   return { name: "", email: "", isActive: true };
// }

// createUser({ name: "bablu", email: "email.com", isActive: false });

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetail?: number;
};

let myUser: User = {
  _id: "123",
  name: "b",
  email: "b@b.com",
  isActive: false,
};

myUser.email = "bablu@gmail.com";
// myUser._id = "2344";

type cardNumber = {
  cardnumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

export {};
