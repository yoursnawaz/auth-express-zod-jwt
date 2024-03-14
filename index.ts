import express, { Application } from "express";
import routes from "./src/routes";
import "dotenv/config";

const app: Application = express();
const server_port = process.env.PORT || 5555;

app.use("/api", routes);

app.listen(3000, () => console.log(`App running on PORT ${server_port}`));
