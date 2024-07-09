export interface DescribeRegionsResponse {
    /**
     * 请求ID。
     * @example `14D3924C-4FD8-4EE9-9B34-DA949D104F42`
     */
    RequestId: string;
    Regions: {
        /**
         * 返回Region列表。
         */
        Region: {
            /**
             * Region服务的Endpoint地址。
             * @example `hbase.aliyuncs.com`
             */
            RegionEndpoint: string;
            /**
             * 地域名称。
             * @example `华东1（杭州）`
             */
            LocalName: string;
            /**
             * 地域ID，如cn-hangzhou。
             * @example `cn-hangzhou`
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
