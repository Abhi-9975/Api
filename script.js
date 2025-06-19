// async function fetchData(){
//     var response =await fetch("https://crudcrud.com/api/0030a8a01b7c47c4b50cfaa62648bdee/users")
//     var result =await response.json()
//     console.log(result);
    
// }
// fetchData()
var formData ={
    state :"Andhra pradesh",
    district : "east godavari",
    capital : "Amravathi"
}

async function sendData(){

    var response =await fetch("https://crudcrud.com/api/0030a8a01b7c47c4b50cfaa62648bdee/users",{
        method : "POST",
        headers : {
            "content-type" : "application/json"
        },
        body : JSON.stringify(formData)
    })
    if(response.ok){
        console.log(response.status);
        console.log("data sent successfully");   
        
    }
    else{
        console.log(response.status);
        console.log("failed");
             
    }
}
sendData()