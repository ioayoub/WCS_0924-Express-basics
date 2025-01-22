import express from "express";
import "dotenv/config";
import router from "./router.js";

const app = express();

app.use(express.json())

const port = process.env.APP_PORT;

app.use(router)

app.listen(port, () => console.log(`Server is running on port ${port} 🐢`))