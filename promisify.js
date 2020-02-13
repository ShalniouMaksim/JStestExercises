export default function promisify(func) {
  return (...args) => {
    const Prom = new Promise((resolve, reject) => {
      func(...args, (err, content) => {
        if (err) reject(err);
        resolve(content);
      });
    });
    return Prom;
  };
}
