//Immediately Invoked Function Expression
(function () {
  console.log("This will never run again");
})();

let promise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("This is done!");
    }, 5000);
  });
};

(async () => {
  let p1 = await promise();
  console.log(p1);
  let p2 = await promise();
  console.log(p2);
  let p3 = await promise();
  console.log(p3);
})();

//Destructuring
let array = [1, 5, 6, 4, 7, 9];

let [a, , c, d, ...rest] = array;
console.log(a, c, d, rest);

let obj = {
  x: 10,
  y: 20,
};

const { x, y } = obj;
console.log(x, y);

//Spread Operator
let array1 = [5, 4, 3, 2, 1];

let obj1 = { ...array1 };
console.log(obj1);

function sum(a, b, c, d, e) {
  return a + b + c + d + e;
}
console.log(sum(...array1));

let obj2 = {
  name: "John",
  company: "XYZ",
  address: "174 Zucin Extension",
};
console.log(obj2);
console.log({ ...obj2, name: "Steve", address: "365 Adawar Place" });

//Global and Local Scope

function samp() {
  let ref = 56;
  console.log(ref);
}
samp();
// console.log(ref)
