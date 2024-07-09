export interface SendTTSVerifyLinkResponse {
    /**
     * 请求ID。
     * @example `21E85B16-75A6-429A-9F65-8AAC9A54****`
     */
    RequestId: string;
    /**
     * 是否成功发送手机号码验证短信。
     * - `true`：发送成功
     * - `false`：发送失败
     * @example `true`
     */
    IsSuccess: boolean;
}
