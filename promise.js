// let done = false;

// const isItDoneYet = new Promise((resolve, reject) => {
//   if (done) {
//     resolve("Work is DOne already");
//   } else {
//     reject("Work is Not done already");
//   }
// });

// const checkIsItDoneYet = () => {
//   isItDoneYet
//     .then((response) => {
//       console.log(response, " resp");
//     })
//     .catch((err) => {
//       console.log(err, " err");
//     })
//     .finally(() => console.log(" finally"));
// };

// checkIsItDoneYet();

// function getTempreature() {
//   return new Promise((resolve, reject) => {
//     const delay = Math.floor(Math.random() * (1000 - 1000 + 1) + 1000);
//     const temp = Math.floor(Math.random() * (300 - 1 + 1) + 1);
//     console.log(delay, temp);

//     setTimeout(() => {
//       if (temp > 200) {
//         reject(`Reject: Too hot | Delay: ${delay} | Temperature: ${temp} deg`);
//       } else if (temp < 100) {
//         reject(`Reject: Too cold | Delay: ${delay} | Temperature: ${temp} deg`);
//       } else {
//         resolve(
//           `Resolve: Just Right | Delay: ${delay} | Temperature: ${temp} deg`
//         );
//       }
//     }, delay);
//   });
// }

// getTempreature()
//   .then((res) => {
//     console.log(res, " response");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((res, rej) => {
  setTimeout(() => {
    rej("foo");
  }, 100);
});

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log(values, " vaaaaal");
  })
  .catch((err) => {
    console.log(err);
  });
