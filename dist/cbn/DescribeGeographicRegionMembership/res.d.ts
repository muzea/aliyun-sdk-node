export interface DescribeGeographicRegionMembershipResponse {
    /**
     * 分页查询时每页显示的条目数。
     * @example `2`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `DC9EB0C9-60AF-4A09-A36C-608F70130274`
     */
    RequestId: string;
    /**
     * 查询页码。
     * @example `10`
     */
    PageNumber: number;
    /**
     * 总条目数。
     * @example `2`
     */
    TotalCount: number;
    RegionIds: {
        /**
         * 地域信息列表。
         */
        RegionId: {
            /**
             * 地域ID。
             * 您可以调用[DescribeChildInstanceRegions](~~132080~~)接口获取地域ID对应的地域信息。
             * @example `us-west-1`
             */
            RegionId: string;
        }[];
    };
}
