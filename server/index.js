import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { config } from "dotenv";
import router from "./routes/routes.js";
import dotenv from "dotenv";
import path from "path";

/** App Middlewares */
dotenv.config();

const app = express();
app.use(cors({ origin: ["http://localhost:1337/", ""] }));
app.use(express.json());
config();
const __dirname = path.resolve();

(async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("MongDB Connected");
  } catch (error) {
    console.log({ error });
  }
})();

/** API **/

app.use("/api", router);

app.use(express.static(path.join(__dirname, "/client/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.listen(1337, console.log("http://localhost:1337"));
