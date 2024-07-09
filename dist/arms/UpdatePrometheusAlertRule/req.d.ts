export interface UpdatePrometheusAlertRuleRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 告警规则名称。
     * @example `Prometheus_Alert`
     */
    "AlertName": string;
    /**
     * 集群ID。
     * @example `c0bad479465464e1d8c1e641b0afb****`
     */
    "ClusterId": string;
    /**
     * 自定义告警规则类型。
     * @example `Kubernetes组件告警`
     */
    "Type"?: string;
    /**
     * 通知类型， 取值：
     * - `ALERT_MANAGER`：通过告警运维中心通知。
     * - `DISPATCH_RULE`：指定通知策略进行通知。
     * @example `ALERT_MANAGER`
     */
    "NotifyType"?: string;
    /**
     * 通知策略ID，当**NotifyType**指定为`DISPATCH_RULE`时必填。
     * @example `10282`
     */
    "DispatchRuleId"?: number;
    /**
     * 告警表达式，需要使用PromQL语句。
     * @example `100 * (sum(rate(container_cpu_usage_seconds_total[1m])) by (pod_name) / sum(label_replace(kube_pod_container_resource_limits_cpu_cores, \"pod_name\", \"$1\", \"pod\", \"(.*)\")) by (pod_name))>75`
     */
    "Expression": string;
    /**
     * 持续时间，范围在1m~1440m，单位为分钟。
     * @example `1`
     */
    "Duration": string;
    /**
     * 告警消息，支持按照{{$labels.xxx}}格式来引用标签。
     * @example `${{$labels.pod_name}}CPU使用率大于80%，当前值{{$value}}%`
     */
    "Message": string;
    /**
     * 标签JSON串。需要设置标签的Name和Value。
     * @example `[{"Value": "critical","Name": "severity"}]`
     */
    "Labels"?: string;
    /**
     * 注释JSON串。需要设置注释的Name和Value。
     * @example `[{"Value": "xxx","Name": "description"}]`
     */
    "Annotations"?: string;
    /**
     * 告警规则ID，您可以在ListPrometheusAlertRules API接口的返回数据中查看。
     * @example `3888704`
     */
    "AlertId": number;
    /**
     * 标签。
     */
    "Tags"?: {
        /**
         * 标签的键(key)。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 标签的值（value）。
         * @example `TestValue`
         */
        Value: string;
    }[];
}
