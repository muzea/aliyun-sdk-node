export interface ListCompliancePackTemplatesResponse {
    /**
     * 合规包模板详情。
     */
    CompliancePackTemplatesResult: {
        /**
         * 分页时每页显示的数据行数。
         * @example `10`
         */
        PageSize: number;
        /**
         * 页码。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 合规包模板总数。
         * @example `1`
         */
        TotalCount: number;
        /**
         * 合规包模板列表。
         */
        CompliancePackTemplates: {
            /**
             * 合规包中规则模板的风险等级。取值：
             * - 1：高风险。
             * - 2：中风险。
             * - 3：低风险。
             * @example `1`
             */
            RiskLevel: number;
            /**
             * 合规包描述。
             * @example `持续检测网络架构、负载额度、网络安全设置的合规性，避免网络安全风险。`
             */
            Description: string;
            /**
             * 合规包中默认规则列表。
             */
            ConfigRules: {
                /**
                 * 规则描述。
                 * @example `SLB证书的到期时间距离当前时间大于参数设定的时间范围，视为“合规”。默认值：90天。`
                 */
                Description: string;
                /**
                 * 规则模板标识。
                 * @example `slb-servercertificate-expired-check`
                 */
                ManagedRuleIdentifier: string;
                /**
                 * 规则模板名称。
                 * @example `SLB证书到期检查`
                 */
                ManagedRuleName: string;
                /**
                 * 规则模板参数信息。
                 */
                ConfigRuleParameters: {
                    /**
                     * 规则模板中参数是否必填。取值：
                     * - true：参数必填。
                     * - false：参数非必填。
                     * @example `true`
                     */
                    Required: boolean;
                    /**
                     * 规则模板的参数名称。
                     * @example `days`
                     */
                    ParameterName: string;
                    /**
                     * 规则模板的参数值。
                     * @example `90`
                     */
                    ParameterValue: string;
                }[];
                /**
                 * 规则模板的风险等级。取值：
                 * - 1：高风险。
                 * - 2：中风险。
                 * - 3：低风险。
                 * @example `1`
                 */
                RiskLevel: number;
                /**
                 * 法规条例ID。
                 * > 仅法规类合规包显示该参数。
                 * @example `3.1`
                 */
                ControlId: string;
                /**
                 * 法规类条目原文描述，只有法规类合规包包含此信息。
                 * @example `No classic networks exist.`
                 */
                ControlDescription: string;
                /**
                 * 规则是否支持快速启用。取值：
                 * - true：支持。
                 * - false：不支持。
                 * @example `false`
                 */
                DefaultEnable: boolean;
                /**
                 * 规则评估的资源类型。
                 * @example `ACS::SLB::ServerCertificate`
                 */
                ResourceTypesScope: string;
            }[];
            /**
             * 合规包模板名称。
             * @example `网络合规管理最佳实践`
             */
            CompliancePackTemplateName: string;
            /**
             * 合规包模板ID。
             * @example `ct-d254ff4e06a300cf****`
             */
            CompliancePackTemplateId: string;
            /**
             * 合规包的分类标签。
             * @example `法规`
             */
            Labels: string;
            /**
             * 合规包最后更新的时间戳。
             * @example `1663408308`
             */
            LastUpdate: number;
        }[];
    };
    /**
     * 请求ID。
     * @example `D67FC82F-25AE-4268-A94C-3348340748F9`
     */
    RequestId: string;
}
