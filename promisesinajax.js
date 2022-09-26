/* Promise:
For now, when you see some code with a .then in it, you can be reasonably confident that a promise is
 involved, and that the function inside of the .then won't execute until your AJAX request has received
  a response.*/

  $.ajax({
      method:"GET",
      url:"http://omdbapi.com",
      data:{
 // a key of t and a value of titanic which will look like ?t=titanic
        t:"titanic"
      },
      dataType:"json",
      success:function(response){
        console.log(response)
      },
      error:function(error){
        console.log(error);
      }
       
  })

  //Here is what $.ajax looks like with promises:

$.ajax({
    method: "GET",
    url: "https://omdbapi.com",
    data: {
        // a key of t and a value of titanic which will look like ?t=titanic
        t: 'titanic'
    },
    dataType: "json"
}).then(function(response){
    console.log(response);
}).catch(function(error){
    console.log(error);
})