export interface UpdateCloudGtmInstanceConfigAlertRequest {
    /**
     * 返回信息的语言类型：
     * - zh-CN：中文
     * - en-US：英文
     * @example `zh-CN`
     */
    "AcceptLanguage"?: string;
    /**
     * 用户生成的请求token。用于保证请求的幂等性。注意  由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
     * @example `1ae05db4-10e7-11ef-b126-00163e24**22`
     */
    "ClientToken"?: string;
    /**
     * 全局流量管理3.0实例id。
     * @example `gtm-cn-zz11t58**0s`
     */
    "InstanceId"?: string;
    /**
     * 域名实例配置id，相同接入域名、相同的GTM实例可以同时配置A和AAAA记录，此情况下相同的GTM实例会出现2个域名实例配置，ConfigId可以唯一标识域名实例配置。
     * @example `Config-000**11`
     */
    "ConfigId"?: string;
    /**
     * 实例告警配置模式：
     * - global：继承全局报警配置，即实例采用全局告警配置
     * - instance_config：自定义报警配置
     * @example `global`
     */
    "AlertMode"?: string;
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
         * - fals：未配置
         * 仅中国站支持短信通知，国际站不支持短信通知。
         * @example `true`
         */
        SmsNotice: boolean;
        /**
         * 是否配置邮件报警通知：
         * - true：已配置，当报警事情发生时，会发送邮件通知
         * - false：未配置
         * @example `true`
         */
        EmailNotice: boolean;
        /**
         * 是否配置钉钉报警通知：
         * - true：已配置，当报警事情发生时，会发送钉钉通知
         * - false：未配置
         * @example `true`
         */
        DingtalkNotice: boolean;
    }[];
}
