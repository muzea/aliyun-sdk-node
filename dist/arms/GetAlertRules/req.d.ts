export interface GetAlertRulesRequest {
    /**
     * 告警规则ID列表，告警规则ID是识别告警规则的唯一标志，不会重复。
     * - 如果不指定，API请求将不会根据告警规则ID对告警规则进行筛选。
     * - 如果指定了告警规则ID列表，那么此次请求将只会返回在列表中的告警规则的子集，其它筛选条件也会同时生效。
     * > 您可以通过其他请求参数调用GetAlertRules接口，从返回信息中获取AlertIds，后续您可以直接通过AlertIds查询指定的告警规则。
     * @example `["12345"]`
     */
    "AlertIds"?: string;
    /**
     * 告警规则名称列表。新版告警规则创建时不允许出现重名，但是存量告警规则可能存在重名告警，因此**AlertName**不是告警规则的唯一标志。
     * - 如果不指定，将不会对告警规则进行过滤。
     * - 如果指定告警规则名称列表，本次请求将只返回在列表中的告警的子集，其它的筛选条件也会生效。
     * @example `["test"]`
     */
    "AlertNames"?: string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 告警规则类型。
     * - APPLICATION_MONITORING_ALERT_RULE：应用监控告警规则。
     * - BROWSER_MONITORING_ALERT_RULE：前端监控告警规则。
     * - PROMETHEUS_MONITORING_ALERT_RULE：Prometheus监控告警规则。
     *
     * @example `APPLICATION_MONITORING_ALERT_RULE`
     */
    "AlertType"?: string;
    /**
     * 告警规则运行状态。
     * - RUNNING：运行中
     * - STOPPED：已停止
     * - PAUSED：被暂停
     * > PAUSED状态说明告警规则状态异常，被系统主动暂停，可能原因有告警规则唯独值过大或者关联集群已经被删除等。
     * @example `RUNNING`
     */
    "AlertStatus"?: string;
    /**
     * Prometheus监控告警规则的集群ID。
     * @example `ceba9b9ea5b924dd0b6726d2de6******
    `
     */
    "ClusterId"?: string;
    /**
     * 无需填写。
     * @example `null`
     */
    "ProductCode"?: string;
    /**
     * 查询第N页告警。
     * @example `1`
     */
    "Page": number;
    /**
     * 每一页告警规则数量。
     * @example `20`
     */
    "Size": number;
    /**
     * 标签列表。
     */
    "Tags"?: {
        /**
         * 标签键。
         * @example `type`
         */
        Key: string;
        /**
         * 标签值。
         * @example `prod`
         */
        Value: string;
    }[];
}
