export interface ListCenChildInstanceRouteEntriesToAttachmentRequest {
    /**
     * 分批次查询时，每次显示的条目数。默认值为**20**。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的NextToken值。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    "NextToken"?: string;
    /**
     * 云企业网实例ID。
     * @example `cen-dc4vwznpwbobrl****`
     */
    "CenId"?: string;
    /**
     * 网络实例的路由表ID。
     * @example `vtb-bp174d1gje79u1g4t****`
     */
    "ChildInstanceRouteTableId": string;
    /**
     * 网络实例连接ID。
     * @example `tr-attach-r6g0m3epjehw57****`
     */
    "TransitRouterAttachmentId": string;
    /**
     * 目标网段过滤。
     */
    "RouteFilter"?: {
        /**
         * 路由匹配值模式。
         * - **prefix-exact-match**：完全匹配
         * @example `prefix-exact-match`
         */
        Key: string;
        /**
         * 目标网段列表。
         */
        Value: string[];
    }[];
    /**
     * 路由托管的类型。如果该字段为空，即表示该路由没有被托管。取值：TR，表示托管类型为转发路由器类型。
     * @example `TR`
     */
    "ServiceType"?: string;
}
