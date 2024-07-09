export interface ListIsolationRulesResponse {
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
            /**
             * 隔离规则并发数阈值。
             * @example `3`
             */
            Threshold: number;
            /**
             * 规则的启用状态。
             * @example `true`
             */
            Enable: boolean;
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
         * 规则总数。
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
