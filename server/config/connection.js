// mongoose connection info
const { mongoose, connect, connection } = require('mongoose');
const dotenv = require('dotenv').config(); 


// Wrap Mongoose around local connection to MongoDB
// mongoose.connect('mongodb://127.0.0.1:27017/mentorship_test', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

const uri = process.env.MONGODB_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("connected to db atlas"))
.catch((error) => {
  console.error(error);
})
;

// Export connection 
module.exports = mongoose.connection;
