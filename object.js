const sym = Symbol("key1")

const Jsuser ={
  name: "John",
  age: 30,
  [sym]: "key1", 
  occupation: "Software Engineer",
  hobbies: ["reading", "hiking", "coding"],
  email:"asd@gmail.com"
}

console.log(Jsuser)