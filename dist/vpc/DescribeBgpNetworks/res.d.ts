export interface DescribeBgpNetworksResponse {
    /**
     * 分页查询时每页的行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `6F513A15-669F-419D-B511-08A85292059B`
     */
    RequestId: string;
    /**
     * 列表的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 已宣告的BGP网络总数。
     * @example `2`
     */
    TotalCount: number;
    BgpNetworks: {
        /**
         * BGP网络。
         */
        BgpNetwork: {
            /**
             * 已宣告的BGP网络状态。
             * @example `Enabled`
             */
            Status: string;
            /**
             * VPC的ID。
             * @example `vpc-bp1qpo0kug3a2*****`
             */
            VpcId: string;
            /**
             * 已宣告的BGP网络的网段。
             * @example `10.1.XX.XX/24`
             */
            DstCidrBlock: string;
            /**
             * 边界路由器ID。
             * @example `vrt-bp1lhl0taikrteen8****`
             */
            RouterId: string;
        }[];
    };
}
