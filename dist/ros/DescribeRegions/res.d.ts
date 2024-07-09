export interface DescribeRegionsResponse {
    /**
     * 请求ID。
     * @example `59F0F0A0-A637-4292-9B91-251EF5010913`
     */
    RequestId: string;
    /**
     * 地域列表。
     */
    Regions: {
        /**
         * 地域名称。
         * @example `华东1（杭州）`
         */
        LocalName: string;
        /**
         * 地域接入地址。
         * @example `ros.aliyuncs.com`
         */
        RegionEndpoint: string;
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
    }[];
}
