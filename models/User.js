const { Schema, model } = require('mongoose');

let validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};


  
const UserSchema = new Schema(
    {
      username: {
            type: String,
            unique:true, 
            required: true,
            trimmed:true ,
        },
      email: {
            type: String,
            unique:true,
            required: true,
            validate: [validateEmail, 'Please fill a valid email address'],
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },
    thoughts:  [ 
        {
            type: Schema.Types.ObjectId,
            ref: "Thought"
        }
      ],
      friends: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User',
        }
      ],
      },
      {
        toJSON: {
          virtuals: true,
        },
        id: false,
      }
    
    ); 


UserSchema
.virtual('friendCount')
// Getter
.get(function () {
  return this.friends.length;
});


const User = model('User', UserSchema);

module.exports = User;

