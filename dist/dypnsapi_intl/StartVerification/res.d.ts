export interface StartVerificationResponse {
    /**
     * 请求ID，阿里云为该请求生成的唯一标识符。
     * @example `HF14955E-EEB5-3CE4-AE50-00F7FC8C1D62`
     */
    RequestId: string;
    /**
     * 返回信息。
     * @example `OK`
     */
    Message: string;
    /**
     * 请求结果数据，如果请求成功则返回。
     * @example `{
        "verifyCode": "",
        "verificationId": "",
        "status": ""
      }`
     */
    Model: any;
    /**
     * 返回code。
     * @example `OK`
     */
    Code: string;
    /**
     * 是否调用成功。
     * - **true**：调用成功。
     *
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
}
