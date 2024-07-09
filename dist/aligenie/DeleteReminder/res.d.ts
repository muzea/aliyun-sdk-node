export interface DeleteReminderResponse {
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
     * @example `参数错误。`
     */
    ErrorMsg: string;
}
