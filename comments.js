// Create web server

// Import modules
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// Handle Request
router.get('/', commentController.comment_list);
router.get('/create', commentController.comment_create_get);