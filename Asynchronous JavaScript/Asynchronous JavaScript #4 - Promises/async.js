// https://www.youtube.com/watch?v=yswb4SkDoj0&t=24s
// 3:25

window.onload = function () {
  function get(url) {
    return new Promise(function (reseolve, reject) {
      var xhttp = new this.XMLHttpRequest();
      xhttp.open("GET", url, true);
      xhttp.onload = function () {
        if (xhttp.status == 200) {
          resolve(JSON.parse(http.response));
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
  promise.then(function (tweets) {
    console.log(tweets);
  });
};
