export interface ListTransitRouterRouteTablePropagationsRequest {
    /**
     * 分批次查询时，每次显示的条目数。默认值为**50**。
     * @example `50`
     */
    "MaxResults"?: number;
    /**
     * 分批次查询时，下一次查询的Token。
     * @example `dd20****`
     */
    "NextToken"?: string;
    /**
     * 企业版转发路由器路由表ID。
     * @example `vtb-bp1dudbh2d5na6b50****`
     */
    "TransitRouterRouteTableId": string;
    /**
     * 网络实例连接ID。
     * @example `tr-attach-vx6iwhjr1x1j78****`
     */
    "TransitRouterAttachmentId"?: string;
    /**
     * 网络实例ID。
     * @example `vpc-bp1h8vbrbcgohcju5****`
     */
    "TransitRouterAttachmentResourceId"?: string;
    /**
     * 网络实例类型。
     * - **VPC**：专有网络实例。
     * - **VBR**：边界路由器实例。
     * - **TR**：转发路由器实例。
     * - **VPN**：VPN连接。
     * @example `VPC`
     */
    "TransitRouterAttachmentResourceType"?: string;
    /**
     * 路由学习关系状态。
     * - **Active**：可用。
     * - **Enabling**：加载中。
     * - **Disabling**：卸载中。
     * @example `Active`
     */
    "Status"?: string;
}
