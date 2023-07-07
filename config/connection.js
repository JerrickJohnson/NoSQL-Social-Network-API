// Importing the mongoose library
const mongoose = require('mongoose');
// Connecting to the MongoDB database using the MongoDB URI provided in the environment 
// variables or using the default URI if the environment variable is not set
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/SocialNetDB',{
//     useNewUrlParser: true, 
//     useUnifiedTopology: true,
// });
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/SocialNetDB');
// Exporting the connection to the database as a module
module.exports = mongoose.connection

