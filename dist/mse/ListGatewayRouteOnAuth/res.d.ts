export interface ListGatewayRouteOnAuthResponse {
    /**
     * 请求ID。
     * @example `58E06A0A-BD2C-47A0-99C2-B100F353****`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 返回信息。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 响应码。
     * @example `200`
     */
    Code: number;
    /**
     * 请求结果，取值如下：
     * - `true`：请求成功。
     * - `false`：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 数据概览。
     */
    Data: {
        /**
         * 路由ID。
         * @example `12`
         */
        Id: number;
        /**
         * 路由名称。
         * @example `ceshi`
         */
        Name: string;
        /**
         * 网关唯一标识ID。
         * @example `gw-7ea3da97b96543e19f6c597c****`
         */
        GatewayUniqueId: string;
        /**
         * 网关ID。
         * @example `399`
         */
        GatewayId: string;
        /**
         * 路由匹配。
         */
        RoutePredicates: {
            /**
             * 路由匹配。
             */
            PathPredicates: {
                /**
                 * 路径。
                 * @example `/api`
                 */
                Path: string;
                /**
                 * 匹配类型。
                 * @example `PRE`
                 */
                Type: string;
            };
        };
        /**
         * 域名ID。
         * @example `235`
         */
        DomainId: number;
        /**
         * 域名。
         * @example `123.com`
         */
        DomainName: string;
        /**
         * 域名ID列表。
         */
        DomainIdList: number[];
        /**
         * 域名列表。
         */
        DomainNameList: string[];
    }[];
}
