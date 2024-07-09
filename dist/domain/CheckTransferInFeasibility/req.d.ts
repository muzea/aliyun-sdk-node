export interface CheckTransferInFeasibilityRequest {
    /**
     * 接口返回错误信息语言。取值：
     * - **zh**：中文；
     * - **en**：英文。
     * 默认为**en**。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 用户IP，可以设置为**127.0.0.1**。
     * @example `127.0.0.1`
     */
    "UserClientIp"?: string;
    /**
     * 需要校验的域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 域名转入密码。
     * @example `test`
     */
    "TransferAuthorizationCode"?: string;
}
