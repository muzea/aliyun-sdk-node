export interface ListTransitRouterRouteTableAssociationsResponse {
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `a415****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `F6B1D9AB-176D-4399-801D-8BC576F4EB0D`
     */
    RequestId: string;
    /**
     * 列表条目数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 分批次查询时每次显示的条目数。
     * @example `50`
     */
    MaxResults: number;
    /**
     * 关联转发关系信息列表。
     */
    TransitRouterAssociations: {
        /**
         * 网络实例连接ID。
         * @example `tr-attach-nls9fzkfat8934****`
         */
        TransitRouterAttachmentId: string;
        /**
         * 关联转发的状态。
         * - **Active**：可用。
         * - **Associating**：加载中。
         * - **Dissociating**：卸载中。
         * - **Deleted**：已卸载。
         * @example `Associating`
         */
        Status: string;
        /**
         * 下一跳资源类型。
         * - **VPC**：专有网络实例。
         * - **VBR**：边界路由器实例。
         * - **TR**：转发路由器实例。
         * - **VPN**：VPN连接。
         * @example `VPC`
         */
        ResourceType: string;
        /**
         * 下一跳资源ID。
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
