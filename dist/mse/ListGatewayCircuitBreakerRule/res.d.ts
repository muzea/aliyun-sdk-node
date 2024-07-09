export interface ListGatewayCircuitBreakerRuleResponse {
    /**
     * 请求ID。
     * @example `DC34E4A3-5F1C-4E40-86EA-02EDF967****`
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
         * @example `11`
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
             * 熔断规则ID。
             * @example `467`
             */
            Id: number;
            /**
             * 网关ID。
             * @example `11919`
             */
            GatewayId: number;
            /**
             * 网关唯一标识ID。
             * @example `gw-5017305290e14centbrveca****`
             */
            GatewayUniqueId: string;
            /**
             * 路由ID。
             * @example `3091`
             */
            RouteId: number;
            /**
             * 路由名称。
             * @example `routeName`
             */
            RouteName: string;
            /**
             * 阈值模式。
             * 0：慢调用模式。
             * 1：异常模式。
             * @example `0`
             */
            Strategy: number;
            /**
             * 触发熔断百分比。
             * @example `10`
             */
            TriggerRatio: number;
            /**
             * 熔断统计时长。
             * @example `11`
             */
            StatDurationSec: number;
            /**
             * 熔断恢复时长。
             * @example `12`
             */
            RecoveryTimeoutSec: number;
            /**
             * 触发熔断的最小请求数。
             * @example `10`
             */
            MinRequestAmount: number;
            /**
             * 慢调用模式下慢调用阈值。
             * @example `14`
             */
            MaxAllowedMs: number;
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
             * 0：返回指定内容。
             * 1：跳转到指定页面。
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
             * @example `204`
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
             * 筛选规则id
             */
            IdList: number[];
        }[];
        /**
         * 返回结果集合。
         */
        Results: {
            /**
             * 熔断规则ID。
             * @example `467`
             */
            Id: number;
            /**
             * 网关ID。
             * @example `11919`
             */
            GatewayId: number;
            /**
             * 网关唯一标识ID。
             * @example `gw-1ee34548c68f4778a25c05abd657****`
             */
            GatewayUniqueId: string;
            /**
             * 路由ID。
             * @example `3450`
             */
            RouteId: number;
            /**
             * 路由名称。
             * @example `routeName`
             */
            RouteName: string;
            /**
             * 阈值模式。
             * 0：慢调用模式。
             * 1：异常模式。
             * @example `0`
             */
            Strategy: number;
            /**
             * 触发熔断的百分比。
             * @example `10`
             */
            TriggerRatio: number;
            /**
             * 熔断统计时长。
             * @example `11`
             */
            StatDurationSec: number;
            /**
             * 熔断恢复时长。
             * @example `12`
             */
            RecoveryTimeoutSec: number;
            /**
             * 触发熔断的最小请求数。
             * @example `10`
             */
            MinRequestAmount: number;
            /**
             * 慢调用模式下慢调用阈值。
             * @example `10`
             */
            MaxAllowedMs: number;
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
             * HTTP状态码。
             * @example `204`
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
             * 筛选规则id
             */
            IdList: number[];
        }[];
    };
}
