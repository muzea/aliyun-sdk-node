export interface CreateReminderResponse {
    /**
     * 接口调用结果标识，true表示成功，false表示失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。
     * @example `400`
     */
    ErrorCode: string;
    /**
     * 错误信息的详细描述。
     * @example `不能设置过去的时间。`
     */
    ErrorMsg: string;
    /**
     * 创建的提醒ID。
     * @example `20****1`
     */
    Model: number;
}
