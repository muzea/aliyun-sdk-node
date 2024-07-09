export interface SearchVerificationRequest {
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
    "Code"?: string;
    /**
     * 发送验证码接口返回的唯一认证ID。
     * @example `rJXlaR2q5LpKfREtpRPMBfDVQvELZwmBbK5yVR7gr3nLbNAcolLGPYCJaVHt/i+I`
     */
    "VerificationId"?: string;
    /**
     * 短信发送日期，格式为毫秒时间戳。支持查询最近30天的记录。
     * @example `1677600000000,`
     */
    "SendDate"?: number;
    /**
     * 分页的大小。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 当前页数。取值从1开始。
     * @example `1`
     */
    "CurrentPage"?: number;
}
