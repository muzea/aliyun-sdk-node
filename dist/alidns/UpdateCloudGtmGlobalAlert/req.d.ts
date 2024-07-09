export interface UpdateCloudGtmGlobalAlertRequest {
    /**
     * 返回结果显示的语言。取值：
     * - zh-CN：中文
     * - en-US：英文
     * @example `en-US`
     */
    "AcceptLanguage"?: string;
    /**
     * 用户生成的请求token。用于保证请求的幂等性。该参数值可自定义，但是要保证在不同请求间唯一，最大值不超过64个ASCII字符。
     * @example `1ae05db4-10e7-11ef-b126-00163e24**22
    `
     */
    "ClientToken"?: string;
    /**
     * 告警通知组列表。
     */
    "AlertGroup"?: string[];
    /**
     * 报警配置列表。
     */
    "AlertConfig"?: {
        /**
         * 报警事件类型：
         * - addr_alert：地址不可用
         * - addr_resume：地址恢复可用
         * - addr_pool_unavailable：地址池不可用
         * - addr_pool_available：地址池恢复可用
         * @example `addr_alert`
         */
        NoticeType: string;
        /**
         * 是否配置短信报警通知：
         * - true：已配置，当报警事情发生时，会发送短信通知
         * - false｜null：未配置
         * 仅中国站支持短信通知，国际站不支持短信通知。
         * @example `true`
         */
        SmsNotice: boolean;
        /**
         * 是否配置邮件报警通知：
         * - true：已配置，当报警事情发生时，会发送邮件通知
         * - false｜null：未配置
         * @example `true`
         */
        EmailNotice: boolean;
        /**
         * 是否配置钉钉报警通知：
         * - true：已配置，当报警事情发生时，会发送钉钉通知
         * - false：未配置
         * @example `false`
         */
        DingtalkNotice: boolean;
    }[];
}
