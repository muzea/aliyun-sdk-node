export interface ListGatewayFlowRuleResponse {
    /**
     * 请求ID。
     * @example `0951EBF0-798E-5E0B-8D38-460A14AD****`
     */
    RequestId: string;
    /**
     * Meta返回信息。
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
         * 返回数据。
         */
        Result: {
            /**
             * 路由流控规则ID。
             * @example `549`
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
             * @example `48811`
             */
            RouteId: number;
            /**
             * 路由名称。
             * @example `routeA`
             */
            RouteName: string;
            /**
             * 总体QPS阈值。
             * @example `10`
             */
            Threshold: number;
            /**
             * Web fallback行为类型。
             * 0：返回指定内容
             * 1：跳转到指定页面
             * @example `0`
             */
            BehaviorType: number;
            /**
             * 编码类型。
             * 0：普通文本
             * 1：JSON
             * @example `0`
             */
            BodyEncoding: number;
            /**
             * Http状态码。
             * @example `429`
             */
            ResponseStatusCode: number;
            /**
             * Http返回文本。
             * @example `text`
             */
            ResponseContentBody: string;
            /**
             * 跳转地址。
             * @example `www.******.com`
             */
            ResponseRedirectUrl: string;
            /**
             * 是否开启。
             * 0：不开启。
             * 1：开启。
             * @example `0`
             */
            Enable: number;
        }[];
        /**
         * 分页数据集合。
         */
        Results: {
            /**
             * 路由流控规则ID。
             * @example `549`
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
             * @example `48811`
             */
            RouteId: number;
            /**
             * 路由名称。
             * @example `routeA`
             */
            RouteName: string;
            /**
             * 总体QPS阈值。
             * @example `10`
             */
            Threshold: number;
            /**
             * 统计持续时间。
             * @example `10`
             */
            StatDurationMs: number;
            /**
             * 阈值转化模式。
             * 0：单机。
             * 1：集群。
             * 2：集群转单机。
             * @example `0`
             */
            LimitMode: number;
            /**
             * Web fallback行为类型。
             * 0：返回指定内容
             * 1：跳转到指定页面
             * @example `0`
             */
            BehaviorType: number;
            /**
             * 编码类型。
             * 0：普通文本
             * 1：JSON
             * @example `0`
             */
            BodyEncoding: number;
            /**
             * Http状态码。
             * @example `429`
             */
            ResponseStatusCode: number;
            /**
             * Http返回文本。
             * @example `text`
             */
            ResponseContentBody: string;
            /**
             * 跳转地址。
             * @example `www.******.com`
             */
            ResponseRedirectUrl: string;
            /**
             * 自定义header，输入为key-value键值对。
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
             * 筛选规则id。
             */
            IdList: number[];
        }[];
    };
}
