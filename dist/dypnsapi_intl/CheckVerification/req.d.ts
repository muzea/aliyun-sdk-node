export interface CheckVerificationRequest {
    /**
     * 控制台配置的ServiceID。
     * @example `FA00000000000001`
     */
    "ServiceSid"?: string;
    /**
     * 接收短信号码。号码格式为：国际区号+号码。
     * @example `6212345****01`
     */
    "To"?: string;
    /**
     * 验证码。
     * @example `1234`
     */
    "Code": string;
    /**
     * 发送验证码接口返回的唯一认证ID。
     * @example `rJXlaR2q5LpKfREtpRPMBfDVQvELZwmBbK5yVR7gr3nLbNAcolLGPYCJaVHt/i+I`
     */
    "VerificationId": string;
}
