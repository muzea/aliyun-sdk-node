export interface DescribeRegionsResponse {
    /**
     * 请求ID。
     * @example `1CBAFFAB-B697-4049-A9B1-67E1FC5F****`
     */
    RequestId: string;
    /**
     * 地域信息数组。
     */
    Regions: {
        /**
         * 地域对应的Endpoint。
         * @example `ecd.cn-hangzhou.aliyuncs.com`
         */
        RegionEndpoint: string;
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 地域的展示名，根据当前语言环境转换。
         * @example `华东1（杭州）`
         */
        LocalName: string;
    }[];
}
