import axios from "axios";
import { ApiResponse, FetchPoolsParams, Pool } from "../types/pools";
import { Client } from "@solana-tracker/data-api";
import { SOLANA_TRACKER_API_KEY, SOLANA_TRACKER_BASE_URL } from "../config";
import { savetojson } from "../utils";

const client = new Client({
    apiKey: SOLANA_TRACKER_API_KEY,
})

// const data = await axios.get('https://api.mevx.io/api/v1/pools', {
//     params: {
//         chain: 'sol',
//         limit: 100,
//         offset: 0,
//         'tradeCount[gte]': 1000,
//         'baseToken[neq]': 'So11111111111111111111111111111111111111112',
//         'marketCap[lte]': 1000000000,
//         interval: '24h',
//         orderBy: 'tradeCount desc',
//         'updatedAt[gte]': 1747832400,
//         context: 'trending',
//     },
// });


export async function fetchPools(params: FetchPoolsParams): Promise<Pool[] | undefined> {
    try {
        const response = await axios.get('https://api.mevx.io/api/v1/pools', {
            params: {
                chain: params.chain,
                limit: params.limit,
                offset: params.offset,
                'tradeCount[gte]': params.tradeCountGte,
                'baseToken[neq]': params.baseTokenNeq,
                'marketCap[lte]': params.marketCapLte,
                interval: params.interval,
                orderBy: params.orderBy,
                'updatedAt[gte]': params.updatedAtGte,
                context: params.context,
            }
        });

        return response.data.pools;
    } catch (error) {
        console.error('Error fetching pools:', error);
        return undefined;
    }
}

export async function fetchTrendingTokens(timeframe: string) {
    try {
        const res = await axios.get(SOLANA_TRACKER_BASE_URL + `/tokens/trending/${timeframe}`, {
            headers: {
                "x-api-key" : SOLANA_TRACKER_API_KEY,
            }
        });
        const tokens = res.data;
        return tokens;
    } catch (error) {
        console.error('Error fetching pools:', error);
        return undefined;
    }
}

export async function fetchTokensByVolume(timeframe: string) {
    try {
        const res = await axios.get(SOLANA_TRACKER_BASE_URL + `/tokens/trending/${timeframe}`, {
            headers: {
                "x-api-key" : SOLANA_TRACKER_API_KEY,
            }
        });
        const tokens = res.data;
        return tokens;
    } catch (error) {
        console.error('Error fetching pools:', error);
        return undefined;
    }
}

export async function fetchTokensMultiAll() {
    try {
        const res = await axios.get(SOLANA_TRACKER_BASE_URL + `/tokens/multi/all`, {
            headers: {
                "x-api-key" : SOLANA_TRACKER_API_KEY,
            }
        });
        const tokens = res.data;
        return tokens;
    } catch (error) {
        console.error('Error fetching pools:', error);
        return undefined;
    }
}

export async function fetchTokensLatest(page: number) {
    try {
        const res = await axios.get(SOLANA_TRACKER_BASE_URL + `/tokens/latest?page=${page}`, {
            headers: {
                "x-api-key" : SOLANA_TRACKER_API_KEY,
            }
        });
        const tokens = res.data;
        return tokens;
    } catch (error) {
        console.error('Error fetching pools:', error);
        return undefined;
    }
}

export async function fetchTokensGraduated() {
    try {
        const res = await axios.get(SOLANA_TRACKER_BASE_URL + `/tokens/multi/graduated`, {
            headers: {
                "x-api-key" : SOLANA_TRACKER_API_KEY,
            }
        });
        const tokens = res.data;
        return tokens;
    } catch (error) {
        console.error('Error fetching pools:', error);
        return undefined;
    }
}

export async function fetchTokenDetails(tokenAddress: string) {
    console.log("🚀 ~ fetchTokenDetails ~ tokenAddress:", tokenAddress)
    try {
        const res = await axios.get(SOLANA_TRACKER_BASE_URL + `/tokens/${tokenAddress}`, {
            headers: {
                "x-api-key" : SOLANA_TRACKER_API_KEY,
            }
        });
        const tokenDetails = res.data;
        return tokenDetails;
    } catch (error) {
        console.error('Error fetching token details:', error);
        return undefined;
    }
}