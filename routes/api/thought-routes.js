const router = require('express').Router();
const { getAllThought, addThought, removeThought, getThoughtById, updateThought } = require('../../controllers/thought-controller');

// /api/thoughts
router.route('/').get(getAllThought);

// /api/thoughts/<thoughtId>
router.route('/:thoughtId').get(getThoughtById);
router.route('/:thoughtId').put(updateThought);

// /api/thoughts/:userId
router.route('/:userId').post(addThought);

// /api/thoughts/<userId>/<thoughtId>
router.route('/:userId/:thoughtId').delete(removeThought);

module.exports = router;
