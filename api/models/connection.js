module.exports = function(db) {
  // db
  db.Promise = global.Promise;
  db.connect('mongodb://<dburl>', (err) => {
    if(err)
      console.log('Error: ',err);
    console.log('Conected');
  })
};
