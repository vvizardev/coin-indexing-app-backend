import { Router } from "express";
import { requestAPIMsg } from "../../utils";
import { fetchTrendingTokens, fetchPools, fetchTokensByVolume, fetchTokensMultiAll, fetchTokensLatest, fetchTokensGraduated, fetchTokenDetails } from "../../api";
import axios from "axios";

const TrackerRoute = Router();

TrackerRoute.get('/trending', async (req: any, res: any) => {
    const timeframe = req.query.timeframe || "24h";
    await requestAPIMsg({
        url: "/api/v1/tracker/trending",
        method: "GET",
    })

    const tokens = await fetchTrendingTokens(timeframe);
    res.json(tokens);
});

TrackerRoute.get('/tokens/volume', async (req: any, res: any) => {
    const timeframe = req.query.timeframe || "24h";
    await requestAPIMsg({
        url: "/api/v1/tracker/tokens/volume",
        method: "GET",
    })

    const tokens = await fetchTokensByVolume(timeframe);
    res.json(tokens);
});

TrackerRoute.get("/tokens/multi", async (req: any, res: any) => {
    await requestAPIMsg({
        url: "/api/v1/tracker/tokens/multi",
        method: "GET",
    });

    const tokens = await fetchTokensMultiAll();
    res.json(tokens.graduated);
});


TrackerRoute.get("/tokens/latest", async (req: any, res: any) => {
    const page = req.query.page || 0;
    await requestAPIMsg({
        url: "/api/v1/tracker/tokens/latest",
        method: "GET",
    });

    const tokens = await fetchTokensLatest(page);
    res.json(tokens);
});


TrackerRoute.get("/tokens/graduated", async (req: any, res: any) => {
    await requestAPIMsg({
        url: "/api/v1/tracker/tokens/graduated",
        method: "GET",
    });

    const tokens = await fetchTokensGraduated();
    res.json(tokens);
});

TrackerRoute.get("/tokens/:address", async (req: any, res: any) => {
    const address = req.params.address;
    console.log("🚀 ~ TrackerRoute.get ~ address:", address)
    await requestAPIMsg({
        url: `/api/v1/tracker/tokens/${address}`,
        method: "GET",
    });

    try {
        const tokenInfo = await fetchTokenDetails(address);
        res.json(tokenInfo);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch token' });
    }
})

export default TrackerRoute;
