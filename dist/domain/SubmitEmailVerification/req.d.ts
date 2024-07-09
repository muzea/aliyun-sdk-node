export interface SubmitEmailVerificationRequest {
    /**
     * 接口返回错误信息语言。取值：
     * - **zh**：中文。
     * - **en**：英文。
     * 默认值为**en**。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 需要完成验证的邮箱，多个邮箱之间使用英文逗号（,）隔开。
     * @example `username@example.com`
     */
    "Email": string;
    /**
     * 验证邮件已经存在时是否重新发送邮件。取值：
     * - **true**：重新发送验证邮件。
     * - **false**：不重新发送验证邮件。
     * 默认值为**false**。
     * @example `false`
     */
    "SendIfExist"?: boolean;
    /**
     * 用户IP，可设置为127.0.0.1。
     * @example `127.0.0.1`
     */
    "UserClientIp"?: string;
}
