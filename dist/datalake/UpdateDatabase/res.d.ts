export interface UpdateDatabaseResponse {
    /**
     * 状态描述
     * @example `OK`
     */
    Code: string;
    /**
     * 提示相关错误信息
     * @example `.`
     */
    Message: string;
    /**
     * 请求ID
     * @example `161F5EFC-E97E-43C0-AACF-FF18FAC912F0`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
}
