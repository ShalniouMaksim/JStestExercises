export default function test() {
  console.log('test');
  const obj3 = { obj1: { object: 1, value: 2 } };
  const obj4 = { obj2: { object: 3, value: 4 } };
  const obj1 = JSON.stringify(obj3);
  const obj2 = JSON.stringify(obj4);
  const obj = `${obj1},${obj2}`;
  console.log(obj);
  console.log({...obj3, ...obj4 });
  const obj5 = Object.assign(obj3, obj4);
  console.log(obj5);
}
