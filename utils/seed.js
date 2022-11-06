const connection = require('../config/connection');
const { User, Thought} = require('../models');
const ReactionSchema = require('../models/Reaction');

connection.once('open', async () => {
    const jonathon = User.create({ username: 'Jonathon', email:"jonathon@vanausdal.net"}, function (err, Jonathon) {
        if (err) return (err);
        // saved!
    
      }); 
      
      Thought.create({thoughtText: "chicken scratch dinner", username: "Jonathon" }, function (err, Jonathon) {
        if (err) return (err);
        // saved!
      });

      
    

    console.table(jonathon);
    console.table(Thought);
});
