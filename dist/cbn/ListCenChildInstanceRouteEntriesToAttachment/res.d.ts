export interface ListCenChildInstanceRouteEntriesToAttachmentResponse {
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `530BC816-F575-412A-AAB2-435125D26328`
     */
    RequestId: string;
    /**
     * 路由条目的详细信息。
     */
    RouteEntry: {
        /**
         * 云企业网实例ID。
         * @example `cen-9adwg6ghpq8oq4dp7q`
         */
        CenId: string;
        /**
         * 网络实例连接ID。
         * @example `tr-attach-y463sghkkv1loe****`
         */
        TransitRouterAttachmentId: string;
        /**
         * 路由条目的状态。取值：
         * - **Available**：可用。
         * - **Pending**：配置中。
         * - **Modifying**：修改中。
         * @example `Available`
         */
        Status: string;
        /**
         * 路由托管的类型。如果该字段为空，即表示该路由没有被托管。取值：TR，表示托管类型为转发路由器类型。
         * @example `TR`
         */
        ServiceType: string;
        /**
         * 路由条目的目标网段。
         * @example `10.0.0.0/8`
         */
        DestinationCidrBlock: string;
        /**
         * 网络实例的路由表ID。
         * @example `vtb-bp1tlaj1c4nxr2t3e****`
         */
        ChildInstanceRouteTableId: string;
    }[];
}
