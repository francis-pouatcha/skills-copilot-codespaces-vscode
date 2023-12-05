// Create a web server for comment
// ========================================================

// Import modules
var express = require('express');
var router = express.Router();
var Comment = require('../models/comment');

// Get all comments
router.get('/', function(req, res, next) {
    Comment.find(function(err, comments) {
        if (err) {
            return next(err);
        }
        res.json(comments);
    });
});

// Handle post request
router.post('/', function(req, res, next) {
    var comment = new Comment(req.body);
    comment.save(function(err, comment) {
        if (err) {
            return next(err);
        }
        res.json(comment);
    });
});

// Get a comment by id
router.get('/:id', function(req, res, next) {
    Comment.findById(req.params.id, function(err, comment) {
        if (err) {
            return next(err);
        }
        res.json(comment);
    });
});

// Update a comment by id
router.put('/:id', function(req, res, next) {
    Comment.findById(req.params.id, function(err, comment) {
        if (err) {
            return next(err);
        }
        comment.content = req.body.content;
        comment.save(function(err, comment) {
            if (err) {
                return next(err);
            }
            res.json(comment);
        });
    });
});

// Delete a comment by id
router.delete('/:id', function(req, res, next) {
    Comment.findByIdAndRemove(req.params.id, function(err, comment) {
        if (err) {
            return next(err);
        }
        res.json(comment);
    });
});

// Export router
module.exports = router;

// End of file
// ========================================================
