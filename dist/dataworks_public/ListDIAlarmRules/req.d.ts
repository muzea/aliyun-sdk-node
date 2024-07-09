export interface ListDIAlarmRulesRequest {
    /**
     * 任务ID，是告警规则关联的任务ID。
     * @example `11260`
     */
    "DIJobId": number;
    /**
     * 页码，默认为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页大小，默认为10。
     * @example `10`
     */
    "PageSize"?: number;
}
