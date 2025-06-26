const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  // 1. Define a schema with a method
const catSchema = new mongoose.Schema({
  name: String
});

// 2. Add a method to the schema
catSchema.methods.speak = function () {
  const greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name";
  console.log(greeting);
};

// 3. Create a model
const Cat = mongoose.model('Cat', catSchema);

// 4. Create a new cat
const fluffy = new Cat({ name: 'fluffy' });

// 5. Call the method
fluffy.speak();
mongoose.connection.close();

});


