
fetch('https://random-data-api.com/api/v2/addresses')
.then(response => response.json())
.then(data =>{
    console.log(data);
})
.catch(error => {
    console.log("Error: "+error);
})