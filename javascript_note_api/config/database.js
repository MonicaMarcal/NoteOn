var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/javascriptNote', {
}
).then(() => console.log('connection succesful'))
  .catch((err) => console.error(err));