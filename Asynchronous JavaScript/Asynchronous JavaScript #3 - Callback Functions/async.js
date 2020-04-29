// window.onload = function () {
//   // SYNCRONOUS CALLBACK
//   function callback(value) {
//     console.log(value);
//   }

//   var fruits = ["banana", "apple", "pear"];

//   // forEach method + callback function /function ()/
//   fruits.forEach(callback);

//     // SYNC, comes last
//   console.log("test");
// };
//
//

window.onload = function () {
  // ASYNCRONOUS
  $.get("tweets.json", function (data) {
    console.log(data);
  });
  console.log("test");
};

// OR

function cb(data) {
  console.log(data);
}

window.onload = function () {
  $.get("tweets.json", cb);
  console.log("test");
};
