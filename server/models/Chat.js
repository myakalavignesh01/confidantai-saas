import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  messages: [
    {
      role: String,
      text: String
    }
  ],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Chat", chatSchema);
