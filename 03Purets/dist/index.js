"use strict";
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
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.city = "jaipur";
    }
}
const bablu = new User("b@m.com", "bablu");
bablu.city;
