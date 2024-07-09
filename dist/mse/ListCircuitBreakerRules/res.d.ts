export interface ListCircuitBreakerRulesResponse {
    /**
     * 响应码。
     * @example `200`
     */
    Code: number;
    /**
     * 响应信息。
     * @example `OK`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `4E9FDCFE-0738-493B-B801-82BDFBCB****`
     */
    RequestId: string;
    /**
     * 请求结果。
     * @example `true`
     */
    Success: boolean;
    /**
     * 规则信息。
     */
    Data: {
        /**
         * 返回结果。
         */
        Result: {
            /**
             * 应用所属的微服务命空间。
             * @example `default`
             */
            Namespace: string;
            /**
             * 规则ID。
             * @example `1`
             */
            RuleId: number;
            /**
             * 应用名称。
             * @example `spring-cloud-a`
             */
            AppName: string;
            /**
             * 接口名称：适用该规则的应用资源。需要与控制台接口详情处接口名称一致。
             * @example `/a`
             */
            Resource: string;
            ResourceType: number;
            /**
             * 阈值类型：选择以慢调用比例或异常比例作为阈值。
             * @example `0`
             */
            Strategy: number;
            /**
             * 熔断比例阈值：触发熔断的比例阈值，取值范围为0 - 1，代表0% - 100%。
             * @example `0.8`
             */
            Threshold: number;
            /**
             * 规则的启用状态。
             * @example `true`
             */
            Enable: boolean;
            /**
             * 熔断时长（单位毫秒）：即熔断触发后持续的时间。资源进入熔断状态后，在配置的熔断时长内，请求都会快速失败。
             * @example `10000`
             */
            RetryTimeoutMs: number;
            /**
             * 统计窗口时长（单位毫秒）：统计的时间窗口长度，取值范围为1秒~120分钟。
             * @example `20000`
             */
            StatIntervalMs: number;
            /**
             * 应用ID。
             * @example `hkhon1po62@c3df23522bXXXXX`
             */
            AppId: string;
            /**
             * 集群所在地域。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 规则绑定的行为。
             * @example `"{\"appName\":\"spring-cloud-a\",\"fallbackBehavior\":{\"webFallbackMode\":0,\"webRespContentType\":0,\"webRespMessage\":\"Blocked\",\"webRespStatusCode\":429},\"id\":977,\"name\":\"Fallback\",\"namespace\":\"default\",\"resourceClassification\":1}"`
             */
            FallbackObject: string;
            /**
             * 慢调用RT（单位毫秒）：阈值类型为慢调用比例时，超过该时长则判定为慢请求。
             * @example `200`
             */
            MaxAllowedRtMs: number;
            /**
             * 触发熔断的最小请求数目，若当前统计窗口请求数小于此值，即使达到熔断条件规则也不会触发。
             * @example `10`
             */
            MinRequestAmount: number;
            /**
             * 熔断恢复每步最小通过数目。
             * @example `5`
             */
            HalfOpenBaseAmountPerStep: number;
            /**
             * 熔断恢复阶段数。
             * @example `1`
             */
            HalfOpenRecoveryStepNum: number;
        }[];
        /**
         * 起始页。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 页大小。
         * @example `10`
         */
        PageSize: number;
        /**
         * 总页数。
         * @example `3`
         */
        TotalSize: number;
    };
    /**
     * 状态码。
     * @example `200`
     */
    HttpStatusCode: number;
}
