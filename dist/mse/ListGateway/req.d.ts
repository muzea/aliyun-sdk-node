export interface ListGatewayRequest {
    /**
     * 页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页展示实例数。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 订单信息。
     * @example `{}`
     */
    "OrderItem"?: string;
    /**
     * 排序（暂时未使用）。
     * @example `false`
     */
    "DescSort"?: boolean;
    /**
     * 参数信息。
     */
    "FilterParams"?: {
        /**
         * 网关类型。
         * @example `Ingress`
         */
        GatewayType: string;
        /**
         * 网关名称。
         * @example `rutain-test`
         */
        Name: string;
        /**
         * 专有网络。
         * @example `vpc-bp13hhyjntbab7w****`
         */
        Vpc: string;
        /**
         * 网关唯一标识ID。
         * @example `gw-5017305290e14centbrveca****`
         */
        GatewayUniqueId: string;
        /**
         * 实例ID。
         * @example `mse_ingresspre-cn-****`
         */
        InstanceId: string;
        /**
         * 资源标签。
         * @example `[{"key":"tagkey","value":"tagvalue"}]`
         */
        MseTag: string;
        /**
         * 资源组ID。
         * @example `rg-7y2uye*****`
         */
        ResourceGroupId: string;
    };
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
