"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const yamljs_1 = __importDefault(require("yamljs"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const http_1 = __importDefault(require("http"));
const config_1 = require("./config");
const TrendingRoute_1 = __importDefault(require("./routes/TrendingRoute"));
const TrackerRoute_1 = __importDefault(require("./routes/TrackerRoute"));
const swaggerPath = path_1.default.resolve(__dirname, '../swagger.yaml');
const swaggerDocument = yamljs_1.default.load(swaggerPath);
const CSS_URL = "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css";
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ limit: '50mb', extended: true }));
app.use(body_parser_1.default.json({ limit: '50mb' }));
app.use(body_parser_1.default.urlencoded({ limit: '50mb', extended: true }));
app.use("/api/v1/trending", TrendingRoute_1.default);
app.use("/api/v1/tracker", TrackerRoute_1.default);
// Set up Swagger
app.use("/", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocument, {
    explorer: true,
    customCssUrl: CSS_URL,
}));
const server = http_1.default.createServer(app);
server.listen(config_1.PORT, () => {
    console.log(`Server is running on http://localhost:${config_1.PORT}/`);
});
