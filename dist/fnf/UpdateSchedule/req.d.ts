export interface UpdateScheduleRequest {
    /**
     * 定时调度绑定的流程名称。该名称在同一地域内唯一，创建后不可修改。取值说明如下：
     * - 支持英文字符（a~z）或（A~Z）、数字（0~9）、下划线（_）和短划线（-）。
     * - 首字母必须为英文字母（a~z）、（A~Z）或下划线（_）。
     * - 区分大小写。
     * - 长度为1~128个字符。
     * @example `my_flow_name`
     */
    "FlowName": string;
    /**
     * 定时调度的名称。取值说明如下：
     * - 支持英文字符（a~z）或（A~Z）、数字（0~9）、下划线（_）和短划线（-）。
     * - 首字母必须为英文字母（a~z）、（A~Z）或下划线（_）。
     * - 区分大小写。
     * - 长度为1~128个字符。
     * @example `my_schedule_name`
     */
    "ScheduleName": string;
    /**
     * 定时调度的描述。
     * @example `my test schedule`
     */
    "Description"?: string;
    /**
     * 定时调度的触发消息，必须为JSON格式。
     * @example `{"key": "value"}`
     */
    "Payload"?: string;
    /**
     * Cron表达式。
     * @example `0 * * * * *`
     */
    "CronExpression"?: string;
    /**
     * 是否启用定时调度。取值说明如下：
     * - **true**：启用。
     * - **false**：禁用。
     * @example `true`
     */
    "Enable"?: boolean;
}
