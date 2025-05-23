"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const utils_1 = require("../../utils");
const api_1 = require("../../api");
const TrackerRoute = (0, express_1.Router)();
TrackerRoute.get('/trending', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const timeframe = req.query.timeframe || "24h";
    yield (0, utils_1.requestAPIMsg)({
        url: "/api/v1/tracker/trending",
        method: "GET",
    });
    const tokens = yield (0, api_1.fetchTrendingTokens)(timeframe);
    res.json(tokens);
}));
TrackerRoute.get('/tokens/volume', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const timeframe = req.query.timeframe || "24h";
    yield (0, utils_1.requestAPIMsg)({
        url: "/api/v1/tracker/tokens/volume",
        method: "GET",
    });
    const tokens = yield (0, api_1.fetchTokensByVolume)(timeframe);
    res.json(tokens);
}));
TrackerRoute.get("/tokens/multi", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, utils_1.requestAPIMsg)({
        url: "/api/v1/tracker/tokens/multi",
        method: "GET",
    });
    const tokens = yield (0, api_1.fetchTokensMultiAll)();
    res.json(tokens.graduated);
}));
TrackerRoute.get("/tokens/latest", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const page = req.query.page || 0;
    yield (0, utils_1.requestAPIMsg)({
        url: "/api/v1/tracker/tokens/latest",
        method: "GET",
    });
    const tokens = yield (0, api_1.fetchTokensLatest)(page);
    res.json(tokens);
}));
TrackerRoute.get("/tokens/graduated", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, utils_1.requestAPIMsg)({
        url: "/api/v1/tracker/tokens/graduated",
        method: "GET",
    });
    const tokens = yield (0, api_1.fetchTokensGraduated)();
    res.json(tokens);
}));
exports.default = TrackerRoute;
