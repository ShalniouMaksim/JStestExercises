import fs from 'fs';

export default function ls(str) {
  const myFirstPromise = new Promise((resolve, reject) => {
    try {
      let files = [];
      fs.readdir(str, 'utf8', (error, directoryContent) => {
        files = directoryContent;
        resolve(
          Promise.all(
            files.map(
              (value, index) => new Promise((resolveStat) => {
                fs.stat(`${str}\\${value}`, (err, stats) => {
                  resolveStat({ pathname: files[index], mode: stats.mode });
                });
              }),
            ),
          ),
        );
      });
    } catch (e) {
      reject(e);
    }
  });

  return myFirstPromise;
}
