export interface Pool {
    // Define relevant fields according to the API response, for example:
    id: string;
    chain: string;
    baseToken: string;
    tradeCount: number;
    marketCap: number;
    updatedAt: number;
    // add more fields as needed
}

export interface ApiResponse {
    data: Pool[];
    // add metadata fields if present
}

export interface FetchPoolsParams {
  chain?: string;
  limit?: number;
  offset?: number;
  tradeCountGte?: number;
  baseTokenNeq?: string;
  marketCapLte?: number;
  interval?: string;
  orderBy?: string;
  updatedAtGte?: number;
  context?: string;
}