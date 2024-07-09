export interface DescribeRegionsResponse {
    /**
     * 请求ID。
     * @example `F20BBD34-681D-4613-8EFA-259DF510A897`
     */
    RequestId: string;
    Regions: {
        /**
         * 返回Region列表。
         */
        Region: {
            /**
             * Region服务的Endpoint地址。
             * @example `cassandra.aliyuncs.com`
             */
            RegionEndpoint: string;
            /**
             * 地域名称。
             * @example `华东1（杭州）`
             */
            LocalName: string;
            /**
             * 地域ID，如cn-hangzhou。
             * @example `华东1（杭州）`
             */
            RegionId: string;
            Zones: {
                /**
                 * 可用区列表。
                 */
                Zone: {
                    /**
                     * 可用区ID。
                     * @example `cn-hangzhou-b`
                     */
                    Id: string;
                }[];
            };
        }[];
    };
}
