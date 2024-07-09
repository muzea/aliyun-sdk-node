export interface ListRegionsResponse {
    /**
     * 请求ID。
     * @example `1CBAFFAB-B697-4049-A9B1-67E1FC5F****`
     */
    RequestId: string;
    /**
     * 地域ID列表。
     */
    RegionModels: {
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        regionId: string;
    }[];
}
