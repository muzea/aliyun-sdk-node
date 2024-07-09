export interface VerifyEmailRequest {
    /**
     * 接口返回错误信息语言。取值：
     * - **zh**：中文。
     * - **en**：英文。
     * 默认值为**en**。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 邮箱验证链接后的token码。
     * 验证邮件发送成功后，您可以登录待进行验证的邮箱中查看token码。
     * @example `0b32247496409441e9e179ea7c2e0****`
     */
    "Token": string;
    /**
     * 用户IP，可设置为127.0.0.1。
     * @example `127.0.0.1`
     */
    "UserClientIp"?: string;
}
