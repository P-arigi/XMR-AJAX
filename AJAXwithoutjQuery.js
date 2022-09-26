//AJAX: Stands for Asynchronous JavaScript and XML

var XHR= new XMLHttpRequest();
XHR.onreadystatechange=function(){
    if(XHR.readyState==4 && XHR.status==200){
        console.log(JSON.parse(XHR.responseText))
    }

};
XHR.open("GET", "https://omdbapi.com?t=titanic");
XHR.send();
