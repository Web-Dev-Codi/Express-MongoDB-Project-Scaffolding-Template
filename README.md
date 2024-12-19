# Express MongoDB Template

A modern Express.js template with MongoDB and Mongoose integration using ES6 modules.

## Features

- ES6 Module imports/exports
- MongoDB connection with Mongoose
- Environment variable configuration
- Structured project layout
- Error handling middleware
- Basic security implementations
- API route versioning
- Request validation/ coming soon
- CORS configuration

## Project Structure

```
├── src/
│   ├── config/
│   │   ├── database.js     # Database connection configuration
│   ├── middleware/
│   │   ├── error.js        # Error handling middleware
│   │   ├── validate.js     # Request validation middleware
│   │   ├── notFound.js     # Not found error handling middleware
│   ├── models/
│   │   └── model.js        # Model definitions
│   ├── routes/
│   │   └── routes.js       # Route aggregation
│   ├── utils/
│   │   └── logger.js       # Logging utility
│   └── server.js           # Express application setup
├── .env.example            # Environment variables template
├── .gitignore
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18.0 or higher
- MongoDB 5.0 or higher
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Web-Dev-Codi/Express-MongoDB-Project-Scaffolding-Template.git
cd Express-MongoDB-Project-Scaffolding-Template
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file based on `.env.example`:

```bash
cp .env.example .env
```

4. Update the `.env` file with your configuration:

```env
NODE_ENV=development
PORT=3000
MONGODB_URI=mongodb://localhost:27017/your_database
```

### Usage

Start the development server:

```bash
npm run dev
```

Start in production mode:

```bash
npm start
```
Seed your database with mock content:

```bash
npm run data:import
```
Destroy your mock database content:

```bash
npm run data:destroy
```

## Key Components

### Database Configuration (config/database.js)

```javascript
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
```

### Express Application Setup (server.js)

```javascript
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
app.use("/users", router);

// NotFound & Error handling
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
```

## API Routes

Routes are versioned under the `/users` prefix. Example route setup:

```javascript
import { Router } from "express";
import {
  getAll,
  getSingleUser,
  postSingleUser,
} from "../controllers/controller.js";
// validate.js to be implemented soon

const router = Router();

router.get("/", getAll);

router.get("/:id", getSingleUser);

router.post("/", postSingleUser);

export default router;
```

## Error Handling

The template includes centralized error handling middleware:

```javascript
const errorHandler = (err, req, res, next) => {
  if (err.status) {
    res.status(err.status).json({ msg: err.message });
  } else {
    res.status(500).json({ msg: err.message });
  }
  next();
};

export default errorHandler;
```

## Request Validation

Using [express-validator](https://express-validator.github.io/) for request validation:

```javascript
export const comingSoon = async () => {
  console.log("Coming Soon");
};
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
