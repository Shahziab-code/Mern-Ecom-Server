import express, { ErrorRequestHandler } from "express";
import { connectDB } from "./utils/features.js";
import { errorMiddleware } from "./middlewares/error.js";
import NodeCache from "node-cache";
import { config } from "dotenv";
import morgan from "morgan";
import Stripe from "stripe";
import cors from "cors";

// Importing Routes
import userRoute from "./routers/user.js";
import productRoute from "./routers/products.js";
import orderRoute from "./routers/order.js";
import paymentRoute from "./routers/payment.js";
import dashboradRoute from "./routers/stats.js";

config({
  path: "./.env",
});
const port = process.env.PORT || 4000;
const mongoURI = process.env.MONGO_URI || "";
const stripeKey = process.env.STRIPE_KEY || "";

connectDB(mongoURI);

export const stripe = new Stripe(stripeKey);
export const myCache = new NodeCache();

const app = express();

// Middleware
app.use(express.json()); // Add this if you're handling JSON requests
app.use(morgan("dev"));
app.use(cors());

// Using Routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/product", productRoute);
app.use("/api/v1/order", orderRoute);
app.use("/api/v1/payment", paymentRoute);
app.use("/api/v1/dashboard", dashboradRoute);

// Error Middleware - Now properly typed
app.use("/uploads", express.static("uploads"));
app.use(errorMiddleware as ErrorRequestHandler);

app.get("/", (req, res) => {
  res.send("API working with /api/v1");
});

app.listen(port, () => {
  console.log(`Server is working on http://localhost:${port}`);
});
