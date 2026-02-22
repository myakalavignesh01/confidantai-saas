import express from "express";
import OpenAI from "openai";
import Chat from "../models/Chat.js";
import auth from "../middleware/auth.js";

const router = express.Router();
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

router.post("/", auth, async (req, res) => {
  const { message } = req.body;

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "You are ConfidantAI, a confidence coach." },
      { role: "user", content: message }
    ]
  });

  const reply = response.choices[0].message.content;

  await Chat.create({
    userId: req.user.id,
    messages: [
      { role: "user", text: message },
      { role: "ai", text: reply }
    ]
  });

  res.json({ reply });
});

router.get("/", auth, async (req, res) => {
  const chats = await Chat.find({ userId: req.user.id });
  res.json(chats);
});

export default router;
