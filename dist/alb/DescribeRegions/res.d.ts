export interface DescribeRegionsResponse {
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
         * 地域服务的Endpoint地址。
         * @example `alb.cn-hangzhou.aliyuncs.com`
         */
        RegionEndpoint: string;
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
    }[];
    /**
     * 请求ID。
     * @example `593B0448-D13E-4C56-AC0D-FDF0FDE0E9A3`
     */
    RequestId: string;
}
