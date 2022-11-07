const { Thought, User } = require('../models');

module.exports = {
//get thoughts
    getAllThought(req, res) {
        Thought.find({})
          .populate({
            path: 'reactions',
            select: '-__v'
          })
          .select('-__v')
          .sort({ _id: -1 })
          .then(dbThoughtData => res.json(dbThoughtData))
          .catch(err => {
            console.log(err);
            res.sendStatus(400);
          });
      },
          
      //get one thought
      getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
          .select('-__v')
          .lean()
          .then(async (thought) =>
            !thought
              ? res.status(404).json({ message: 'no thought with that id' })
              : res.json({
                  thought,
                })
          )
          .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
          });
      },
      // create a new thought
      createThought(req, res) {
        Thought.create(req.body)
          .then((thought) => res.json(thought))
          .catch((err) => res.status(500).json(err));
      },
      // Delete thought
      deleteThought({ params }, res) {
        Thought.findOneAndDelete({ _id: params.thoughtId })
          .then(ThoughtData => {
            if (!ThoughtData) {
              res.status(404).json({ message: 'No thoughts found with that id!' });
              return;
            }
            return User.findOneAndUpdate(
              { _id: parmas.thoughtId },
              { $pull: { thoughts: params.Id } },
              { new: true }
            )
          })
          .then(dbUserData => {
            if (!dbUserData) {
              res.status(404).json({ message: 'No User found with this id!' });
              return;
            }
            res.json(dbUserData);
          })
          .catch(err => res.json(err));
      },
}
    
