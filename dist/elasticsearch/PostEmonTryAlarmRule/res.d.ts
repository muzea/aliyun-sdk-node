export interface PostEmonTryAlarmRuleResponse {
    /**
     * 响应码。
     * @example `200`
     */
    Code: string;
    /**
     * 响应消息。
     * @example `""`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `3EC5731F-0944-4E4F-9DD5-1F976B3FCC3D`
     */
    RequestId: string;
    /**
     * 报警消息是否发送成功：true（发送成功）、 false（发送失败）。
     * @example `true`
     */
    Success: boolean;
}
