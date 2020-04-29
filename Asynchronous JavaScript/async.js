// ASYNCHRONOUS (!)
// --> if I want it to be sync, so that TEST comes last: change TRUE ot FALSE
// SYNC is BAD practice ! (waiting too, long and bad affect to users experience)

window.onload = function () {
  var http = new this.XMLHttpRequest();

  http.onreadystatechange = function () {
    // console.log(http);
    if (http.readyState == 4 && http.status == 200) {
      console.log(JSON.parse(http.response));
    }
  };

  // open method
  // -tell the JS where we want to get the data from, type and ios it asyn or sync
  http.open("GET", "tweets.json", true);
  // TRUE = ASYNC  /////   FALSE = SYNC   !!!!!!!!!!!!!!!!!

  // SEND METHOD !!
  http.send();

  // will be BEFORE our request as it is async (!)
  console.log("test");
};

// Value	State	            Description
// 0	    UNSENT	            Client has been created. open() not called yet.
// 1	    OPENED	            open() has been called.
// 2	    HEADERS_RECEIVED	send() has been called, and headers and status are available.
// 3	    LOADING	            Downloading; responseText holds partial data.
// 4	    DONE	            The operation is complete.
