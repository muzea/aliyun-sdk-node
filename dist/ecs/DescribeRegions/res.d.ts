export interface DescribeRegionsResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    Regions: {
        /**
         * 地域信息集合。
         */
        Region: {
            /**
             *  集群是否售罄。可能值：
             * - available
             * - soldOut
             * @example `available`
             */
            Status: string;
            /**
             * 地域对应的接入地址（Endpoint）。
             * @example `ecs.aliyuncs.com`
             */
            RegionEndpoint: string;
            /**
             * 地域名称。
             * @example `China (Qingdao)`
             */
            LocalName: string;
            /**
             * 地域ID。
             * @example `cn-qingdao-et2-bo1`
             */
            RegionId: string;
        }[];
    };
}
