// https://www.youtube.com/watch?v=yswb4SkDoj0&t=24s

window.onload = function () {
  function get(url) {
    return new Promise(function (resolve, reject) {
      var xhttp = new XMLHttpRequest();
      xhttp.open("GET", url, true);
      xhttp.onload = function () {
        if (xhttp.status == 200) {
          resolve(JSON.parse(xhttp.response));
        } else {
          reject(xhttp.statusText);
        }
      };
      xhttp.oneerror = function () {
        reject(xhttp.statusText);
      };
      xhttp.send();
    });
  }

  var promise = get("tweets.json");
  promise
    .then(function (tweets) {
      console.log(tweets);
      // WE CAN RETURN ANOTHER GET REQUEST(PROMISE) IN THIS CALLBACK FUNCTION
      return get("friends.json");
    })
    .then(function (friends) {
      console.log(friends);
    })
    // WE ADDED FRIENDS --------------------------------------
    .catch(function (error) {
      console.log(error);
    });
};

// ovo gore mi je sve nejasno

// JQUERY METHOD

$.get("vids.json")
  .then(function (vids) {
    console.log(vids);
    return $.get("friends.json");
  })
  .then(function (friends) {
    console.log(friends);
  });
