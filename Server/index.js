const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { Schema } = mongoose;
const cors = require("cors");
const app = express();
const port = 8080;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cors());

const DB_URL =
  "mongodb+srv://rafailismayilov:rafael123@cluster0.z2taq1g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const AranozSchema = new Schema({
  title: { type: String, require: true },
  price: { type: Number, require: true },
  imageUrl: { type: String, require: true },
});

const AranozModel = mongoose.model("Aranoz", AranozSchema);

app.get("/api/aranoz", async (req, res) => {
  try {
    const aranoz = await AranozModel.find({});
    if (aranoz.length > 0) {
      res.status(200).send({ message: "data success", data: aranoz });
    } else {
      res.status(204).send({ message: "data is empty", data: null });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.get("/api/aranoz/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const aranoz = await AranozModel.findById({ id });
    if (aranoz) {
      res.status(200).send({ message: "success", data: aranoz });
    } else {
      res.status(204).send({ message: "note found" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.delete("/api/aranoz/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const aranozDeleted = await AranozModel.findByIdAndDelete({ id });
    if (aranozDeleted) {
      res
        .status(200)
        .send({ message: "delete success", deleted: aranozDeleted });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.post("/api/aranoz", async (req, res) => {
  try {
    const newAranoz = new AranozModel({ ...req.body });
    await newAranoz.save();
    res.status(201).send({ message: " create succes", data: newAranoz });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

mongoose.connect(DB_URL).then(() => {
  console.log("Connected!");
  app.listen(port, () => {
    console.log(`Link: http://localhost:${port}`);
  });
});
