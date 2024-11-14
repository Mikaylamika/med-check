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

/** API **/

app.use("/api", router);

/** Routes */
app.use(express.static(path.join(__dirname, "/client/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});
/** Import Connection Files */
mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    try {
      app.listen(1337, () => console.log("http://localhost:1337/"));
      console.log("Database Connected");
    } catch (error) {
      console.log({ error: "Cannot Connect To The Server" });
    }
  })
  .catch((error) => {
    console.log({ error: error });
  });


