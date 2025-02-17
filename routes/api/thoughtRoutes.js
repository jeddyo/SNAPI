const router = require('express').Router();
const thoughtController = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/')
    .get(thoughtController.getThoughts)
    .post(thoughtController.createThought);

// /api/thoughts/:id
router.route('/:id')
    .get(thoughtController.getSingleThought)
    .put(thoughtController.updateThought)
    .delete(thoughtController.deleteThought);

module.exports = router;