export interface DescribeRegionsResponse {
    /**
     * 请求ID。
     * @example `CEF72CEB-54B6-4AE8-B225-F876FF7BA984`
     */
    RequestId: string;
    /**
     * 地域列表。
     */
    Regions: {
        /**
         * 地域名称。
         * @example `China (Hangzhou)`
         */
        LocalName: string;
        /**
         * 地域服务的Endpoint地址。
         * @example `nlb.cn-hangzhou.aliyuncs.com`
         */
        RegionEndpoint: string;
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
    }[];
}
