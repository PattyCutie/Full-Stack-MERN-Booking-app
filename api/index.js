import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser"
// Routes
import authRoute from "./routes/auth.js";
import userRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";

const app = express();

dotenv.config();

// mongoDB innicialize
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_SECRET_KEY);
    console.log("Connected to MongoDB !!");
  } catch (error) {
    throw error;
  }
};
//mongoose Connection
mongoose.connection.on("disconnected", () => {
  console.log("Mongoose disconnected !");
});

mongoose.connection.on("connected", () => {
  console.log("Connected to Mongoose!");
});

app.get("/", (req, res) => {
  res.send("Hello Patty");
});

// middlewares
app.use(cookieParser())
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something not right!!";

  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

// port
app.listen(8800, () => {
  connect();
  console.log("Connected to Backend !!! Enjoy Coding !!!");
});
