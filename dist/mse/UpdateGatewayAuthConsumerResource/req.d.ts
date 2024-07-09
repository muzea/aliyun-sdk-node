export interface UpdateGatewayAuthConsumerResourceRequest {
    /**
     * UpdateGatewayAuthConsumerResource
     * @example `gw-3f97e2989c344f35ab3fd62b19f1****`
     */
    "GatewayUniqueId": string;
    /**
     * 网关鉴权消费者ID。
     * @example `2`
     */
    "ConsumerId": number;
    /**
     * 资源列表。
     */
    "ResourceList"?: {
        /**
         * 路由ID。
         * @example `7816`
         */
        RouteId: number;
        /**
         * 路由名称。
         * @example `helo`
         */
        RouteName: string;
    }[];
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
