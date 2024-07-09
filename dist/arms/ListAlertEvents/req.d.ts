export interface ListAlertEventsRequest {
    /**
     * 告警名称。
     * @example `测试触发的告警`
     */
    "AlertName"?: string;
    /**
     * 查询告警发送历史记录的开始时间，时间格式：YYYY-MM-DD HH:mm:ss
     * @example `2021-12-19 00:00:00`
     */
    "StartTime"?: string;
    /**
     * 查询告警发送历史记录的结束时间，时间格式：YYYY-MM-DD HH:mm:ss
     * @example `2021-12-22 23:59:59`
     */
    "EndTime"?: string;
    /**
     * 查询页数。
     * @example `1`
     */
    "Page": number;
    /**
     * 每页展示数目。
     * @example `20`
     */
    "Size": number;
    /**
     * 事件匹配规则列表。
     * @example `[         {           "value": "ARMS_NOTIFICATION",           "key": "clustername",           "operator": "eq"         }       ]     },{       "matchingConditions": [         {           "value": "test",           "key": "alertname",           "operator": "eq"         }       ]`
     */
    "MatchingConditions"?: string;
    /**
     * 事件状态。
     * - Active：正在发生
     * - Silenced：被静默
     * - Resolved：已解决
     * @example `Active`
     */
    "Status"?: string;
    /**
     * 是否展示关联的通知策略
     * @example `false`
     */
    "ShowNotificationPolicies"?: boolean;
}
