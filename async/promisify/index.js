export default (asyncFn) => (...args) => {
  const promise = new Promise((resolve, reject) => {
    asyncFn(...args, (err, data) => (err ? reject(err) : resolve(data)));
  });
  return promise;
};

// export default function promisify(asyncFunc) {
//   return (...args) => {
//     return new Promise((resolve, reject) => {
//       asyncFunc(...args, (err, result) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(result);
//         }
//       });
//     });
//   };
// }
