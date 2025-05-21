import axios from "axios";
import { ApiResponse, FetchPoolsParams, Pool } from "../types/pools";

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