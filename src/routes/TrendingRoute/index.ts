import { Router } from "express";
import { requestAPIMsg, respondAPIMsg } from "../../utils";
import { fetchTrendingTokens, fetchPools } from "../../api";
import axios from "axios";

const TrendingRoute = Router();

TrendingRoute.get('/', async (req: any, res: any) => {
    const msgId = await requestAPIMsg({
        url: "/api/v1/trending",
        method: "GET",
    })

    const { limit, offset, orderBy, orderDirection } = req.query

    // const data = await fetchTrendingTokens();

    const data = await fetchPools({
        chain: 'sol',
        limit: limit,
        offset: offset,
        tradeCountGte: 1000,
        baseTokenNeq: 'So11111111111111111111111111111111111111112',
        marketCapLte: 1000000000,
        interval: '24h',
        orderBy: 'tradeCount desc',
        context: 'trending',
    })
    res.json(data);
});


export default TrendingRoute;
