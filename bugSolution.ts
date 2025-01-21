function greeter(person: string): string {
  return "Hello, " + person;
}

let user: string = "Jane Doe"; // Explicit typing
console.log(greeter(user));

let userArray = ["Jane Doe", 25];
console.log(greeter(userArray[0])); // Accessing the string element