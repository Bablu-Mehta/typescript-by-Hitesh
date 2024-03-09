let greetings: string = "Hello world";
greetings.toLowerCase();
console.log(greetings);

//number

let userId: number = 2345; //2345.2 its still consider as number in JS theres no concept of integer and float in JS theres just number type.

//boolean

let isLoggedIn: boolean = false;


//type inference: 
//so this means that you don't have to over use the typescript. it's considered as bad practice let's say for an example
//that you are declaring a variable userId and you are giving its type number and also with declaring you also assigning its 
//value a number but you really don't have to do this typescript is smart in that way when declaring and assigning at the same
//time it already gives the variable a type in the background, so don't have to give the type to variable when you are already 
// assigning it a value typescript will understand and will not throw you an error.

export {};
