// console.log("hello world");
// console.log("lalit sharma");

// function add(a, b){
//     return a+ b ;


// let  add = function(a, b){
// return  a+b;
// }


// let add = (a,b) => {
//     return a+b;
// }

//  let result = add(2,10);
//  console.log(result);




// callBack function in node js



// function callBack(){
//     console.log("function has been called");
// }

//  const  add = function(a,b ,callBack){
//     var result = a +b;
//     console.log(result);
//     callBack();
// }
// add(2,4,callBack);




// module in nodejs

// var fs = require('fs');
// var os = require('os');

// var user = os.userInfo();
// console.log(user);
// console.log(user.username);

// fs.appendFile('greeting.txt', 'hi'  + user.username + '!\n', () => {
//     console.log("file is created");
// });


// console.log(fs);






//how to import any file in node js
// const notes = require('./notes.js');
// console.log("ok, its working");

//  var age = notes.age;
//  var result = notes.addNumber(age ,20);

//  console.log(age);
//  console.log(result);








// what  is the json  and how to use it.
// const jsonString  = '{" name" : "john", "age": 30, "city": "new York"}';
// const jsonObject = JSON.parse(jsonString);
// console.log(jsonObject.name);





// how to create server in nodejs using express js
const express = require('express')
const app = express();
const db = require('./db');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// const Person = require('./models/person');
// const MenuItem = require('./models/menuItem');


// app.get('/', (req, res) => {
//   res.send('hii customer!! how can i help you')

// post method for person
// app.post('/person', async (req, res) => {
//   try {
//     const data = req.body  // req body contain  the person data
//     const newPerson = new Person(data);  // create a new person document uisng the  mongoose model

//     // save the new person data in database
//     const response = await newPerson.save();
//     console.log('data saved');
//     res.status(200).json(response);
//   }

//   catch (err) {
//     console.log(err);
//     res.status(500).json({ error: 'internal server error' });
//   }

// })
// // GET method for person
// app.get('/person', async (req, res) => {
//   try {
//     const data = await Person.find();
//     console.log('data fetch');
//     res.status(200).json(data);



//   }
//   catch (err) {
//     console.log(err);
//     res.status(500).json({ error: 'internal server error' });

//   }
// })



// post method to add  a menu item card
// app.post('/menu', async (req, res) => {
//   try {
//     const data = req.body  // req body contain  the person data
//     const newMenu = new MenuItem(data);  // create a new person document uisng the  mongoose model

//     // save the new person data in database
//     const response = await newMenu.save();
//     console.log('data saved');
//     res.status(200).json(response);
//   }

//   catch (err) {
//     console.log(err);
//     res.status(500).json({ error: 'internal server error' });
//   }

// })
// // GET method for menuItem card
// app.get('/menu', async (req, res) => {
//   try {
//     const data = await MenuItem.find();
//     console.log('data fetch');
//     res.status(200).json(data);



//   }
//   catch (err) {
//     console.log(err);
//     res.status(500).json({ error: 'internal server error' });

//   }
// })

// app.get('/person/:workType',async (req,res) =>{
//   try{
//     const workType = req.params.workType;
//     if(workType == 'chef' || workType =='manager' || workType =='waiter'){
//       const response = await Person.find({work: workType});
//       console.log("response fetched");
//       res.status(200).json(response);
//     }
//     else{
//       res.status(404).json({error: 'invalid work type'});
//     }

//   }
//   catch(err){
//     console.log(err);
//     res.status(500).json({error: 'internal server error'})

//   }
// })

// import the routes files
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes  = require('./routes/menuItemRoutes');

// use  the routes file
app.use('/person', personRoutes);
app.use('/menu',menuItemRoutes);





app.listen(3000, () => {
  console.log("listening on port 3000")
});

















