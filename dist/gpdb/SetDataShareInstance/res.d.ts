export interface SetDataShareInstanceResponse {
    /**
     * 请求ID。
     * @example `B4CAF581-2AC7-41AD-8940-D5**********`
     */
    RequestId: string;
    /**
     * 状态。取值说明：
     * - **success**：成功。
     * - **failed**：失败。
     * @example `success`
     */
    Status: string;
    /**
     * 错误信息。
     * @example `error message`
     */
    ErrMessage: string;
}
