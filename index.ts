import express, { Application } from "express";
import routes from "./src/routes";
import "dotenv/config";

const app: Application = express();
const server_port = process.env.PORT || 5555;

try {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use('/api', routes);
  app.listen(server_port, () => console.log(`App running on PORT ${server_port}`));
} catch (error) {
  console.log(error);
}

export default app;