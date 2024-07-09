export interface ListGatewayAuthConsumerResourceRequest {
    /**
     * 网关唯一标识ID。
     * @example `gw-3f97e2989c344f35ab3fd62b19f1****`
     */
    "GatewayUniqueId": string;
    /**
     * 网关鉴权消费者ID。
     * @example `2`
     */
    "ConsumerId": number;
    /**
     * 路由名称。
     * @example `test`
     */
    "RouteName"?: string;
    /**
     * 资源状态：
     * - true：启用
     * - false：停用
     * @example `true`
     */
    "ResourceStatus"?: boolean;
    /**
     * 页码。
     * @example `1`
     */
    "PageNum": string;
    /**
     * 当前页的大小。
     * @example `10`
     */
    "PageSize": string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
