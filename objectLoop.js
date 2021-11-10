//Write a JavaScript program to loop through object: const objectName = { name: 'test', age: 21, country: 'Earth' }; . // expected output: // "name: test" // "age: 21" // "country: Earth"

//Solution
for (const key in objectName) {
  console.log(`${key}: ${objectName[key]}`);
}

//Another method
const objectName = { name: 'test', age: 21, country: 'Earth' };
const keys = Object.keys(objectName)
keys.forEach((key, index) => { 
  console.log(`${key}: ${objectName[key]}`);   

});
