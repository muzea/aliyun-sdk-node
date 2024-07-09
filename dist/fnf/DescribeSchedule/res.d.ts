export interface DescribeScheduleResponse {
    /**
     * 请求ID。
     * @example `testRequestId`
     */
    RequestId: string;
    /**
     * 定时调度的描述。
     * @example `test description`
     */
    Description: string;
    /**
     * 定时调度的ID。
     * @example `testScheduleId`
     */
    ScheduleId: string;
    /**
     * 定时调度的触发消息。
     * @example `{"key": "value"}`
     */
    Payload: string;
    /**
     * 定时调度的名称。
     * @example `my_schedule_name`
     */
    ScheduleName: string;
    /**
     * 定时调度的创建时间。
     * @example `2020-01-01T01:01:01.001Z`
     */
    CreatedTime: string;
    /**
     * 定时调度最近一次的更改时间。
     * @example `2020-01-01T01:01:01.001Z`
     */
    LastModifiedTime: string;
    /**
     * Cron表达式。
     * @example `0 * * * * *`
     */
    CronExpression: string;
    /**
     * 是否启用定时调度。取值说明如下：
     * - **true**：启用。
     * - **false**：禁用。
     * @example `true`
     */
    Enable: boolean;
}
