const express = require("express");
const mongoose = require("mongoose");
const Player = require("./dbcreate");

const app = express();
mongoose.connect("mongodb://127.0.0.1/chessdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// create
app.get("/add", async (req, res) => {
  try {
    const { username, password, nationality, elo, age } = req.query;
    const newPlayer = new Player({ username, password, nationality, elo, age });
    await newPlayer.save();
    res.send("Player added");
  } catch (err) {
    res.send("Error adding player: " + err.message);
  }
});

// read
app.get("/list", async (req, res) => {
  const players = await Player.find();
  res.send(players);
});

// update
app.get("/update", async (req, res) => {
  try {
    const { id, username, password, nationality, elo, age } = req.query;

    const updated = await Player.findByIdAndUpdate(
      id,
      { username, password, nationality, elo, age },
      { new: true }
    );

    res.send(updated ? "Player updated" : "Player not found");
  } catch (err) {
    res.send("Error updating player: " + err.message);
  }
});

// delete by ID
app.get("/delete", async (req, res) => {
  try {
    const { id } = req.query;
    await Player.findByIdAndDelete(id);
    res.send("Player deleted");
  } catch (err) {
    res.send("Error deleting player: " + err.message);
  }
});

// delete by username
app.get("/deleteByUsername", async (req, res) => {
  try {
    const { username } = req.query;
    const deleted = await Player.findOneAndDelete({ username });

    res.send(deleted ? "Player deleted" : "Player not found");
  } catch (err) {
    res.send("Error deleting player: " + err.message);
  }
});

//get by username
app.get("/getByUsername", async (req, res) => {
  try {
    const { username } = req.query;
    const player = await Player.findOne({ username }, "_id");
    if (player) {
      res.json({ id: player._id });
    } else {
      res.send("Player not found");
    }
  } catch (err) {
    res.send("Error getting player: " + err.message);
  }
});

// search by ID
app.get("/searchById", async (req, res) => {
  try {
    const { id } = req.query;
    const player = await Player.findById(id);
    if (player) {
      res.send(player);
    } else {
      res.send("Player not found");
    }
  } catch (err) {
    res.send("Error getting player: " + err.message);
  }
});

// search by username
app.get("/searchByUsername", async (req, res) => {
  try {
    const { username } = req.query;
    const player = await Player.findOne({ username });
    if (player) {
      res.send(player);
    } else {
      res.send("Player not found");
    }
  } catch (err) {
    res.send("Error getting player: " + err.message);
  }
});

// start server
app.listen(3000, () => console.log("Server on http://localhost:3000"));
