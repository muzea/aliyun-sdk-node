export interface DescribePrometheusAlertRuleRequest {
    /**
     * 告警规则ID，您可以在ListPrometheusAlertRules API接口的返回数据中查看。
     * @example `3888704`
     */
    "AlertId": number;
    /**
     * Prometheus实例ID。
     * @example `cc7a37ee31aea4ed1a059eff8034b****`
     */
    "ClusterId"?: string;
}
