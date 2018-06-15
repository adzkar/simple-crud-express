var db = require('mongoose'),
    Schema = db.Schema;

var post = new Schema({
  title: {
    type: String,
    required: 'Enter the title'
  },
  postAt: {
    type: Date,
    default: Date.now
  },
  desc: {
    type: String,
    required: 'Enter the description below'
  }
});


module.exports = db.model('Posts', post);
