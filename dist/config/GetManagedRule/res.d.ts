export interface GetManagedRuleResponse {
    /**
     * 规则模板详情。
     */
    ManagedRule: {
        /**
         * 规则模板的风险等级。取值：
         * - 1：高风险。
         * - 2：中风险。
         * - 3：低风险。
         * @example `1`
         */
        RiskLevel: number;
        /**
         * 规则模板的标签列表。
         */
        Labels: string[];
        /**
         * 规则模板的可选参数信息。
         * @example `{}`
         */
        OptionalInputParameterDetails: any;
        /**
         * 规则模板标识。
         * @example `cdn-domain-https-enabled`
         */
        Identifier: string;
        /**
         * 规则模板的必填参数信息。
         * @example `{}`
         */
        CompulsoryInputParameterDetails: any;
        /**
         * 规则触发方式信息列表。
         */
        SourceDetails: {
            /**
             * 规则触发机制。取值：
             * - ConfigurationItemChangeNotification：配置变更。
             * - ScheduledNotification：周期执行。
             * @example `ConfigurationItemChangeNotification`
             */
            MessageType: string;
            /**
             * 规则执行周期。取值：
             * - One_Hour：1小时。
             * - Three_Hours：3小时。
             * - Six_Hours：6小时。
             * - Twelve_Hours：12小时。
             * - TwentyFour_Hours：24小时。
             * @example `TwentyFour_Hours`
             */
            MaximumExecutionFrequency: string;
        }[];
        /**
         * 规则模板描述。
         * @example `CDN域名开启HTTPS协议加密，视为“合规”。`
         */
        Description: string;
        /**
         * 规则模板名称。
         * @example `CDN域名开启HTTPS加密`
         */
        ConfigRuleName: string;
        /**
         * 规则模板生效范围。
         */
        Scope: {
            /**
             * 规则模板生效的资源类型列表。
             */
            ComplianceResourceTypes: string[];
        };
        /**
         * 规则模板修正指导的文档链接。
         * @example `https://example.aliyundoc.com`
         */
        HelpUrls: string;
    };
    /**
     * 请求ID。
     * @example `7E6DDC09-87C1-5310-A924-3491EAAE6F90`
     */
    RequestId: string;
}
