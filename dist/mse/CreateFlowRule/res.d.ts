export interface CreateFlowRuleResponse {
    /**
     * 返回信息。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `69AD2AA7-DB47-449B-941B-B14409DF****`
     */
    RequestId: string;
    /**
     * 响应码。
     * @example `200`
     */
    Code: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 命名空间。
         * @example `default`
         */
        Namespace: string;
        /**
         * ID。
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
         * @example `app`
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
         * @example `200`
         */
        Threshold: number;
        /**
         * 规则的启用状态。
         * @example `true`
         */
        Enable: boolean;
        /**
         * 应用ID。
         * @example `hkhon1po62@54e1f42f3******`
         */
        AppId: string;
        /**
         * 地域。
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
