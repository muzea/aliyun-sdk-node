export interface ListGatewayIsolationRuleResponse {
    /**
     * 请求ID。
     * @example `6F025D43-8632-5716-AE9B-7EDDF16C****`
     */
    RequestId: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 实例列表的页码
         * @example `1`
         */
        PageNumber: number;
        /**
         * 查询到的实例总数
         * @example `1`
         */
        TotalSize: number;
        /**
         * 输入时设置的每页行数
         * @example `100`
         */
        PageSize: number;
        /**
         * 返回结果。
         */
        Result: {
            /**
             * 并发规则ID。
             * @example `358`
             */
            Id: number;
            /**
             * 网关ID。
             * @example `14407`
             */
            GatewayId: number;
            /**
             * 网关唯一标识ID。
             * @example `gw-e2d226bba4b2445c9e29fa7f8216****`
             */
            GatewayUniqueId: string;
            /**
             * 路由ID。
             * @example `52853`
             */
            RouteId: number;
            /**
             * 路由名称。
             * @example `routeName`
             */
            RouteName: string;
            /**
             * 总体并发数阈值。
             * @example `100`
             */
            MaxConcurrency: number;
            /**
             * 阈值转化模式。
             * 0：单机
             * 1：集群
             * 2：集群转单机
             * @example `0`
             */
            LimitMode: number;
            /**
             * Web fallback行为类型。
             * 0：返回指定内容。
             * 1：跳转到指定页面。
             * @example `0`
             */
            BehaviorType: number;
            /**
             * 编码类型。
             * 0：普通文本。
             * 1：JSON。
             * @example `0`
             */
            BodyEncoding: number;
            /**
             * HTTP状态码。
             * @example `429`
             */
            ResponseStatusCode: number;
            /**
             * HTTP返回文本。
             * @example `text`
             */
            ResponseContentBody: string;
            /**
             * 跳转地址。
             * @example `www.******.com`
             */
            ResponseRedirectUrl: string;
            /**
             * 自定义header，输入为key-value键值对
             * @example `key:value`
             */
            ResponseAdditionalHeaders: string;
            /**
             * 是否开启。
             * 0：不开启。
             * 1：开启。
             * @example `0`
             */
            Enable: number;
            /**
             * 筛选规则id
             */
            IdList: number[];
        }[];
        /**
         * 返回结果集合。
         */
        Results: {
            /**
             * 并发规则ID。
             * @example `358`
             */
            Id: number;
            /**
             * 网关ID。
             * @example `14407`
             */
            GatewayId: number;
            /**
             * 网关唯一标识ID。
             * @example `gw-e2d226bba4b2445c9e29fa7f8216****`
             */
            GatewayUniqueId: string;
            /**
             * 路由ID。
             * @example `52853`
             */
            RouteId: number;
            /**
             * 路由名称。
             * @example `routeName`
             */
            RouteName: string;
            /**
             * 总体并发数阈值。
             * @example `100`
             */
            MaxConcurrency: number;
            /**
             * 阈值转化类型。
             * 0：单机。
             * 1：集群。
             * 2：单机转集群。
             * @example `1`
             */
            LimitMode: number;
            /**
             * Web fallback行为类型。
             * 0：返回指定内容。
             * 1：跳转到指定页面。
             * @example `0`
             */
            BehaviorType: number;
            /**
             * 编码类型。
             * 0：普通文本。
             * 1：JSON。
             * @example `0`
             */
            BodyEncoding: number;
            /**
             * HTTP状态码。
             * @example `429`
             */
            ResponseStatusCode: number;
            /**
             * HTTP返回文本。
             * @example `text`
             */
            ResponseContentBody: string;
            /**
             * 跳转地址。
             * @example `www.******.com`
             */
            ResponseRedirectUrl: string;
            /**
             * 自定义header，输入为key-value键值对
             * @example `key=value`
             */
            ResponseAdditionalHeaders: string;
            /**
             * 是否开启。
             * 0：不开启。
             * 1：开启。
             * @example `0`
             */
            Enable: number;
            /**
             * 筛选规则id
             */
            IdList: number[];
        }[];
    };
}
