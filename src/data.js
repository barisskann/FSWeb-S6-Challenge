// let index = [
//   { id: 1, disable: false },
//   { id: 2, disable: false },
//   { id: 3, disable: false },
//   { id: 4, disable: false },
//   { id: 5, disable: false },
//   { id: 6, disable: false },
//   { id: 7, disable: false },
//   { id: 8, disable: false },
//   { id: 9, disable: false },
// ];
let index = Array(10)
  .fill(0)
  .map((item, sayac) => ({ id: sayac + 1, disable: false }));
export default index;
