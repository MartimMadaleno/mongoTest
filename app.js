const mongoose = require('mongoose');
const User = require('./models/User'); // Assuming you save the schema in a separate file

// MongoDB connection URI
const uri = 'mongodb+srv://martimvmadaleno:wlk8hXqrc7NZz0Ae@sms.tegmi.mongodb.net/?retryWrites=true&w=majority&appName=SMS';

// Connect to MongoDB
mongoose.connect(uri)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Function to perform a simple query
async function queryUsers() {
  try {
    // Find all users
    const users = await User.find({});
    console.log('Users found:', users.length);
    users.forEach(user => {
      console.log(`User: ${user.name}, Email: ${user.email}`);
    });
  } catch (error) {
    console.error('Error querying users:', error);
  } finally {
    // Close the connection
    mongoose.connection.close();
  }
}

// Run the query
queryUsers();
