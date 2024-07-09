export interface ListManagedRulesResponse {
    /**
     * 请求ID。
     * @example `B3E605AB-63D5-1EE0-BFA6-0BAC247B0461`
     */
    RequestId: string;
    /**
     * 规则模板。
     */
    ManagedRules: {
        /**
         * 分页查询时设置的每页行数。取值范围：1~500。
         * @example `1`
         */
        PageSize: number;
        /**
         * 规则模板列表的页码。
         * 起始值：1。
         * @example `10`
         */
        PageNumber: number;
        /**
         * 规则模板总数。
         * @example `21`
         */
        TotalCount: number;
        /**
         * 规则模板详情列表。
         */
        ManagedRuleList: {
            /**
             * 规则风险等级。取值：
             * - 1：高风险。
             * - 2：中风险。
             * - 3：低风险。
             * @example `1`
             */
            RiskLevel: number;
            /**
             * 规则模板描述。
             * @example `CDN域名开启HTTPS协议加密，视为“合规”。`
             */
            Description: string;
            /**
             * 规则模板分类信息列表。
             */
            Labels: string[];
            /**
             * 规则模板唯一标识。
             * @example `cdn-domain-https-enabled`
             */
            Identifier: string;
            /**
             * 规则模板名称。
             * @example `CDN域名开启HTTPS加密`
             */
            ConfigRuleName: string;
            /**
             * 规则模板修正指导的文档链接。
             * @example `https://example.aliyundoc.com`
             */
            HelpUrls: string;
            /**
             * 规则模板的评估范围。
             */
            Scope: {
                /**
                 * 规则模板评估的资源类型范围。
                 */
                ComplianceResourceTypes: string[];
            };
            /**
             * 规则是否支持预检。取值：
             * - true：支持。
             * - false：不支持。
             * @example `true`
             */
            SupportPreviewManagedRule: boolean;
            /**
             * 支持的修正模板标识。
             * @example `ACS-CDN-SetDomainServerCertificate`
             */
            RemediationTemplateIdentifier: string;
            /**
             * 支持的修正模板名称。
             * @example `开启CDN域名HTTPS监听`
             */
            RemediationTemplateName: string;
        }[];
    };
}
