export interface GetAccountMFAInfoResponse {
    /**
     * 请求ID。
     * @example `4BE83135-0B08-467C-B3A2-27B312FD0F57`
     */
    RequestId: string;
    /**
     * 是否已启用多因素认证设备。取值：
     * - true：已启用。
     * - false：未启用。
     * @example `false`
     */
    IsMFAEnable: boolean;
}
