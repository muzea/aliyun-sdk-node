export interface ListGatewayServiceRequest {
    /**
     * 页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页大小。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 排序属性。
     * @example `GmtCreate`
     */
    "OrderItem"?: string;
    /**
     * 排序。
     * @example `false`
     */
    "DescSort"?: boolean;
    /**
     * 过滤条件，格式为{"key1":"value1"}。
     */
    "FilterParams"?: {
        /**
         * 服务名。
         * @example `test`
         */
        Name: string;
        /**
         * 来源类型。
         * @example `MSE`
         */
        SourceType: string;
        /**
         * 命名空间。
         * @example `public`
         */
        Namespace: string;
        /**
         * 分组。
         * @example `test`
         */
        GroupName: string;
        /**
         * 网关唯一标识ID。
         * @example `gw-5017305290e14centbrveca****`
         */
        GatewayUniqueId: string;
        /**
         * 服务协议。
         * - HTTP
         * - HTTPS
         * - HTTP2
         * - GRPC
         * - DUBBO
         * @example `HTTP`
         */
        ServiceProtocol: string;
    };
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
