module.exports = function(app) {
  var posting = require(__dirname+'/../controllers/controller')

  app.route('/post')
    .get(posting.list_all_post)
    .post(posting.create_a_post);

  app.route('/post/:idpost')
    .get(posting.read_post_by_id)
    .put(posting.update_a_post)
    .delete(posting.delete_a_post)
};
