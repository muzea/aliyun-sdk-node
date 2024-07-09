export interface UpdateFlowRuleResponse {
    /**
     * 响应信息。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `52BA6DA6-A702-4362-A32F-DFF79655****`
     */
    RequestId: string;
    /**
     * 返回值。
     * @example `200`
     */
    Code: string;
    /**
     * 节点数据列表。
     */
    Data: {
        /**
         * 命名空间。
         * @example `default`
         */
        Namespace: string;
        /**
         * 规则ID。
         * @example `12`
         */
        Id: number;
        /**
         * 应用名称。
         * @example `spring-cloud-a`
         */
        AppName: string;
        /**
         * 接口资源名。
         * @example `/c`
         */
        Resource: string;
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
         * @example `5`
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
    };
    /**
     * 请求结果。
     * @example `true`
     */
    Success: boolean;
}
