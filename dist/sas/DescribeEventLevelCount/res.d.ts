export interface DescribeEventLevelCountResponse {
    /**
     * 告警的不通危险等级统计。
     */
    EventLevels: {
        /**
         * 告警级别为紧急的安全告警的数量。
         * @example `0`
         */
        Serious: number;
        /**
         * 告警级别为可疑的安全告警的数量。
         * @example `1`
         */
        Suspicious: number;
        /**
         * 告警级别为提醒的安全告警的数量。
         * @example `2`
         */
        Remind: number;
    };
    /**
     * 接口调用是否成功。取值：
     * - **true**：成功
     * - **false**：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 结果代码，**200**表示成功，若为别的值则表示失败，调用方可根据此字段判断失败原因。
     * @example `200`
     */
    Code: string;
    /**
     * 返回信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `CE8CA5EA-24EF-5D41-B735-53ACE7XXXXX`
     */
    RequestId: string;
}
