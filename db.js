const mongoose = require("mongoose");
require('dotenv').config();



// const mongoURI = "mongodb://localhost:27017/hotels";
// const mongoURL = 'mongodb+srv://helloworld:Lalit1234@cluster0.bobh3xn.mongodb.net/'
// const mongoDB_URI_LOCAL = process.env.mongoDB_URI_LOCAL;
const mongoURL = process.env.mongoDB_URL;

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
// .then(() => console.log("✅ MongoDB connected successfully"))
// .catch((err) => console.error("❌ MongoDB connection error:", err));


const db = mongoose.connection;

db.on('connected',() => {
  console.log("connected  to mongoose server");
});
db.on('error',(err) => {
  console.log(" not connected  to mongoose server",err);
});
db.on('disconnected',() => {
  console.log("disconnected  to mongoDb");
}); 



// export the databases connection

module.exports = db;