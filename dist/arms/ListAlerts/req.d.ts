export interface ListAlertsRequest {
    /**
     * 告警名称。
     * @example `告警测试`
     */
    "AlertName"?: string;
    /**
     * 告警状态：
     * - 0：待处理
     * - 1：处理中
     * - 2：已处理
     * @example `2`
     */
    "State"?: number;
    /**
     * 告警等级。告警严重程度从P6、P5、P4、P3、P2、P1逐级上升。
     * @example `P6`
     */
    "Severity"?: string;
    /**
     * 通知策略ID。
     * @example `12345`
     */
    "DispatchRuleId"?: number;
    /**
     * 集成类型。
     * - ARMS
     * - CLOUD_MONITOR
     * - MSE
     * - ARMS\_CLOUD_DIALTEST
     * - PROMETHEUS
     * - LOG_SERVICE
     * - CUSTOM
     * - ARMS_PROMETHEUS
     * - ARMS\_APP_MON
     * - ARMS\_FRONT_MON
     * - ARMS_CUSTOM
     * - XTRACE
     * - GRAFANA
     * - ZABBIX
     * - SKYWALKING
     * - EVENT_BRIDGE
     * - NAGIOS
     * - OPENFALCON
     * - ARMS_INSIGHTS
     * @example `ARMS_APP_MON`
     */
    "IntegrationType"?: string;
    /**
     * 查询告警发送历史记录的开始时间，时间格式为`YYYY-MM-DD HH:mm:ss`。
     * @example `2021-12-10 00:00:00`
     */
    "StartTime"?: string;
    /**
     * 查询告警发送历史记录的结束时间，时间格式为`YYYY-MM-DD HH:mm:ss`。
     * @example `2021-12-22 23:59:59`
     */
    "EndTime"?: string;
    /**
     * 是否查询告警对应的事件。
     * - `false`（默认）：不查询事件。
     * - `true`：查询事件。
     * @example `true`
     */
    "ShowEvents"?: boolean;
    /**
     * 是否查询告警对应的活动记录。
     * - `false`（默认）：不查询活动记录。
     * - `true`：查询活动记录，仅查询近3天的活动记录。
     * @example `true`
     */
    "ShowActivities"?: boolean;
    /**
     * 查询页数。
     * @example `1`
     */
    "Page": number;
    /**
     * 每页展示的告警数。
     * @example `20`
     */
    "Size": number;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
