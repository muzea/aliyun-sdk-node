export interface DescribeEnsRouteEntryListResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 路由条目信息。
     */
    RouteEntrys: {
        /**
         * 路由条目的状态
         * @example `Available`
         */
        Status: string;
        /**
         * 路由条目的类型
         * @example `Custom`
         */
        Type: string;
        /**
         * 路由条目的描述信息。
         * @example `测试`
         */
        Description: string;
        /**
         * 路由条目的名称。
         * @example `test0`
         */
        RouteEntryName: string;
        /**
         * 路由条目的目标网段。
         * @example `101.0.45.0/24`
         */
        DestinationCidrBlock: string;
        /**
         * 路由条目的ID。
         * @example `rte-2zeksx7h436f5unk349m1`
         */
        RouteEntryId: string;
        /**
         * 路由表ID。
         * @example `vtb-uf62p9o5cn35fi8xgurnm`
         */
        RouteTableId: string;
        /**
         * 下一跳信息。
         */
        NextHops: {
            /**
             * 下一跳实例ID。
             * @example `i-bp1111yup9991890woxq`
             */
            NextHopId: string;
            /**
             * 下一跳类型。
             * @example `Instance`
             */
            NextHopType: string;
        }[];
    }[];
    /**
     * 当前查询页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页查询时每页的行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 列表条目数。
     * @example `7`
     */
    TotalCount: number;
}
