import express, { Request, Response } from "express";
const app = express();

// Add middleware and routes here
// For example:
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, Pixt!");
});

export default app;
