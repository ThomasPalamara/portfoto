// const array = [
//   { id: 'y', value: 2 },
//   { id: 'u', value: 3 },
// ];
const array = [
  { id: 'q', value: 1 },
  { id: 'w', value: 2 },
  { id: 'e', value: 3 },
  { id: 'r', value: 1 },
  { id: 't', value: 1 },
  { id: 'y', value: 2 },
  { id: 'u', value: 3 },
];

let arr = [...array];

const n = 4;

const test = () => {
  const result = [];

  do {
    const pickedIndex = Math.floor(Math.random() * (arr.length - 1));
    const picked = arr[pickedIndex];
    let total = picked.value;
    const currentRow = [picked.id];

    for (let i = 0; i < arr.length; i++) {
      console.log('i', i);
      console.log('pickedIndex :', pickedIndex);
      console.log('(i === arr.length - 1) :', i === arr.length - 1);
      const e = arr[i];
      if (i !== pickedIndex) {
        if (total + e.value <= n) {
          total += e.value;
          currentRow.push(e.id);
          if (total === n || i === arr.length - 1) {
            arr = arr.filter((x) => !currentRow.includes(x.id));
            result.push(currentRow);
            break;
          }
        }
      }
      if (i === arr.length - 1) {
        console.log('here');
        arr = arr.filter((x) => !currentRow.includes(x.id));
        result.push(currentRow);
        break;
      }
    }
    console.log('currentRow :', currentRow);
    console.log('arr :', arr);
  } while (result.flat().length < array.length);
  return result;
};

console.log('test() :', test());
