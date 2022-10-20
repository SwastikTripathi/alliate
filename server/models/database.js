const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Swastik:spaceMongo1@cooking-blog.0ttax0i.mongodb.net/cooking-blog?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('Connected')
});

// Models
require('./Category');
require('./Recipe');