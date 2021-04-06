var readlineSync = require("readline-sync");
let axios = require("axios");
const download =require('image-downloader');
let  name = readlineSync.question("What is your github username:");

// console.log(typeof(parseInt(age)));
let url ="https://api.github.com/users/" +name;

axios.get(url).then(
    function(response){
        console.log(response.data.name);
    const options ={
        url:response.data.avatar_url,
        dest:'./photos/'+name+".jpg"
    }
    download.image(options);
    }

).catch(
    function(error){
        console.log(error);
    }
)