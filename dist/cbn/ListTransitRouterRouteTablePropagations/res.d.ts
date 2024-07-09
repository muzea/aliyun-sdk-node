export interface ListTransitRouterRouteTablePropagationsResponse {
    /**
     * 分批次查询时，下一次查询的Token。
     * @example `dd20****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `04C81E0D-945E-4D61-A561-3DEA322F243B`
     */
    RequestId: string;
    /**
     * 总条目数。
     * @example `2`
     */
    TotalCount: number;
    /**
     * 分批次查询时，每次显示的条目数。
     * @example `50`
     */
    MaxResults: number;
    /**
     * 路由学习关系信息列表。
     */
    TransitRouterPropagations: {
        /**
         * 网络实例连接ID。
         * @example `tr-attach-vx6iwhjr1x1j78****`
         */
        TransitRouterAttachmentId: string;
        /**
         * 路由学习关系状态。
         * - **Enabling**：加载中。
         * - **Disabling**：卸载中。
         * - **Active**：可用。
         * @example `Active`
         */
        Status: string;
        /**
         * 网络实例类型。
         * - **VPC**：专有网络实例。
         * - **VBR**：边界路由器实例。
         * - **TR**：转发路由器实例。
         * - **VPN**：VPN连接。
         * @example `VPC`
         */
        ResourceType: string;
        /**
         * 网络实例ID。
         * @example `vpc-bp1h8vbrbcgohcju5****`
         */
        ResourceId: string;
        /**
         * 企业版转发路由器路由表ID。
         * @example `vtb-bp1dudbh2d5na6b50****`
         */
        TransitRouterRouteTableId: string;
    }[];
}
