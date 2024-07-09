export interface StopInstanceResponse {
    /**
     * 响应码
     * @example `0`
     */
    Code: string;
    /**
     * 响应信息
     * @example `错误信息示例`
     */
    Message: string;
    /**
     * 返回结果。
     */
    Data: {
        /**
         * 请求ID
         * @example ` 4C467B38-3910-447D-87BC-AC049166F216`
         */
        RequestId: string;
        /**
         * 会话ID。
         * @example `6296cc143d2c42899dae6eff19e8ac28`
         */
        SessionId: string;
    };
    /**
     * 调用是否成功。
     * @example `True`
     */
    Success: boolean;
}
