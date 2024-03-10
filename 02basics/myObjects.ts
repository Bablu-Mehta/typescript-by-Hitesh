const user = {
  name: "bablu",
  email: "bablue@dev.com",
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}

let newUser = { name: "bablu", isPaid: false, email: "b@l.com" };

createUser(newUser);

function createCourse(): { name: string; price: number } {
  return { name: "reactJS", price: 399 };
}

export {};
