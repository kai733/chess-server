const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

mongoose
  .connect("mongodb://127.0.0.1/chessdb")
  .then(() => console.log("Connecté à chessdb !"))
  .catch((err) => console.error("Erreur DB :", err));

const { Schema } = mongoose;

const PlayerSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  nationality: { type: String, required: true },
  elo: { type: Number, required: true },
  age: { type: Number, required: true },
});

const Player = mongoose.model("Player", PlayerSchema);

module.exports = Player;
