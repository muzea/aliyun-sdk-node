export interface UpdateReminderResponse {
    /**
     * 服务成功标识
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码
     * @example `400`
     */
    ErrorCode: number;
    /**
     * 错误信息
     * @example `不能设置过去的时间。`
     */
    ErrorMsg: string;
    /**
     * 更新提醒的id
     * @example `20****1`
     */
    Model: number;
}
