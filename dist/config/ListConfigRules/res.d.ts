export interface ListConfigRulesResponse {
    /**
     * 请求ID。
     * @example `AC3A7E12-72E6-5CC9-A5C1-D8D8919829A7`
     */
    RequestId: string;
    /**
     * 规则列表。
     */
    ConfigRules: {
        /**
         * 规则列表详细信息。
         */
        ConfigRuleList: {
            /**
             * 规则风险等级。取值：
             * - 1：高风险。
             * - 2：中风险。
             * - 3：低风险。
             * @example `1`
             */
            RiskLevel: number;
            /**
             * 规则来源的归属。取值：
             * - CUSTOM_FC：自定义规则。
             * - ALIYUN：规则模板。
             * @example `ALIYUN`
             */
            SourceOwner: string;
            /**
             * 规则归属的账号ID。
             * @example `100931896542****`
             */
            AccountId: number;
            /**
             * 规则运行状态。取值：
             * - ACTIVE：应用中。
             * - DELETING：删除中。
             * - EVALUATING：评估中。
             * - INACTIVE：已停用。
             * @example `ACTIVE`
             */
            ConfigRuleState: string;
            /**
             * 规则的合规聚合结果。
             */
            Compliance: {
                /**
                 * 规则合规评估的摘要结果。取值：
                 * - COMPLIANT：合规。
                 * - NON_COMPLIANT：不合规。
                 * - NOT_APPLICABLE：不适用。
                 * - INSUFFICIENT_DATA：无数据。
                 * @example `COMPLIANT`
                 */
                ComplianceType: string;
                /**
                 * 规则评估的摘要结果对应的评估数量。
                 * @example `2`
                 */
                Count: number;
            };
            /**
             * 规则标识符。
             * - 如果是规则模板，该参数为规则模板标识。
             * - 如果是自定义规则，该参数为函数ARN。
             * @example `eip-bandwidth-limit`
             */
            SourceIdentifier: string;
            /**
             * 规则ARN。
             * @example `acs:config::100931896542****:rule/cr-fdc8626622af00f9****`
             */
            ConfigRuleArn: string;
            /**
             * 规则描述。
             * @example `弹性IP实例可用带宽大于等于指定参数值，视为“合规”。默认值：10 MB。`
             */
            Description: string;
            /**
             * 创建规则的信息。
             */
            CreateBy: {
                /**
                 * 合规包ID。
                 * @example `cp-fdc8626622af00f9****`
                 */
                CompliancePackId: string;
                /**
                 * 合规包名称。
                 * @example `等保三级预检合规包`
                 */
                CompliancePackName: string;
            };
            /**
             * 修正类型。仅支持OOS（运维编排）。
             * @example `OOS`
             */
            AutomationType: string;
            /**
             * 规则名称。
             * @example `弹性IP实例带宽满足最低要求`
             */
            ConfigRuleName: string;
            /**
             * 规则ID。
             * @example `cr-fdc8626622af00f9****`
             */
            ConfigRuleId: string;
            /**
             * 规则的标签。
             */
            Tags: {
                /**
                 * 规则的标签键。
                 * @example `env`
                 */
                Key: string;
                /**
                 * 规则的标签值。
                 * @example `prod`
                 */
                Value: string;
            }[];
            /**
             * 规则评估的资源类型，多个资源类型用半角逗号（,）分隔。
             * @example `ACS::EIP::EipAddress`
             */
            ResourceTypesScope: string;
        }[];
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
         * 规则总数。
         * @example `1`
         */
        TotalCount: number;
    };
}
