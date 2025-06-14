import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes.js"; // ✅ Add .js extension
import router from "./routes/user-routes.js";      // ✅ Add .js extension
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/user", router);
app.use("/api/blog", blogRouter);

// MongoDB Connection
mongoose
  .connect(MONGO_URI,
    {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}
  )
  .then(() => app.listen(PORT))
  .then(() =>
    console.log("Connected TO Database and Listening TO Localhost 5000")
  )
  .catch((err) => console.log(err));
