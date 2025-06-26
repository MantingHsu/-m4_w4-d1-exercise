const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

// 1. Define a schema
const fruitSchema = new mongoose.Schema({
  name: String
});

// 2. Create a model
const Fruit = mongoose.model('Fruit', fruitSchema);

// 3. Create a new fruit
const apple = new Fruit({ name: 'apple' });

// 4. Save the new fruit to the database and print its name
apple.save(function (err, savedFruit) {
  if (err) return console.error(err);
  console.log(savedFruit.name);
  mongoose.connection.close(); // Close the connection after saving
});
