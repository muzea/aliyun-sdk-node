export interface ListPrometheusAlertTemplatesResponse {
    /**
     * 请求ID。
     * @example `9FEA6D00-317F-45E3-9004-7FB8B0B7****`
     */
    RequestId: string;
    /**
     * 返回结构体。
     */
    PrometheusAlertTemplates: {
        /**
         * 告警规则类型。
         * @example `节点`
         */
        Type: string;
        /**
         * 告警消息，支持按照{{$labels.xxx}}格式来引用标签。
         * @example `节点 {{ $labels.instance }} 可用内存不足10%，当前可用内存 {{ $value }}%`
         */
        Description: string;
        /**
         * 告警表达式。
         * @example `node_memory_MemAvailable_bytes / node_memory_MemTotal_bytes * 100 < 10`
         */
        Expression: string;
        /**
         * 告警规则版本。
         * @example `1.0`
         */
        Version: string;
        /**
         * 持续时间，范围在1m~1440m，单位为分钟。
         * @example `1m`
         */
        Duration: string;
        /**
         * 告警规则名称。
         * @example `节点内存可用率不足10%`
         */
        AlertName: string;
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
             * @example `warning`
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
             * @example `节点 {{ $labels.instance }} 可用内存不足10%，当前可用内存 {{ $value }}%`
             */
            Value: string;
        }[];
    }[];
}
