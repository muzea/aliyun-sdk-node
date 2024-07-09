export interface DescribeRegionsResponse {
    /**
     * 请求ID。
     * @example `73F6E6DA-9AE5-5548-9E07-761A554DAF2E`
     */
    RequestId: string;
    /**
     * 地域列表信息。
     */
    Regions: {
        /**
         * 地域对应的接入地址（Endpoint）。
         * @example `hitsdb.cn-hangzhou.aliyuncs.com`
         */
        RegionEndpoint: string;
        /**
         * 地域名称。
         * @example `华东1（杭州）`
         */
        LocalName: string;
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
    }[];
}
