# Type 'string | number' is not assignable to type 'string'
This TypeScript bug demonstrates a common type error: assigning an array containing both strings and numbers to a function expecting a string argument.

## Bug
The `greeter` function expects a string argument, but the `user` variable is an array containing both a string and a number.  TypeScript correctly identifies this as a type error.

## Solution
The solution involves ensuring the argument passed to `greeter` is a string.  This can be achieved by either explicitly typing the `user` variable as a string, or by accessing the string element within the array.