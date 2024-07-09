export interface ListActivatedAlertsResponse {
    /**
     * 请求ID。
     * @example `BDB74B8F-4123-482A-ABB7-7F440349****`
     */
    RequestId: string;
    /**
     * 返回结构体。
     */
    Page: {
        /**
         * 查询结果分页的每页项目数量。
         * @example `20`
         */
        PageSize: number;
        /**
         * 查询结果总数。
         * @example `5`
         */
        Total: number;
        /**
         * 查询结果分页页码。
         * @example `1`
         */
        Page: number;
        /**
         * 告警信息。
         */
        Alerts: {
            /**
             * 告警状态。取值：
             * - `Active`：未恢复。
             * - `Inhibited`：抑制。
             * - `Silenced`：静默。
             * - `Resolved`：已恢复。
             * @example `Active`
             */
            Status: string;
            /**
             * 告警等级。取值：
             * - `critical`：严重。
             * - `error`：错误。
             * - `warn`：警告。
             * - `page`：通知。
             * @example `critical`
             */
            Severity: string;
            /**
             * 告警关联对象名称。
             * @example `testphp2`
             */
            IntegrationName: string;
            /**
             * 告警规则创建时间的时间戳。
             * @example `1616466300000`
             */
            CreateTime: number;
            /**
             * 告警描述信息。
             * @example `报警名称：PodRestart_testphp2，\n Pod night-test-group-1-1-5f5d6f4d84-pszns is restart, Value: 133.33%, 1.33%`
             */
            Message: string;
            /**
             * 告警类型。
             * @example `ARMS-Prometheus监控`
             */
            AlertType: string;
            /**
             * 告警来源集成的名称。
             * @example `测试集成-prometheus`
             */
            InvolvedObjectName: string;
            /**
             * 告警规则名称。
             * @example `容器CPU使用率大于80%`
             */
            AlertName: string;
            /**
             * 告警事件接受次数。
             * @example `598`
             */
            Count: number;
            /**
             * 扩展字段（标签），标签来源包括：
             * - 报警规则表达式指标中携带的标签。
             * - 通过报警规则创建的标签。
             * - ARMS系统自带的默认标签。
             * @example `       "severity": "critical",           "_aliyun_arms_alert_level": "ERROR",           "pod": "night-test-group-1-1-5f5d6f4d84-pszns",           "_aliyun_arms_alert_type": "101",           "_aliyun_arms_integration_name": "测试集成-prometheus",           "alertname": "PodRestart_jiubiantestphp2",           "_aliyun_arms_userid": "1131971649496228",           "_aliyun_arms_involvedObject_name": "jiubiantestphp2",           "_aliyun_arms_involvedObject_id": "ccafb2763cfa7415eb2e2a60a74b1f825",           "_aliyun_arms_region_id": "cn-beijing",           "_aliyun_arms_involvedObject_kind": "cluster",           "_aliyun_arms_product_type": "PROMETHEUS",           "namespace": "default",           "_aliyun_arms_integration_id": "80",           "_aliyun_arms_involvedObject_type": "ManagedKubernetes",           "_aliyun_arms_alert_rule_id": "3612229"`
             */
            ExpandFields: any;
            /**
             * 告警结束时间。
             * @example `1616502540000`
             */
            EndsAt: number;
            /**
             * 告警关联对象类型。
             * @example `cluster`
             */
            InvolvedObjectKind: string;
            /**
             * 告警来源集成的类型。
             * @example `PROMETHEUS`
             */
            IntegrationType: string;
            /**
             * 告警开始时间。
             * @example `1616466300000`
             */
            StartsAt: number;
            /**
             * 告警规则ID。
             * @example `3888704`
             */
            AlertId: string;
            /**
             * 通知策略。
             */
            DispatchRules: {
                /**
                 * 通知策略ID。
                 * @example `7021`
                 */
                RuleId: number;
                /**
                 * 通知策略名称。
                 * @example `容器CPU使用率大于80%的通知策略`
                 */
                RuleName: string;
            }[];
        }[];
    };
}
