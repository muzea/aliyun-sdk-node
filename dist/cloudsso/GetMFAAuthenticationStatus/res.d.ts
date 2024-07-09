export interface GetMFAAuthenticationStatusResponse {
    /**
     * 请求ID。
     * @example `5E688346-DF1A-5537-9BFC-8A9974D29586`
     */
    RequestId: string;
    /**
     * MFA启用状态。取值：
     * - Enabled：启用。
     * - Disabled：禁用。
     * @example `Enabled`
     */
    MFAAuthenticationStatus: string;
}
