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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchPools = fetchPools;
const axios_1 = __importDefault(require("axios"));
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
function fetchPools(params) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get('https://api.mevx.io/api/v1/pools', {
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
        }
        catch (error) {
            console.error('Error fetching pools:', error);
            return undefined;
        }
    });
}
