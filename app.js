import express from "express";

import aggregatorRoutes from "./routes/aggregatorRoutes.js";
import mockApiRoutes from "./routes/mockApiRoutes.js";

const app = express();

app.use(express.json());

app.use("/api", aggregatorRoutes);

// Mock APIs
app.use("/api", mockApiRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});