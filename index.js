function myEach(collection, callback) {
  let Array1 = collection
  const result = Array.isArray(collection)
  if (result !== true) {
    Array1 = Object.values(collection)

  }
  for (let i = 0; i < Array1.length; i++) {
    callback(Array1[i])
  }
  return collection
}

function myMap(collection, callback) {
  let Array1 = collection
  const result = Array.isArray(collection)
  // Array.isarray check para array
  if (result !== true) {
    Array1 = Object.values(collection)
  }
  let newArr = []
  for (let i = 0; i < Array1.length; i++) {
    // push learn
    newArr.push(callback(Array1[i]))
  }
  return newArr
}

function myReduce(collection, callback, acc) {

  let Array1 = collection
  const result = Array.isArray(collection)
  if (result !== true) {
    Array1 = Object.values(collection)
  }
  if (acc === undefined) {
    acc = Array1[0]
    //  slice learn
    // * updating the array * creating a copy
    Array1 = Array1.slice(1)
  }

  for (let i = 0; i < Array1.length; i++) {
    acc = callback(acc, Array1[i], collection)
  }

  return acc

}

// function myFind(collection, predicate) {
//   let Array1 = collection
//   const result = Array1.isArray(collection)
//   if (result !== true) {
//     Array1 = Object.values(collection)
//   }
//   if (predicate === true) {
//     predicate = Array1
//   }
//   else {
//     predicate = "undefined"
//   }
//   for (let i = 0; i < Array1.length; i++) {

//   }
//   return predicate
// }

function myFind(collection, predicate) {

  let Array1 = collection
  // checking if collection is array
  const result = Array.isArray(collection)
  // if collection is not true (not an array)
  if (result !== true) {
    // return it into an array
    Array1 = Object.values(collection)
  }
  //  console.log(predicate)
  for (let i = 0; i < Array1.length; i++) {
    // console.log(Array1[i])
    if (predicate(Array1[i]) === true) {
      // i ncrement through each value
      return Array1[i]
    }

  }
  return undefined
}

function myFilter(collection, predicate) {
  const empty = []
  let Array1 = collection
  const result = Array.isArray(collection)
  if (result !== true) {
    Array1 = Object.values(collection)
  }
  for (let i = 0; i < Array1.length; i++) {
  if (predicate(Array1[i])) {
    empty.push(Array1[i])
    }
 }

  return empty
}

function mySize(collection){

  let Array1 = collection
  const result = Array.isArray(collection)
  if (result !== true) {
    Array1 = Object.values(collection)
}
return Array1.length



}

function myFirst(array,n = 0){
 if (n > 0){
  return array.slice(0,n)
 }
 
  return array[0]
}
// deafult allows us to pass optional value
function myLast(array, n = false){
  let length = array.length 
  // length count of elements 
console.log(array, n)
  // if n has a value other than null skip line134
if(n){
  // it does have value of null run slice
  return array.slice(length - n)
}

return array[length -1]
// return single element
}

function myKeys(object){
let keys = []
for (const key in object){
 keys.push(key)
}
return keys
}


function myValues(object){
let array =  []
for ( const key in object){
  // "key"became a value
  array.push(object[key])
}
return array
}

function mySortBy(array, callback){
  console.log(array, callback)
const updated = array.sort()
  return updated
}