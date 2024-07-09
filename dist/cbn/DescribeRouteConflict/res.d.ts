export interface DescribeRouteConflictResponse {
    /**
     * 分页查询时每页显示的条目数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `EE3A2CC7-41F1-58DB-8306-CFC99D9C747B`
     */
    RequestId: string;
    /**
     * 查询页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 总条目数。
     * @example `1`
     */
    TotalCount: number;
    RouteConflicts: {
        /**
         * 产生冲突的路由条目的信息。
         */
        RouteConflict: {
            /**
             * 路由条目产生冲突的原因。
             * - **conflict**：路由条目的目标网段相同造成的冲突。
             *
             * - **overflow**：其他网络实例路由表的路由条目数量超出限制造成的冲突。
             * @example `conflict`
             */
            Status: string;
            /**
             * 产生冲突的路由条目的目标网段。
             * @example `172.16.0.0/16`
             */
            DestinationCidrBlock: string;
            /**
             * 产生路由条目冲突的对端的网络实例ID。
             * @example `ccn-0q3b7oviikmm9h****`
             */
            InstanceId: string;
            /**
             * 产生路由条目冲突的对端的网络实例类型。
             * - **VPC**：专有网络。
             * - **VBR**：边界路由器。
             * - **CCN**：云连接网。
             * @example `CCN`
             */
            InstanceType: string;
            /**
             * 产生路由条目冲突的对端的网络实例所属地域ID。
             * @example `ccn-cn-shanghai`
             */
            RegionId: string;
        }[];
    };
}
