export interface DescribeRegionsResponse {
    /**
     * 请求ID。
     * @example `1651FBB6-4FBF-49FF-A9F5-DF5D696C7EC6`
     */
    RequestId: string;
    Regions: {
        /**
         * 地域列表。
         */
        Region: {
            /**
             * 地域服务的终端节点地址。
             * @example `slb.aliyuncs.com`
             */
            RegionEndpoint: string;
            /**
             * 地域名称。
             * @example `华北2（北京）`
             */
            LocalName: string;
            /**
             * 地域ID。
             * @example `cn-beijing`
             */
            RegionId: string;
        }[];
    };
}
