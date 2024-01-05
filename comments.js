// Create web server

// Import packages
const express = require('express');
const router = express.Router();

// Import modules
const commentsController = require('../controllers/commentsController');

// Import middleware
const { requireAuth } = require('../middleware/authMiddleware');

// Handle GET requests to /comments
router.get('/', requireAuth, commentsController.comments_get);

// Handle POST requests to /comments
router.post('/', requireAuth, commentsController.comments_post);

// Handle GET requests to /comments/:id
router.get('/:id', requireAuth, commentsController.comment_get);

// Handle PUT requests to /comments/:id
router.put('/:id', requireAuth, commentsController.comment_put);

// Handle DELETE requests to /comments/:id
router.delete('/:id', requireAuth, commentsController.comment_delete);

// Export module
module.exports = router;