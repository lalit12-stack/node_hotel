// function add(a,b){
//     return a+b;


// var add = function(a,b){
//     return a+b;



// var add = (a,b) => {
//     return a+b;
// }



// var  result = add(2,3);
// console.log(result);



// function callBack(){
//     console.log("hii, this  is a callback function");
// }


// var add =  function(a,b, callBack){
//     var result  = a+ b;
//     console.log(result);
//     callBack();
// }

// add(12,56, callBack);


// var os = require('os');
// var  fs = require('fs');


// var user = os.userInfo();
// console.log(user);
// console.log(user.username);

// fs.appendFile('greeting2.txt', 'hii' + user.username + '!\n',()=>{
//     console.log("file is created");
// }) ;







// how to import file in node js

// var test = require('./importFile.js');
// var _ = require('lodash');


// var age = test.age;
// console.log(age);

// var result= test.addNumber(age+10,300);
// console.log(result);



//this is the lodash function
// var data = ['lalit', 'lalit', 1,2,1,12, 'sagar','age', '2'];
// var filter = _.uniq(data);
// console.log(filter);






// console.log(_.isString('israven'));




// what is the json format

//how to console json in nodejs
// const jsonString = '{"name": "john", "age": 25, "city": "jaipur"} ';
// const jsonObject = JSON.parse(jsonString);
// console.log(jsonObject);




// how to convert json string  to object
// const objectToConvert = {
//     "name" : "lalit ",
//     "age" : 25,
//     "city" : "jaipur"
// };

// const json = JSON.stringify(objectToConvert);
// console.log( typeof json);



//how to create server in nodejs

const express = require('express') 

const app = express()
// const db = require('./db');

app.get('/lalit',  (req, res) => {
  res.send('Hello World')
})



app.get('/sagar' , (req,res) => {
    
    var menuCard = {
        name:'idli',
        size: '10 cm ',
        is_sambhar: true,
        is_chutney: false
    }
    res.send(menuCard)



    // app.post('/item', (req, res) =>{
    //     res.send("data is saved")
    // })

});

app.listen(3000 , () =>{
    
    console.log("listening on port number 3000")
   
    
} ) ;
    











