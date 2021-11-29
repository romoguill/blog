const express = require('express');
const mongodb = require('mongodb');

const db = require('../data/database');

const router = express.Router();

const ObjectId = mongodb.ObjectId;

router.get('/', (req, res) => {
  res.render('home');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/admin', async (req, res) => {
  const posts = await db.getDb().collection('posts').find({}).toArray();
  res.render('admin', { posts });
});

router.post('/posts', async (req, res) => {
  const post = await db
    .getDb()
    .collection('posts')
    .insertOne({ title: req.body.title, content: req.body.content });

  res.redirect('/admin');
});

router.post('/posts/:id/delete', async (req, res) => {
  const postId = ObjectId(req.params.id);

  await db.getDb().collection('posts').deleteOne({ _id: postId });

  res.redirect('/admin');
});

module.exports = router;
