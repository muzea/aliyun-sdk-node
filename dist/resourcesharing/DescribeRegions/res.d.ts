export interface DescribeRegionsResponse {
    /**
     * 请求ID。
     * @example `0D64A198-5842-4570-8E26-5E540CDC84CD`
     */
    RequestId: string;
    /**
     * 地域信息。
     */
    Regions: {
        /**
         * 地域的接入地址。
         * @example `resourcesharing.cn-hangzhou.aliyuncs.com`
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
