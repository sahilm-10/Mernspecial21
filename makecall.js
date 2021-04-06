let axios = require("axios");

// console.log(typeof axios);
axios.get("https://api.github.com/users/keenwarrior11221212").then(
    function(response){
        console.log(response.data);
    }
).catch(
    function(error){
        console.log(error);
    }
)