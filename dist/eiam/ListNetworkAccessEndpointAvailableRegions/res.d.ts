export interface ListNetworkAccessEndpointAvailableRegionsResponse {
    /**
     * 请求ID。
     * @example `0441BD79-92F3-53AA-8657-F8CE4A2B912A`
     */
    RequestId: string;
    /**
     * 可用地域集合。
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
