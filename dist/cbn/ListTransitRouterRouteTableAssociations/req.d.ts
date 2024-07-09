export interface ListTransitRouterRouteTableAssociationsRequest {
    /**
     * 分批次查询时每次显示的条目数。默认值：**50**。
     * @example `50`
     */
    "MaxResults"?: number;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的**NextToken**值。
     * @example `a415****`
     */
    "NextToken"?: string;
    /**
     * 企业版转发路由器路由表ID。
     * @example `vtb-bp1dudbh2d5na6b50****`
     */
    "TransitRouterRouteTableId"?: string;
    /**
     * 网络实例连接ID。
     * @example `tr-attach-nls9fzkfat8934****`
     */
    "TransitRouterAttachmentId"?: string;
    /**
     * 下一跳资源ID。
     * @example `vpc-bp1h8vbrbcgohcju5****`
     */
    "TransitRouterAttachmentResourceId"?: string;
    /**
     * 下一跳资源类型。
     * - **VPC**：专有网络实例。
     * - **VBR**：边界路由器实例。
     * - **TR**：转发路由器实例。
     * - **VPN**：VPN连接。
     * @example `VPC`
     */
    "TransitRouterAttachmentResourceType"?: string;
    /**
     * 关联转发的状态。
     * - **Active**：可用。
     * - **Associating**：加载中。
     * - **Dissociating**：卸载中。
     * @example `Active`
     */
    "Status"?: string;
}
