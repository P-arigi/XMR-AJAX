fetch('https://omdbapi.com?t=titanic').then(function(response){
    return response.json().then(function(data){
        console.log(data);

    });
});

 //Other fetch
 
//call the fetch function
fetch('https://api.github.com/users')
.then(res => res.json())//response type
.then(data => console.log(data)); //log the data;
