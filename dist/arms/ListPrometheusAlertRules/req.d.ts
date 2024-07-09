export interface ListPrometheusAlertRulesRequest {
    /**
     * 告警规则名称。
     * @example `Prometheus_Alert`
     */
    "Name"?: string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 集群ID。
     * @example `c0bad479465464e1d8c1e641b0afb****`
     */
    "ClusterId": string;
    /**
     * 告警规则类型。
     * @example `自定义`
     */
    "Type"?: string;
    /**
     * 告警规则启用状态，取值：
     * - `1`：开启
     * - `0`：关闭
     * @example `1`
     */
    "Status"?: number;
    /**
     * 标签匹配条件的JSON串。关于此字段的详细说明参见下文**关于参数MatchExpressions的补充说明**。
     * @example `[{"key":"severity","value":"critical","operator":"re"}]`
     */
    "MatchExpressions"?: string;
    /**
     * 标签。
     */
    "Tags"?: {
        /**
         * 标签的键(key)。
         * @example `owner`
         */
        Key: string;
        /**
         * 标签的值（value）。
         * @example `zhangsan`
         */
        Value: string;
    }[];
}
