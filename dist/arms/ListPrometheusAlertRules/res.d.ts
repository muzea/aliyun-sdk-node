export interface ListPrometheusAlertRulesResponse {
    /**
     * 请求ID。
     * @example `9FEA6D00-317F-45E3-9004-7FB8B0B7****`
     */
    RequestId: string;
    /**
     * 返回结构体。
     */
    PrometheusAlertRules: {
        /**
         * 告警规则启用状态，取值：
         * - `1`：开启
         * - `0`：关闭
         * @example `1`
         */
        Status: number;
        /**
         * 告警规则类型。
         * @example `自定义`
         */
        Type: string;
        /**
         * 通知类型， 取值：
         * - `ALERT_MANAGER`：通过报警运维中心通知。
         * - `DISPATCH_RULE`：指定通知策略进行通知。
         * @example `ALERT_MANAGER`
         */
        NotifyType: string;
        /**
         * 告警表达式。
         * @example `100 * (sum(rate(container_cpu_usage_seconds_total[1m])) by (pod_name) / sum(label_replace(kube_pod_container_resource_limits_cpu_cores, \"pod_name\", \"$1\", \"pod\", \"(.*)\")) by (pod_name))>75`
         */
        Expression: string;
        /**
         * 告警通知消息，支持按照{{$labels.xxx}}格式来引用标签。
         * @example `${{$labels.pod_name}}CPU使用率大于80%，当前值{{$value}}%`
         */
        Message: string;
        /**
         * 持续时间，范围在1m~1440m，单位为分钟。
         * @example `1m`
         */
        Duration: string;
        /**
         * 通知策略ID，当**NotifyType**指定为`DISPATCH_RULE`时显示此参数。
         * @example `10282`
         */
        DispatchRuleId: number;
        /**
         * 告警规则名称。
         * @example `Prometheus_Alert`
         */
        AlertName: string;
        /**
         * 告警规则ID。
         * @example `3888704`
         */
        AlertId: number;
        /**
         * 集群ID。
         * @example `c0bad479465464e1d8c1e641b0afb****`
         */
        ClusterId: string;
        /**
         * 告警规则的标签。
         */
        Labels: {
            /**
             * 标签的名称。
             * @example `severity`
             */
            Name: string;
            /**
             * 标签的值。
             * @example `critical`
             */
            Value: string;
        }[];
        /**
         * 告警规则的注释。
         */
        Annotations: {
            /**
             * 注释的名称。
             * @example `message`
             */
            Name: string;
            /**
             * 注释的值。
             * @example `${{$labels.pod_name}}CPU使用率大于80%，当前值{{$value}}%`
             */
            Value: string;
        }[];
        /**
         * 标签。
         */
        Tags: {
            /**
             * Tag的主键。
             * @example `key`
             */
            Key: string;
            /**
             * Tag的值。
             * @example `value`
             */
            Value: string;
        }[];
    }[];
    /**
     * 状态码。200为成功，其他状态码为异常。
     * @example `200`
     */
    Code: number;
    /**
     * 返回结果的提示信息。
     * @example `success`
     */
    Message: string;
    /**
     * 调用是否成功。
     * @example `True`
     */
    Success: boolean;
}
