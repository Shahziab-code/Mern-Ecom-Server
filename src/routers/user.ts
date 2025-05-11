import express from "express";
import {
  deleteUsers,
  getAllUsers,
  getUsers,
  newUser,
} from "../controllers/user.js";
import { adminOnly } from "../middlewares/auth.js";

const app = express.Router();

// route - /api/v1/user/new
app.post("/new", (req, res, next) => {
  newUser(req as express.Request<{}, {}, any>, res, next);
});

// route - /api/v1/user/all
app.get("/all", adminOnly, (req, res, next) => {
  getAllUsers(req as express.Request<{}, {}, any>, res, next);
});

// route - /api/v1/user/dynamicID
app.get("/:id", (req, res, next) => {
  getUsers(req as express.Request<{}, {}, any>, res, next);
});

app.delete("/:id", adminOnly, (req, res, next) => { 
  deleteUsers(req as express.Request<{}, {}, any>, res, next);
});

export default app;
