export interface ListFlowRulesResponse {
    /**
     * 状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 响应信息。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `316F5F64-F73D-42DC-8632-01E308B6****`
     */
    RequestId: string;
    /**
     * 请求结果。
     * @example `true`
     */
    Success: boolean;
    /**
     * 节点数据。
     */
    Data: {
        /**
         * 返回集合。
         */
        Result: {
            /**
             * 命名空间。
             * @example `default`
             */
            Namespace: string;
            /**
             * 规则ID
             * @example `2`
             */
            RuleId: number;
            /**
             * 应用名。
             * @example `finance`
             */
            AppName: string;
            /**
             * 接口资源名
             * @example `/a`
             */
            Resource: string;
            ResourceType: number;
            /**
             * 流控效果。
             * @example `0`
             */
            ControlBehavior: number;
            /**
             * 流控效果为排队等待时对应的超时时间，单位毫秒。
             * @example `500`
             */
            MaxQueueingTimeMs: number;
            /**
             * 流控规则阈值。
             * @example `10`
             */
            Threshold: number;
            /**
             * 规则启用状态。
             * @example `true`
             */
            Enable: boolean;
            /**
             * 应用ID。
             * @example `hkhon1po62@5f1b08becb*****`
             */
            AppId: string;
            /**
             * 地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 流控行为。
             * @example `"{\"appName\":\"spring-cloud-a\",\"fallbackBehavior\":{\"webFallbackMode\":0,\"webRespContentType\":0,\"webRespMessage\":\"Blocked\",\"webRespStatusCode\":429},\"id\":977,\"name\":\"Fallback\",\"namespace\":\"default\",\"resourceClassification\":1}"`
             */
            FallbackObject: string;
            /**
             * 统计维度，1表示通过请求数。
             * @example `1`
             */
            MetricType: number;
            /**
             * 预留字段。
             * @example `{\"origin\":\"default\"}`
             */
            TrafficTags: any;
        }[];
        /**
         * 页码。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 分页大小。
         * @example `10`
         */
        PageSize: number;
        /**
         * 总条数。
         * @example `11`
         */
        TotalSize: number;
    };
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
}
