export interface UpdateTaskFlowScheduleRequest {
    /**
     * 租户ID。
     * > 鼠标移动到界面右上角的头像处，查看租户ID。具体操作，请参见[查看租户信息](~~181330~~)。
     * @example `3***`
     */
    "Tid"?: number;
    /**
     * 任务流ID，任务流的唯一标识。
     * @example `7***`
     */
    "DagId": number;
    /**
     * 是否开启调度。
     * - **true**
     * - **false**
     * @example `false`
     */
    "ScheduleSwitch": boolean;
    /**
     * 此时间点之前任务流不进行调度。
     * @example `CronBeginDate_test`
     */
    "CronBeginDate"?: string;
    /**
     * 定时调度结束时间，此时间点之后任务流不进行调度。
     * @example `CronEndDate_test`
     */
    "CronEndDate"?: string;
    /**
     * 事件调度配置，JSON字符串格式。
     * @example `ScheduleParam_test`
     */
    "ScheduleParam": string;
    /**
     * 定时调度Cron。
     * @example `CronStr_test`
     */
    "CronStr"?: string;
    /**
     * 触发类型，取值如下：
     * - **Cron**：定时调度
     * - **Event**：事件触发
     * @example `Event`
     */
    "TriggerType": string;
    /**
     * 调度周期类型。取值如下：
     * - **HOUR**：小时级调度
     * - **DAY**：日级调度
     * - **WEEK**: 周级调度
     * - **MONTH**：月级调度
     * @example `HOUR`
     */
    "CronType"?: string;
    /**
     * 时区设置，默认为东八区（Asia/Shanghai）。
     * @example `Asia/Shanghai`
     */
    "TimeZoneId"?: string;
}
