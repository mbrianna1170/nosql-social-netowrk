const { Schema, model } = require("mongoose");

// creates Schema for User model
const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: "Please provide a username.",
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: "Please enter your email.",
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// get total friend count
UserSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

// create the User model using the UserSchema
const User = model("User", UserSchema);

// export the User model
module.exports = User;
