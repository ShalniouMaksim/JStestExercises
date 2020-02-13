import fs from 'fs';

function betterReadDir(str) {
  const myFirstPromise = new Promise((resolve, reject) => {
    fs.readdir(str, 'utf8', (error, directoryContent) => {
      if (error) reject(error);
      resolve(directoryContent);
    });
  });
  return myFirstPromise;
}

function betterStat(myPath) {
  const SecondPromise = new Promise((resolveStat, rejected) => {
    fs.stat(myPath, (err, stats) => {
      if (err) rejected(err);
      resolveStat(stats);
    });
  });
  return SecondPromise;
}

export default async function betterls(s) {
  const files = await betterReadDir(s);
  const statsPromises = files.map(value => betterStat(`${s}//${value}`));
  const stats = await Promise.all(statsPromises);
  return files.map((value, index) => ({ pathname: `${s}/${value}`, mode: stats[index].mode }));
}
