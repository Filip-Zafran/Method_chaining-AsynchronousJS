// CALLBACK HELL
// https://www.youtube.com/watch?v=QRq2zMHlBz4

window.onload = function () {
  // to shorten create a function to handle errro
  function handleError(jqXHR, textStatus, error) {
    console.log(error);
  }

  // 1. TWEETS
  $.ajax({
    type: "GET",
    url: "tweets.json",
    success: function (data) {
      console.log(data);

      // 2. FRIENDS
      $.ajax({
        type: "GET",
        url: "friends.json",
        success: function (data) {
          console.log(data);

          // 3. VIDS
          $.ajax({
            type: "GET",
            url: "vids.json",
            success: function (data) {
              console.log(data);
            },
            error: handleError,
            // error: function (jqXHR, textStatus, error) {
            //   console.log(error);
            // },
          });
        },
        error: handleError,
        // error: function (jqXHR, textStatus, error) {
        //   console.log(error);
        // },
      });
    },
    error: handleError,
    // error: function (jqXHR, textStatus, error) {
    //   console.log(error);
    // },
  });
};

// nisam do kraja isao,,,, do cca 12min
