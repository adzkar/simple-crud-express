module.exports = function(db) {
  // db
  db.Promise = global.Promise;
  db.connect(process.env.MONGODB_URI, (err) => {
    if(err)
      console.log('Error: ',err);
    console.log('Conected');
  })
};
