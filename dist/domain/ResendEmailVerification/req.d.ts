export interface ResendEmailVerificationRequest {
    /**
     * 接口返回错误信息语言。取值：
     * - **zh**：中文。
     * - **en**：英文。
     * 默认值为**en**。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 待重新获取验证邮件的邮箱，多个邮箱之间使用英文逗号（,）隔开。
     * @example `test1@aliyun.com,test2@aliyun.com`
     */
    "Email": string;
    /**
     * 用户IP，可设置为127.0.0.1。
     * @example `127.0.0.1`
     */
    "UserClientIp"?: string;
}
