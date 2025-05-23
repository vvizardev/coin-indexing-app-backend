import express from 'express';
import bodyParser from "body-parser";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import cors from "cors";
import path from 'path';
import http from 'http';
import { PORT } from './config';
import trendingRoute from './routes/TrendingRoute';
import TrackerRoute from './routes/TrackerRoute';

const swaggerPath = path.resolve(__dirname, '../swagger.yaml');
const swaggerDocument: any = YAML.load(swaggerPath);

const CSS_URL = "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css"

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use("/api/v1/trending", trendingRoute);
app.use("/api/v1/tracker", TrackerRoute);

// Set up Swagger
app.use(
  "/",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, {
    explorer: true, 
    customCssUrl: CSS_URL,
  })
);

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/`);
});