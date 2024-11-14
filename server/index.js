import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { config } from "dotenv";
import router from "./routes/routes.js";
import dotenv from "dotenv";

/** App Middlewares */
dotenv.config();

const app = express();
app.use(cors({ origin: ["http://localhost:1337/", ""] }));
app.use(express.json());
config();

/** API **/

app.use("/api", router);

/** Routes */

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
