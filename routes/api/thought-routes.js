const router = require('express').Router();
const {
  getAllThought,
  getSingleThought,
  createThought,
  deleteThought,

} = require('../../controllers/thought-controller');

// /api/thoughts
router.route('/').get(getAllThought).post(createThought,);

// /api/thoughts/:thoughtid
router.route('/:thoughtId').get(getSingleThought).delete(deleteThought);
 

module.exports = router;
