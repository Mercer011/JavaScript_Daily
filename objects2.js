const tinderuser = {

  email : "abc@gmail.com",
  password : "123456",
  name : "John",
  age : 25,
  gender : "male",

}

// console.log(tinderuser);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}
console.log(Object.keys(tinderuser))

console.log(Object.values(tinderuser))

console.log(Object.entries(tinderuser))