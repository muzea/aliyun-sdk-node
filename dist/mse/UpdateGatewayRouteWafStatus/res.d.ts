export interface UpdateGatewayRouteWafStatusResponse {
    /**
     * ID of the Request。
     * @example `7466566F-F30F-4A29-965D-3E0AF21D****`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应信息。
     * @example `success`
     */
    Message: string;
    /**
     * 状态码。说明200表示成功。
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
     * 返回数据。
     */
    Data: {
        /**
         * 路由ID。
         * @example `12`
         */
        Id: number;
        /**
         * 消息路由名称。
         * @example `test`
         */
        Name: string;
        /**
         * 网关唯一ID。
         * @example `gw-7ea3da97b96543e19f6c597cd4a9****`
         */
        GatewayUniqueId: string;
        /**
         * 网关ID。
         * @example `102`
         */
        GatewayId: number;
        /**
         * 默认服务ID。
         * @example `1`
         */
        DefaultServiceId: number;
        /**
         * 默认服务名称。
         * @example `test`
         */
        DefaultServiceName: string;
        /**
         * 路由状态。
         * @example `1`
         */
        Status: number;
        /**
         * 创建时间。
         * @example `2022-01-26T09:52:41.000+0000`
         */
        GmtCreate: string;
        /**
         * 修改日期。
         * @example `2022-02-24T06:08:29.230+0000`
         */
        GmtModified: string;
        /**
         * 路由顺序。
         * @example `1`
         */
        RouteOrder: number;
        /**
         * 匹配规则。
         * @example `{\"PathPredicates\":{\"Path\":\"/metas\",\"Type\":\"PRE\",\"IgnoreCase\":false}}`
         */
        Predicates: string;
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
                 * @example `/zookeeper/mmgw/unlogined/common.getBu`
                 */
                Path: string;
                /**
                 * 匹配类型。
                 * @example `PRE`
                 */
                Type: string;
                /**
                 * 是否忽略大小写。
                 * @example `true`
                 */
                IgnoreCase: boolean;
            };
            /**
             * 匹配方法。
             */
            MethodPredicates: string[];
            /**
             * 请求头匹配规则。
             */
            HeaderPredicates: {
                /**
                 * 请求头KEY。
                 * @example `alibo`
                 */
                Key: string;
                /**
                 * 值。
                 * @example `200`
                 */
                Value: string;
                /**
                 * 匹配类型。
                 * @example `PRE`
                 */
                Type: string;
            }[];
            /**
             * 参数匹配规则。
             */
            QueryPredicates: {
                /**
                 * 参数名称。
                 * @example `instanceId`
                 */
                Key: string;
                /**
                 * 匹配值。
                 * @example `test`
                 */
                Value: string;
                /**
                 * 类型。
                 * @example `PRE`
                 */
                Type: string;
            }[];
        };
        /**
         * 域名ID。
         * @example `235`
         */
        DomainId: number;
        /**
         * 域名。
         * @example `nbhamster.com`
         */
        DomainName: string;
        /**
         * 服务。
         * @example `[{\"Percent\":100,\"ServiceId\":126}]`
         */
        Services: string;
        /**
         * 服务。
         */
        RouteServices: {
            /**
             * 服务id。
             * @example `547`
             */
            ServiceId: number;
            /**
             * 服务名称。
             * @example `b-service`
             */
            ServiceName: string;
            /**
             * 权重。
             * @example `80`
             */
            Percent: number;
            /**
             * 服务版本。
             * @example `v1`
             */
            Version: string;
            /**
             * 服务名称。
             * @example `test-aixue-gray`
             */
            Name: string;
            /**
             * 服务来源。
             * @example `K8S`
             */
            SourceType: string;
            /**
             * 命名空间。
             * @example `default`
             */
            Namespace: string;
            /**
             * 服务分组名称。
             * @example `DEFAULT_GROUP`
             */
            GroupName: string;
        }[];
        /**
         * 重写策略信息。
         */
        HTTPRewrite: {
            /**
             * HTTP状态。
             * @example `off`
             */
            Status: string;
            /**
             * HTTP请求路径。
             * @example `/test/client`
             */
            Path: string;
            /**
             * 域名。
             * @example `aliyuncs.com`
             */
            Host: string;
            /**
             * HTTP请求路径类型。
             * @example `PRE`
             */
            PathType: string;
            /**
             * 匹配Pattern。
             * @example `/test`
             */
            Pattern: string;
            /**
             * 替换。
             * @example `test`
             */
            Substitution: string;
        };
        /**
         * Header设置信息。
         */
        HeaderOp: {
            /**
             * 状态。
             * @example `off`
             */
            Status: string;
            /**
             * 设置策略。
             */
            HeaderOpItems: {
                /**
                 * 请求或者响应。
                 * @example `Response`
                 */
                DirectionType: string;
                /**
                 * 操作类型。
                 * @example `Add`
                 */
                OpType: string;
                /**
                 * Header Key。
                 * @example `debug`
                 */
                Key: string;
                /**
                 * 设置值。
                 * @example `test`
                 */
                Value: string;
            }[];
        };
        /**
         * 目标服务类型。
         * @example `Single`
         */
        DestinationType: string;
        /**
         * Mock信息。
         */
        DirectResponse: {
            /**
             * 返回值。
             * @example `200`
             */
            Code: number;
            /**
             * Mock返回值。
             * @example `[{\"key\":\"h68d13466.sqa.eu95\",\"dims\":\"groupName=All}]`
             */
            Body: string;
        };
        /**
         * 跨域配置。
         */
        Cors: {
            /**
             * 状态。
             * @example `off`
             */
            Status: string;
            /**
             * 跨域。
             * @example `*`
             */
            AllowOrigins: string;
            /**
             * 跨域方法。
             * @example `GET,POST,PUT,DELETE,HEAD,OPTIONS,PATCH`
             */
            AllowMethods: string;
            /**
             * 跨域Header。
             * @example `*`
             */
            AllowHeaders: string;
            /**
             * 响应头。
             * @example `*`
             */
            ExposeHeaders: string;
            /**
             * 时间单位。
             * @example `s`
             */
            TimeUnit: string;
            /**
             * 时间数。
             * @example `1`
             */
            UnitNum: number;
            /**
             * 允许携带凭证。
             * @example `true`
             */
            AllowCredentials: boolean;
        };
        /**
         * 超时配置。
         */
        Timeout: {
            /**
             * 时间数。
             * @example `10`
             */
            UnitNum: number;
            /**
             * 时间单位。
             * @example `s`
             */
            TimeUnit: string;
            /**
             * 状态。
             * @example `off`
             */
            Status: string;
        };
        /**
         * 重试配置。
         */
        Retry: {
            /**
             * 给定请求允许的重试次数。
             * @example `1`
             */
            Attempts: number;
            /**
             * 重试条件。
             */
            RetryOn: string[];
            /**
             * HTTP状态码。
             */
            HttpCodes: string[];
            /**
             * 重试状态。
             * @example `on`
             */
            Status: string;
        };
        /**
         * 域名ID列表。
         */
        DomainIdList: number[];
        /**
         * 域名列表。
         */
        DomainNameList: string[];
        /**
         * 重定向配置。
         */
        Redirect: {
            /**
             * 响应码。
             * @example `200`
             */
            Code: number;
            /**
             * 主机。
             * @example `ww.al.c`
             */
            Host: string;
            /**
             * 路径。
             * @example `/`
             */
            Path: string;
        };
        /**
         * 是否开启WAF。
         * @example `0`
         */
        EnableWaf: boolean;
    };
}
