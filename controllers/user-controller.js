const { User } = require('../models');

module.exports = {
  // Get all courses
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },

  // get a single user
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  // Create a user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  // Delete a user
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No User with that ID' })
          : console.log("User Deleted")
      )
      .then(() => res.json({ message: 'User successfully deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
  // Update a course
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.courseId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No course with this id!' })
          : res.json(course)
      )
      .catch((err) => res.status(500).json(err));
  },
};
// [
// // 	{
// // 		"_id": "6361ad73babe3d014a6e1786",
// // 		"username": "Jonathon",
// // 		"email": "jonathon@vanausdal.net",
// // 		"thoughts": [],
// // 		"friends": [],
// // 		"__v": 0,
// // 		"friendCount": 0
// // 	},
// // 	{
// // 		"_id": "636850b4ab78ce4cf4719b85",
// // 		"username": "Dad",
// // 		"email": "dad@dad.net",
// // 		"thoughts": [],
// // 		"friends": [],
// // 		"__v": 0,
// // 		"friendCount": 0
// // 	}
// // ]