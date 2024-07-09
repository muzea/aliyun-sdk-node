export interface ListRegionsResponse {
    /**
     * 请求id
     * @example `2DCFA69E-A161-512D-99A7-108022580719`
     */
    RequestId: string;
    /**
     * 地域信息。
     */
    Regions: {
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 地域名称。
         * @example `华东1（杭州）`
         */
        LocalName: string;
    }[];
}
