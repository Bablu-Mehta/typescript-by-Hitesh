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

type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function createUser(user: User): User {
  return { name: "", email: "", isActive: true };
}

createUser({ name: "bablu", email: "email.com", isActive: false });

export {};
