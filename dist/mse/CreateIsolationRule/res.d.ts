export interface CreateIsolationRuleResponse {
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
     * 响应码。
     * @example `200`
     */
    Code: string;
    /**
     * 规则信息。
     */
    Data: {
        /**
         * 应用所属的微服务命空间。
         * @example `default`
         */
        Namespace: string;
        /**
         * 规则ID。
         * @example `1`
         */
        Id: number;
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
         * @example `hpn9ac29kz@e31a4b871******`
         */
        AppId: string;
        /**
         * 集群所在地域。
         * @example `cn-hangzhou`
         */
        RegionId: string;
    };
    /**
     * 请求结果。
     * @example `true`
     */
    Success: boolean;
}
