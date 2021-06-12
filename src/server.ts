import express from "express";
import multer from "multer";

import { router } from "./routes";

const app = express();
app.use(express.json());
app.use(router);
app.use(multer);

app.listen(3333, () => console.log("Server is running"));

export default app;
