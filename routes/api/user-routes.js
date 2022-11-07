const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser
} = require('../../controllers/user-controller');

// /api/users
router.route('/').get(getUsers).post(createUser);
// router.route('/').get(getUsers).post(createStudent);

// /api/users/:userId
router.route('/:userId').get(getSingleUser);
// router.route('/:userId').get(getSingleStudent).delete(deleteStudent);

// // /api/students/:studentId/assignments
// router.route('/:studentId/assignments').post(addAssignment);

// // /api/students/:studentId/assignments/:assignmentId
// router.route('/:studentId/assignments/:assignmentId').delete(removeAssignment);

module.exports = router;
