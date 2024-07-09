export interface DescribeCloudGtmGlobalAlertResponse {
    /**
     * 唯一请求识别码。
     * @example `B57C121B-A45F-44D8-A9B2-13E5A5044195`
     */
    RequestId: string;
    AlertGroup: {
        /**
         * 告警通知组列表。
         */
        AlertGroup: string[];
    };
    AlertConfig: {
        /**
         * 报警配置列表。
         */
        AlertConfig: {
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
             * - false：未配置
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
             * @example `false`
             */
            DingtalkNotice: boolean;
        }[];
    };
}
