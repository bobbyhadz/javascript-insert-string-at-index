// EXAMPLE 1 - Insert String at specific Index of another String in JavaScript

function insertAtIndex(str, substring, index) {
  return str.slice(0, index) + substring + str.slice(index);
}

const str = 'he world';
const substring = 'llo';
const index = 2;

// 👇️ hello world
console.log(insertAtIndex(str, substring, index));

// ------------------------------------------------------------------

// // EXAMPLE 2 - Insert String at specific Index of another String using `splice`

// function insertAtIndex(str, substring, index) {
//   const arr = str.split('');

//   arr.splice(index, 0, substring);

//   return arr.join('');
// }

// const str = 'he world';
// const substring = 'llo';
// const index = 2;

// // 👇️ hello world
// console.log(insertAtIndex(str, substring, index));

// ------------------------------------------------------------------

// // EXAMPLE 3 - Insert String at specific Index of another String using substring

// function insertAtIndex(str, substring, index) {
//   return (
//     str.substring(0, index) + substring + str.substring(index)
//   );
// }

// const str = 'he world';
// const substring = 'llo';
// const index = 2;

// // 👇️ hello world
// console.log(insertAtIndex(str, substring, index));
