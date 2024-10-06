>**Note:** In JavaScript, variables can hold any type of value at any time. This means you don't have to specify the data type of a variable when you declare it.

# Datatypes
There are two types of datatypes -
* Primitive
* Non-Primitive

## Primitive Datatype
There are 7 types - 
* String
* Number (Decimal/Float values comes in this only)
* BigInt
* Boolean
* Null
* Undefined
* Symbol

```javascript
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456543576654356754n // n at last tells that it is a BigInt
```

## Non-Primitive (Reference) Datatype
* Objects
* Array
* Functions

```javascript
const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}
```
