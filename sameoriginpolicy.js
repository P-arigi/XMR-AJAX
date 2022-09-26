/*Same Origin Policy, JSONP and CORS
If AJAX is so simple to use, why don't we use it to make all of our requests? Why bother ever reloading 
the page? One of the biggest reasons is that they can be a violation of the Same Origin Policy.
 The same-origin policy is a very important concept in web security.

The Same Origin Policy states that a web browser permits scripts contained in a one web page to access
 data in a second web page, but only if both web pages have the same origin. */

 $.ajax({
    url: "https://itunes.apple.com/us/lookup?id=995535015"
}).then(function(data) {
    console.log(data)
});

// XMLHttpRequest cannot load https://itunes.apple.com/us/lookup?id=995535015. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'https://jquery.org' is therefore not allowed access.

$.ajax({
    url: "https://itunes.apple.com/us/lookup?id=995535015",
    jsonp: "callback",
    dataType: "jsonp"
}).then(function(data) {
    console.log(data)
});

/*Some servers will enable "Cross-origin resource sharing, or CORS", so that anyone can request resources from that server. If the server responds with a header for Access-Control-Allow-Origin and the value of the header contains
 the origin where the request is coming from, then it will allow JavaScript to be run!*/