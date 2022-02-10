const { Schema, model, Types } = require("mongoose");
const { type } = require("os");

const ReactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reationBody: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
  type:Date,
 default: Date.now,  
  }
});

const User = model("Reaction", ReactionSchema);

module.exports = Reaction;
