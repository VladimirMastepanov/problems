export default (totalTime, cb) => ({
  step: 100,
  totalTime,
  elapsedTime: 0,
  tick() {
    const newElapsedTime = this.elapsedTime + this.step;
    if (newElapsedTime > this.totalTime) {
      clearInterval(this.intervalId);
      cb({ state: 'finished' });
      return;
    }

    this.elapsedTime = newElapsedTime;
    cb({ state: 'working', elapsedTime: this.elapsedTime });
  },
  start() {
    this.intervalId = setInterval(this.tick.bind(this), this.step);
  },
});

// export default function makeTimer(duration, callback) {
//   let isRunning = false;
//   let startTime;
//   let intervalId;

//   return {
//     start() {
//       if (isRunning) {
//         return;
//       }
//       isRunning = true;
//       startTime = Date.now();
//       intervalId = setInterval(() => {
//         const elapsedTime = Date.now() - startTime;
//         if (elapsedTime >= duration) {
//           clearInterval(intervalId);
//           isRunning = false;
//           callback({ state: 'finished' });
//         } else {
//           callback({ state: 'working', elapsedTime });
//         }
//       }, 100);
//     },
//     stop() {
//       if (isRunning) {
//         clearInterval(intervalId);
//         isRunning = false;
//       }
//     }
//   };
// }
