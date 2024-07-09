export interface DescribeRegionsResponse {
    /**
     * 请求ID。
     * @example `AF7D4DCE-0776-47F2-A9B2-6FB85A87AA60`
     */
    RequestId: string;
    Regions: {
        /**
         * 地域列表。
         */
        Region: {
            /**
             * 地域的展示名，根据当前语言环境转换。
             * @example `华北2（北京）`
             */
            LocalName: string;
            /**
             * 地域的名称。
             * @example `华北2（北京）`
             */
            RegionName: string;
            /**
             * Region服务的Endpoint地址。
             * @example `pvtz.aliyuncs.com`
             */
            RegionEndpoint: string;
            /**
             *
             * 地域ID。
             * @example `cn-beijing`
             */
            RegionId: string;
        }[];
    };
}
