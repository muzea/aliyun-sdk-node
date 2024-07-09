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
             * 地域服务的Endpoint。
             * @example `vpc.aliyuncs.com`
             */
            RegionEndpoint: string;
            /**
             * 地域名称。
             * @example `华北 1`
             */
            LocalName: string;
            /**
             * 地域ID。
             * @example `cn-qingdao`
             */
            RegionId: string;
        }[];
    };
}
