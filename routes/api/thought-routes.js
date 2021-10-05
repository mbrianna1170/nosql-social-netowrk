const router = require('express').Router();
const { getAllThought, addThought, removeThought, getThoughtById, updateThought, removeReaction, addReaction } = require('../../controllers/thought-controller');

// /api/thoughts
router.route('/').get(getAllThought);

// /api/thoughts/<thoughtId>
router.route('/:thoughtId').get(getThoughtById);
router.route('/:thoughtId').put(updateThought);

// /api/thoughts/:userId
router.route('/:userId').post(addThought);

// /api/thoughts/<userId>/<thoughtId>
router.route('/:userId/:thoughtId').delete(removeThought);

// REACTIONS

// /api/thoughts/:userId/:thoughtId
router.route('/:userId/:thoughtId').put(addReaction);

// /api/thoughts/:userId/:thoughtId/:reactionId
router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;
