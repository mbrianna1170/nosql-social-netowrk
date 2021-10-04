const { Schema, model, Types } = require("mongoose");
const dateFormat = require('../utils/dataFormat');

// creates Schema for Thought model
const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)
    },
    username: {
      type: String,
      required: true,
    },
  //   reactions: [ReactionSchema],
  // },
  // {
  //   toJSON: {
  //     virtuals: true,np
  //     getters: true
  //   },
  //   id: false
  // }
  }
);

// // creates subdocument Schema ONLY for reaction fields:
// const ReactionSchema = new Schema({
//   reactionId: {
//     type: Schema.Types.ObjectId,
//     default: () => new Types.ObjectId(),
//   },
//   reactionBody: {
//     type: String,
//     required: true,
//     maxlength: 280,
//   },
//   username: {
//     type: String,
//     required: true,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//     get: createdAtVal => dateFormat(createdAtVal)
//   },
//     toJSON: {
//       getters: true
//     },
// });

// // get total reaction count
// ThoughtSchema.virtual("reactionCount").get(function () {
//   return this.reactions.length;
// });

const Thought = model("Thought", ThoughtSchema);

module.exports = Thought;
