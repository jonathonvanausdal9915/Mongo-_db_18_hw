const { Schema, model } = require('mongoose');
const reaction = require('./Reaction');
//Thought Schema
const ThoughtSchema = new Schema(
    {
        thoughtText: { 
            type: String,
            required: true,
            minLength:1,
            maxLength:280 
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },

    username: {
            type:String,
            required: true
        },
    reactions:[reaction]
},
{
  toJSON: {
    virtuals: true,
  },
  id: false,
}
);
  
//Thought schema virtual to get reactions

ThoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return this.reactions.length;
  });
 // Thought module
const Thought = model('Thought', ThoughtSchema);
// exporting thought module
module.exports = Thought