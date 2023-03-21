import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan(":method :url :status :response-time ms"));

app.all("*", (_req, res) => {
  res.status(404).json({ message: "Page Not Found!" });
});

export default app;
