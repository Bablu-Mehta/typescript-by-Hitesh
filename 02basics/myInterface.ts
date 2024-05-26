interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  // startTrial:() => string,
  startTrial(): string;
  getCoupon(couponName: string, value: number): number;
}

interface User {
  gitHubToken: string;
}

interface Admin extends User {
    role: "admin" | "TA" | "learner"
}

const bablu: Admin = {
  dbId: 22,
  role: "admin",
  email: "bablu@gmail.com",
  userId: 2,
  startTrial: () => {
    return "Start trial";
  },
  getCoupon: (name: "bablu10", off: 4) => {
    return 4;
  },
  gitHubToken: "qwe",
};
// bablu.dbId = 33
