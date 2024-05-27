// class User {
//   public email: string;
//   private name: string;
//   readonly city: string = "jaipur";

//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }

class User {
  readonly city: string = "jaipur";

  constructor(
    public email: string,
    public name: string
  ) // private userId: string
  {}
}

const bablu = new User("b@m.com", "bablu");
bablu.city;
