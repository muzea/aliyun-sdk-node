export interface DescribeRegionsResponse {
    /**
     * 请求ID。
     * @example `2B51751B-F837-49AA-8EF3-B2B10703****`
     */
    RequestId: string;
    /**
     * 地域信息集合。
     */
    Regions: {
        /**
         * 指定地域信息。
         */
        Region: {
            /**
             * 地域对应的Endpoint。
             * @example `dfs.cn-hangzhou.aliyuncs.com`
             */
            RegionEndpoint: string;
            /**
             * 地域名称。
             * @example `华东1（杭州）`
             */
            LocalName: string;
            /**
             *
             * 区域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
        }[];
    };
}
