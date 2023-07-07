const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtsById,
    createThought,
    deleteThought,
    updateThoughtById,
    createReaction,
    deleteReaction,
} = require('../../controllers/thought-controller');

//routes for GET and POST for all Thoughts
router.route('/').get(getAllThoughts).post(createThought);

//routes for GET, PUT, and Delete Thoughts
router.route('/:thoughtId').get(getThoughtsById).put(updateThoughtById).delete(deleteThought);

//Define route for POST reaction to a thought
router.route('/:thoughtId/reactions').post(createReaction);

//Define the route for DELETE reaction to a thought
router.route('/thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;