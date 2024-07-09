export interface DescribeRegionsResponse {
    /**
     * 请求ID。
     * @example `611CB80C-B6A9-43DB-9E38-0B0AC3D9B58F`
     */
    RequestId: string;
    Regions: {
        /**
         * 可用地域的集合。
         */
        Region: {
            /**
             * 地域名称。
             * @example `华东1（杭州）`
             */
            LocalName: string;
            /**
             * 地域服务的终端节点。
             * @example `privatelink.cn-hangzhou.aliyuncs.com`
             */
            RegionEndpoint: string;
            /**
             * 地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
        }[];
    };
}
