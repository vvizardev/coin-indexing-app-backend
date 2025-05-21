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
const TrendingRoute = (0, express_1.Router)();
TrendingRoute.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const msgId = yield (0, utils_1.requestAPIMsg)({
        url: "/api/v1/trending",
        method: "GET",
    });
    console.log(req.query);
    const { limit, offset, orderBy, orderDirection } = req.query;
    const data = yield (0, api_1.fetchPools)({
        chain: 'sol',
        limit: limit,
        offset: offset,
        tradeCountGte: 1000,
        baseTokenNeq: 'So11111111111111111111111111111111111111112',
        marketCapLte: 1000000000,
        interval: '24h',
        orderBy: 'tradeCount desc',
        context: 'trending',
    });
    // createdAt
    // priceChange
    yield (0, utils_1.respondAPIMsg)(msgId, {
        message: data === null || data === void 0 ? void 0 : data.length,
    });
    res.json({ message: data });
}));
exports.default = TrendingRoute;
