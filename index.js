import express from "express";
import fetch from "node-fetch";

const app = express();
app.use(express.json());

const TELEGRAM_TOKEN = "7317143342:AAHGWof7Rp6pHZa2RAkarBM8ybG4oLIXdFs";
const CHAT_ID = "-1003256977811";

app.post("/webhook", async (req, res) => {
  try {
    const message = JSON.stringify(req.body, null, 2);

    await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message
      })
    });

    res.send("OK");
  } catch (err) {
    console.error(err);
    res.send("ERROR");
  }
});

app.get("/", (req, res) => {
  res.send("BOT RUNNING");
});

app.listen(3000, () => console.log("BOT READY"));
