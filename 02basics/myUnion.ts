let score: number | string = 33;

score = 32;

score = "23";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let bablu: User | Admin = { name: "bablu", id: 234 };

bablu = { username: "admin", id: 123 };

// function getDbId(id: number | string) {
//     //some api call is happening
//     console.log(`the DB id is ${id}`);
//   }

getDbId(3);

getDbId("4");

function getDbId(id: number | string) {
  //   id.toLowerCase();

  if (typeof id === "string") {
    id.toLowerCase();
  }

  if (typeof id === "number") {
    id + 2;
  }
}

//array

const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];
const data3: (number | string)[] = [1, 2, 3, "hello"];

let pi: 3.14 = 3.14;

// pi = 34;

let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle";

// seatAllotment = "something else";
