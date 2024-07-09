export interface DescribeRegionsResponse {
    /**
     * 查询到的地域数量。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `A70BEE5D-76D3-49FB-B58F-1F398211****`
     */
    RequestId: string;
    /**
     * 每页包含的地域数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    Regions: {
        /**
         * 地域信息集合。
         */
        Region: {
            /**
             * 地域名称。
             * @example `East China 1`
             */
            LocalName: string;
            /**
             * 地域对应的接入地址（Endpoint）。
             * @example `nas.cn-hangzhou.aliyuncs.com`
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
