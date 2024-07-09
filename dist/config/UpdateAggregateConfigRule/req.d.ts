export interface UpdateAggregateConfigRuleRequest {
    /**
     * 规则ID。
     * 关于如何获取规则ID，请参见[ListAggregateConfigRules](~~264148~~)。
     * @example `cr-4e3d626622af0080****`
     */
    "ConfigRuleId": string;
    /**
     * 规则描述。
     * @example `最多可以定义6组标签。如果资源同时具有指定的所有标签，则视为“合规”。`
     */
    "Description"?: string;
    /**
     * 规则参数。
     * @example `{"tag1Key":"ECS","tag1Value":"test"}`
     */
    "InputParameters"?: any;
    /**
     * 规则执行周期。取值：
     * - One_Hour：1小时。
     * - Three_Hours：3小时。
     * - Six_Hours：6小时。
     * - Twelve_Hours：12小时。
     * - TwentyFour_Hours：24小时。
     * > 当`ConfigRuleTriggerTypes`设置为`ScheduledNotification`时，需要设置该参数。
     * @example `One_Hour`
     */
    "MaximumExecutionFrequency"?: string;
    /**
     * 规则评估的资源类型。多个资源类型之间用半角逗号（,）分隔。
     * @example `ACS::ECS::Instance`
     */
    "ResourceTypesScope"?: string[];
    /**
     * 规则风险等级。取值：
     * - 1：高风险。
     * - 2：中风险。
     * - 3：低风险。
     * @example `3`
     */
    "RiskLevel"?: number;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。`ClientToken`只支持ASCII字符，且不能超过64个字符。
     * @example `1594295238-f9361358-5843-4294-8d30-b5183fac****`
     */
    "ClientToken"?: string;
    /**
     * 规则仅对指定地域ID中的资源生效。多个地域ID之间用半角逗号（,）分隔。
     * > 仅适用于规则模板。
     * @example `cn-hangzhou`
     */
    "RegionIdsScope"?: string;
    "ExcludeRegionIdsScope"?: string;
    /**
     * 规则对指定资源ID无效，即不对该资源执行评估。多个资源ID之间用半角逗号（,）分隔。
     * > 仅适用于规则模板。
     * @example `lb-t4nbowvtbkss7t326****`
     */
    "ExcludeResourceIdsScope"?: string;
    "ResourceIdsScope"?: string;
    /**
     * 规则触发机制。取值：
     * - ConfigurationItemChangeNotification：配置变更。
     * - ScheduledNotification：周期执行。
     * > 仅自定义规则能修改该参数。
     * @example `ConfigurationItemChangeNotification`
     */
    "ConfigRuleTriggerTypes"?: string;
    /**
     * 账号组ID。
     * 关于如何获取账号组ID，请参见[ListAggregators](~~255797~~)。
     * @example `ca-a4e5626622af0079****`
     */
    "AggregatorId": string;
    /**
     * 规则仅对指定资源组ID中的资源生效。多个资源组ID之间用半角逗号（,）分隔。
     * > 仅适用于规则模板。
     * @example `rg-aekzc7r7rhx****`
     */
    "ResourceGroupIdsScope"?: string;
    "ExcludeResourceGroupIdsScope"?: string;
    /**
     * 规则仅对绑定指定标签的资源生效。
     * > 仅适用于规则模板，且`TagKeyScope`和`TagValueScope`必须同时设置。
     * @example `ECS`
     */
    "TagKeyScope"?: string;
    /**
     * 规则仅对绑定指定标签的资源生效。
     * > 仅适用于规则模板，且`TagKeyScope`和`TagValueScope`必须同时设置。
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
    /**
     * 规则名称。
     * 关于如何获取规则名称，请参见[ListAggregateConfigRules](~~264148~~)。
     * @example `存在所有指定标签`
     */
    "ConfigRuleName"?: string;
    /**
     * 参数`TagKeyScope`取多值时的逻辑关系，例如：当参数`TagKeyScope`取值为`ECS,OSS`时，如果该参数为`AND`，则表示规则仅对同时绑定标签`ECS`和`OSS`的资源生效。取值：
     * - AND：与。
     * - OR：或。
     * @example `AND`
     */
    "TagKeyLogicScope"?: string;
    /**
     * 规则仅对指定资源目录ID中成员账号内的资源生效。
     * > - 该参数仅作用于全局账号组的规则。
     * > - 仅适用于规则模板。
     * @example `fd-ZtHsRH****`
     */
    "FolderIdsScope"?: string;
    /**
     * 规则对指定资源目录ID中成员账号内的资源无效，即不对该资源目录ID中成员账号内的资源执行评估。多个资源目录ID之间用半角逗号（,）分隔。
     * > - 该参数仅作用于全局账号组的规则。
     * > - 仅适用于规则模板。
     * @example `fd-pWmkqZ****`
     */
    "ExcludeFolderIdsScope"?: string;
    /**
     * 规则对指定成员账号内的资源无效，即不对该账号内的资源执行评估。多个成员账号ID之间用半角逗号（,）分隔。
     * > 仅适用于规则模板。
     * @example `120886317861****`
     */
    "ExcludeAccountIdsScope"?: string;
    "AccountIdsScope"?: string;
}
