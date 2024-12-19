import express from "express";
import cors from "cors";
import { routes } from "./routes/routes.js";
import { errorHandler } from "./middleware/error.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", routes);

// Error handling
app.use(errorHandler);
