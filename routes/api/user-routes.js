const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser
} = require('../../controllers/user-controller');

// /api/users
router.route('/').get(getUsers).post(createUser);


// /api/users/:userId
router.route('/:userId').get(getSingleUser).delete(deleteUser);


// /api/students/:studentId/assignments
router.route('/:userId/users').post(updateUser);



module.exports = router;
