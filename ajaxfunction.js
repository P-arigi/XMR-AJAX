/* AJAX with jQuery
One of the biggest benefits of using jQuery is that it
 gives us a set of functions to make AJAX calls more
  easily readable, and with less code than using the XHR object */

  $.ajax({
    //What HTTP verb?
    method:"GET",
    //Where are we making a request to?
    url:"https://omdbapi.com",
    //What should we add to the query string?
    data:{
    // a key of t and a value of titanic which will look like
    //?t=titanic
    t:"titantic"
    },
    //this will add an HTTP request header of "Accept":"application/json"
    dataType:"json"
    //You can think of this ".then" like this:after we get the response, then
    //what do we do?
  }).then(function(response){
    console.log(response)
  }).catch(function(error){
    console.log(error);
  })


 /* $.get
This is simply just a shorthand for what we saw above, but without the dataType: json.*/

$.get("https://omdbapi.com?t=titanic").then(function(response){
    console.log(response);
});


/*$.getJSON
This is simply just a shorthand for what we saw above, but with the dataType: json.*/

$.getJSON("https://omdbapi.com?t=titanic").then(function(response){
    console.log(response);
});


/*$.post
If we want to make a POST request to a server (e.g. if we want to send data to it), we can either change
 the method with .ajax or use .post. The second parameter is the data we want to send to a server.*/

$.post("https://someapi.com", {name: "new user"}).then(function(response){
    console.log(response);
});