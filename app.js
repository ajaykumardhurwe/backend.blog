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
// app.use(cors(
// ));

app.use(cors(
  {
    origin: ["https://ajaykumardhurwe.github.io/frontend.blog/"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  }
));
app.use(express.json());
// Routes
app.get('/', (req, res) => {
  res.send('✅ Hello World from Express with ES Modules!');
});

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

















// // file: server.js
// import http from 'http'; // ✅ Use this


// // Create a server
// const server = http.createServer((req, res) => {
//   // Set the response header
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   // Send the response body
//   res.end('Hello World\n');
// });

// // Server listens on port 3000
// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`✅ Server running at http://localhost:${PORT}/`);
// });










// // app.js
// import express from 'express';

// const app = express();
// const PORT = 3000;

// // Basic GET route
// app.get('/', (req, res) => {
//   res.send('✅ Hello World from Express with ES Modules!');
// });

// // Another example route
// app.get('/about', (req, res) => {
//   res.send('📘 This is the about page.');
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`🚀 Server is running at http://localhost:${PORT}`);
// });
