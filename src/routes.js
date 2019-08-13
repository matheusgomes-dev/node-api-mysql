const express = require("express");
const Router = express.Router();

const AuthController = require('./controllers/AuthController')
const UserController = require("./controllers/UserController");
const PostController = require('./controllers/PostController');
const PostReactionController = require('./controllers/PostReactionController');

Router.post('/token', AuthController.authenticate);

// post
Router.get('/posts/:skip', AuthController.verifyJWT, PostController.getFeed);
Router.get('/posts/:postId/detail', AuthController.verifyJWT, PostController.getDetail);
Router.post('/posts', AuthController.verifyJWT, PostController.publishPost);

// user
Router.post('/users', UserController.create);
Router.put('/users', AuthController.verifyJWT, UserController.update);

// reactions
Router.get('/reactions/totals/post/:postId', AuthController.verifyJWT, PostReactionController.totalsByPost);

module.exports = Router;
