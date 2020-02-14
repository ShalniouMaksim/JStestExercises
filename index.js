// import fs from 'fs';
import difference from './difference';
import chunk from './chunk';
import pairs from './pairs';
import equals from './equals';
import findindexof from './findindexof';
import bqs from './buildQueryString';
import findOdd from './findOdd';
// import ls from './ls';
// import betterls from './betterls';
// import promisify from './promisify';
import concat from './concat';
import normalizeData from './normalizeData';
import flatten from './flatten';
import solution from './solution';
import hash from './hash';

const a = [1, 2, 3, 4, 5];
const b = [10, 7, -1, 6];
console.log('DIFFERENCE:');
console.log(a);
console.log(b);
console.log(difference(a, b));
console.log('CHUNK:');
console.log(chunk(b, 1));
console.log('PAIRS:');
console.log(pairs(['cat', 11], ['dog', 6], ['cat', 5]));
console.log('EQUALS:');
console.log(
  equals({ cat: { monkey: 5 }, dog: 6 }, { cat: { monkey: 10 }, dog: 6 }),
);
console.log('FINDINDEXOF:');
console.log(findindexof(b, 2));
console.log('BQS:');
console.log(bqs({ per: 10, page: 1 }));
console.log('findOdd');
console.log(findOdd([1, 2, 4, 2, 4, 1, 5, 3, 3]));
console.log('ls');
// (async () => console.log(await ls('C:/Users/Maxim/Desktop/practic1/var')))();
console.log('betterls');
// (async () => console.log(await betterls('C:/Users/Maxim/Desktop/practic1/var')))();
// console.log(betterls('C:/Users/Maxim/Desktop/practic1/var'));
// console.log('PROMISIFY:');
// (async () => console.log(await promisify(fs.stat)('C:/Users/Maxim/Desktop/practic1/var')))();
// eslint-disable-next-line max-len
// promisify(promisify(fs.readdir, 'C:/Users/Maxim/Desktop/practic1/var', 'utf8').then(f => console.log(f)));
console.log('CONCAT:');
console.log(concat('a')('bc')('f'));
console.log('NORMALIZEDATA:');
console.log(
  normalizeData(
    [
      { value: 14, date: '02.08.2018' },
      { value: 43, date: '03.08.2018' },
      { value: 38, date: '05.08.2018' },
    ],
    '2018-08-01',
    '2018-08-06',
  ),
);
console.log('flatten:');
console.log(flatten([1, 2, [3, 5], [[4, 3], 2]]));
console.log('SOLUTION:');
console.log(solution('¯|___|¯¯¯¯¯|___|¯|_|¯'));
console.log('HASH');
const obj = {
  person: {
    name: 'joe',
    history: {
      hometown: 'bratislava',
      bio: {
        funFact: 'I like fishing.',
      },
    },
  },
};
// eslint-disable-next-line no-extend-native
Object.prototype.hashs = hash;
console.log(obj.hashs('person.history.bio')); // { funFact: 'I like fishing.' }
console.log('IQTEST:');
