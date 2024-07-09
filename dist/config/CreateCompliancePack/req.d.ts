export interface CreateCompliancePackRequest {
    /**
     * 合规包模板ID。
     * 关于如何获取合规包模板ID，请参见[ListCompliancePackTemplates](~~261176~~)。
     * @example `ct-5f26ff4e06a300c4****`
     */
    "CompliancePackTemplateId"?: string;
    /**
     * 合规包名称。
     * @example `等保三级预检合规包`
     */
    "CompliancePackName": string;
    /**
     * 合规包描述。
     * @example `等保三级预检合规包`
     */
    "Description"?: string;
    /**
     * 合规包风险等级。取值：
     * - 1：高风险。
     * - 2（默认值）：中风险。
     * - 3：低风险。
     * @example `2`
     */
    "RiskLevel"?: number;
    /**
     * 合规包中的规则列表。
     * > 本参数和`TemplateContent`必须设置其中一个。
     */
    "ConfigRules"?: {
        /**
         * 规则模板标识。配置审计根据规则模板标识自动创建规则，并将该规则加入到当前合规包中。
         * > `ManagedRuleIdentifier`和`ConfigRuleId`二选一，当两个参数都设置时，以`ConfigRuleId`为准确。
         * @example `eip-bandwidth-limit`
         */
        ManagedRuleIdentifier: string;
        /**
         * 规则名称。
         * @example `弹性IP实例带宽满足最低要求`
         */
        ConfigRuleName: string;
        /**
         * 规则参数信息。
         */
        ConfigRuleParameters: {
            /**
             * 规则参数名称。
             * 参数`ParameterName`和`ParameterValue`必须同时设置，或同时不设置。如果规则模板存在参数，且无默认值，则您必须设置该参数。
             * @example `bandwidth`
             */
            ParameterName: string;
            /**
             * 规则参数值。
             * 参数`ParameterName`和`ParameterValue`必须同时设置，或同时不设置。如果规则模板存在参数，且无默认值，则您必须设置该参数。
             * @example `10`
             */
            ParameterValue: string;
        }[];
        /**
         * 规则ID。配置审计将已有规则加入到当前合规包中。
         * `ManagedRuleIdentifier`和`ConfigRuleId`二选一，当两个参数都设置时，以`ConfigRuleId`为准确。
         * @example `cr-e918626622af000f****`
         */
        ConfigRuleId: string;
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
     * 用于生成合规包的模板信息。模板内容可以从已有合规包详情API中查看，或者参考[编写配置化合规包模板](~~2659733~~)进行编写。
     * > 本参数和ConfigRules必须设置其中一个。
     * @example `{
        "configRuleTemplates": [
            {
                "configRuleName": "自定义条件规则示例",
                "scope": {
                    "complianceResourceTypes": [
                        "ACS::ECS::Instance"
                    ]
                },
                "description": "",
                "source": {
                    "owner": "CUSTOM_CONFIGURATION",
                    "identifier": "acs-config-configuration",
                    "sourceDetails": [
                        {
                            "messageType": "ScheduledNotification",
                            "maximumExecutionFrequency": "Twelve_Hours"
                        },
                        {
                            "messageType": "ConfigurationItemChangeNotification"
                        }
                    ],
                    "conditions": "{\"ComplianceConditions\":\"{\\\"operator\\\":\\\"and\\\",\\\"children\\\":[{\\\"operator\\\":\\\"GreaterOrEquals\\\",\\\"featurePath\\\":\\\"$.Cpu\\\",\\\"featureSource\\\":\\\"CONFIGURATION\\\",\\\"desired\\\":\\\"2\\\"}]}\"}"
                },
                "inputParameters": {}
            },
            {
                "configRuleName": "OSS存储空间Referer在指定的防盗链白名单中",
                "scope": {
                    "complianceResourceTypes": [
                        "ACS::OSS::Bucket"
                    ]
                },
                "description": "OSS存储空间开启防盗链并且Referer在指定白名单中，视为“合规”。",
                "source": {
                    "owner": "ALIYUN",
                    "identifier": "oss-bucket-referer-limit",
                    "sourceDetails": [
                        {
                            "messageType": "ConfigurationItemChangeNotification"
                        }
                    ]
                },
                "inputParameters": {
                    "allowEmptyReferer": "true",
                    "allowReferers": "http://www.aliyun.com"
                }
            }
        ]
    }`
     */
    "TemplateContent"?: string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。`ClientToken`只支持ASCII字符，且不能超过64个字符。
     * @example `1594295238-f9361358-5843-4294-8d30-b5183fac****`
     */
    "ClientToken"?: string;
    /**
     * 规则是否支持快速启用。取值：
     * - true：合规包快捷启用时会开启该规则。
     * - false（默认值）：不启用。
     * @example `false`
     */
    "DefaultEnable"?: boolean;
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
     * @example `rg-aekzdibsjjc****`
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
