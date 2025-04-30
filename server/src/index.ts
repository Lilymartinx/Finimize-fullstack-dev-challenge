import express from "express";
import cors from "cors";
import projectionRoutes from "./routes/projection";

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// API routes
app.use("/api", projectionRoutes);

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.listen(PORT, () => {
  console.log(`Find the server at: http://localhost:${PORT}/`);
});

