export interface CreatePrometheusAlertRuleResponse {
    /**
     * 请求ID。
     * @example `9FEA6D00-317F-45E3-9004-7FB8B0B7****`
     */
    RequestId: string;
    /**
     * 返回结构体。
     */
    PrometheusAlertRule: {
        /**
         * 告警规则启用状态。取值：
         * - `1`：开启。
         * - `0`：关闭。
         * @example `1`
         */
        Status: number;
        /**
         * 告警规则类型。
         * @example `Kubernetes组件告警`
         */
        Type: string;
        /**
         * 通知类型。取值：
         * - `ALERT_MANAGER`：通过告警运维中心通知。
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
         * 告警消息，支持按照{{$labels.xxx}}格式来引用标签。
         * @example `${{$labels.pod_name}}CPU使用率大于80%，当前值{{$value}}%`
         */
        Message: string;
        /**
         * 持续时间，范围在1m~1440m，单位为分钟。
         * @example `10m`
         */
        Duration: string;
        /**
         * 通知策略ID。
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
    };
    /**
     * 状态码。200表示成功。
     * @example `200`
     */
    Code: number;
    /**
     * 调用是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回信息。
     * @example `success`
     */
    Message: string;
}
