const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/hotels";

mongoose.connect(mongoURI, {
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