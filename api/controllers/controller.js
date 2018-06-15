'use strict';

var db = require('mongoose'),
    Post = db.model('Posts');

exports.list_all_post = function(req,res) {
  Post.find({}, (err, data) => {
    if(err) res.send(err);
    res.json(data)
  })
}

exports.create_a_post = function(req,res) {
  var new_post = new Post(req.body)
  new_post.save((err, data) => {
    if(err) res.send(err)
    res.json(data)
  })
}

exports.read_post_by_id = function(req,res) {
  var id = req.params.idpost;
  Post.findById(id, (err, data) => {
    if(err) res.send(err)
    res.json(data)
  })
}

exports.update_a_post = function(req,res) {
  var id = req.params.idpost;
  Post.findOneAndUpdate({_id: id}, req.body, {new: true}, (err, data) => {
    if(err) res.send(err)
    res.json(data)
  })
}

exports.delete_a_post = function(req,res) {
  var id = req.params.idpost;
  Post.remove({_id: id}, (err, data) => {
    if(err) res.send(err)
    res.json({msg: 'Successfully deleted'})
  })
}
