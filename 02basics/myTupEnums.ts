// const user: (string | number)[] = [1, "BM"];

let user: [string, number, boolean];

user = ["bm", 1, true];

let rgb: [number, number, number] = [255, 255, 255];

type User = [number, string];

const newUser: User = [112, "bablu@gmail.com"];

newUser[1] = "b@b.com";

newUser.push(true);

export {};
