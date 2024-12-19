import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import router from "./routes/routes.js";
import errorHandler from "./middleware/error.js";
import notFound from "./middleware/notFound.js";

const app = express();
dotenv.config();

connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", router);

// NotFound & Error handling
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
