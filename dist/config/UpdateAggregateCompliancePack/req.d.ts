export interface UpdateAggregateCompliancePackRequest {
    /**
     * 合规包ID。
     * 关于如何获取合规包ID，请参见[ListAggregateCompliancePacks](~~262059~~)。
     * @example `cp-fdc8626622af00f9****`
     */
    "CompliancePackId": string;
    /**
     * 合规包描述。
     * @example `基于等保2.0三级标准，提供持续检测合规性的建议模板，帮助您提前自检并修复问题，以便快速通过正式检测。`
     */
    "Description"?: string;
    /**
     * 合规包的风险等级。取值：
     * - 1：高风险。
     * - 2：中风险。
     * - 3：低风险。
     * @example `1`
     */
    "RiskLevel"?: number;
    /**
     * 合规包中的规则列表。
     * 当您修改合规包时，如果规则列表为空，则保持原有规则列表不变；如果规则列表不为空，则使用新规则替换原有规则列表中的规则。
     */
    "ConfigRules"?: {
        /**
         * 规则模板标识。配置审计根据规则模板标识自动创建规则，并将该规则加入到当前合规包中。
         * `ManagedRuleIdentifier`和`ConfigRuleId`二选一，当两个参数都设置时，以`ConfigRuleId`为准确。关于如何获取托管规则标识，请参见[ListCompliancePackTemplates](~~261176~~)。
         * @example `eip-bandwidth-limit`
         */
        ManagedRuleIdentifier: string;
        /**
         * 规则参数信息。
         */
        ConfigRuleParameters: {
            /**
             * 规则参数名称。
             * 参数`ParameterName`和`ParameterValue`必须同时设置，或同时不设置。如果规则模板存在参数，且无默认取值，则您必须设置该参数。关于如何获取规则模板的参数名称，请参见[ListCompliancePackTemplates](~~261176~~)。
             * @example `bandwidth`
             */
            ParameterName: string;
            /**
             * 规则参数值。
             * 参数`ParameterName`和`ParameterValue`必须同时设置，或同时不设置。如果规则模板存在参数，且无默认取值，则您必须设置该参数。关于如何获取规则模板的参数值，请参见[ListCompliancePackTemplates](~~261176~~)。
             * @example `20`
             */
            ParameterValue: string;
        }[];
        /**
         * 规则ID。配置审计将已有规则加入到当前合规包中。
         * `ManagedRuleIdentifier`和`ConfigRuleId`二选一，当两个参数都设置时，以`ConfigRuleId`为准确。关于如何获取规则ID，请参见[ListAggregateConfigRules](~~264148~~)。
         * @example `cr-e918626622af000f****`
         */
        ConfigRuleId: string;
        /**
         * 规则名称。
         * @example `检测闲置弹性公网IP`
         */
        ConfigRuleName: string;
        /**
         * 规则描述。
         * @example `弹性公网已绑定到ECS或者NAT实例，非闲置状态，视为“合规”。`
         */
        Description: string;
        /**
         * 规则风险等级。取值：
         * - 1：高风险。
         * - 2：中风险。
         * - 3：低风险。
         * @example `1`
         */
        RiskLevel: number;
    }[];
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。`ClientToken`只支持ASCII字符，且不能超过64个字符。
     * @example `1594295238-f9361358-5843-4294-8d30-b5183fac****`
     */
    "ClientToken"?: string;
    /**
     * 账号组ID。
     * 关于如何获取账号组ID，请参见[ListAggregators](~~255797~~)。
     * @example `ca-f632626622af0079****`
     */
    "AggregatorId": string;
    /**
     * 合规包名称。
     * 关于如何获取合规包名称，请参见[ListAggregateCompliancePacks](~~262059~~)。
     * @example `等保三级预检合规包`
     */
    "CompliancePackName"?: string;
    /**
     * 合规包仅对指定地域ID中的资源生效。多个地域ID之间用半角逗号（,）分隔。
     * @example `cn-hangzhou`
     */
    "RegionIdsScope"?: string;
    "ExcludeRegionIdsScope"?: string;
    /**
     * 合规包对指定资源ID无效，即不对该资源执行评估。多个资源ID之间用半角逗号（,）分隔。
     * @example `eip-8vbf3x310fn56ijfd****`
     */
    "ExcludeResourceIdsScope"?: string;
    "ResourceIdsScope"?: string;
    /**
     * 合规包仅对指定资源组ID中的资源生效。多个资源组ID之间用半角逗号（,）分隔。
     * @example `rg-aekzc7r7rhx****`
     */
    "ResourceGroupIdsScope"?: string;
    "ExcludeResourceGroupIdsScope"?: string;
    /**
     * 合规包仅对绑定指定标签键的资源生效。
     * @example `ECS`
     */
    "TagKeyScope"?: string;
    /**
     * 合规包仅对绑定指定标签键值对的资源生效。
     * > TagValueScope需结合TagKeyScope一起使用。
     * @example `test`
     */
    "TagValueScope"?: string;
    "TagsScope"?: {
        TagKey: string;
        TagValue: string;
    }[];
    "ExcludeTagsScope"?: {
        TagKey: string;
        TagValue: string;
    }[];
}
