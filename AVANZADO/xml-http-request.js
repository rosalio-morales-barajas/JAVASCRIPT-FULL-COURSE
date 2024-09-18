

function reqListener(){
    console.log(this.responseText);
}


const req = new XMLHttpRequest();

req.addEventListener('load', reqListener);
req.open('GET', "https://random-data-api.com/api/v2/users");
req.send();

