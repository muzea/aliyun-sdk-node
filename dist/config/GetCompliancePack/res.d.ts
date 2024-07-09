export interface GetCompliancePackResponse {
    /**
     * 请求ID。
     * @example `6EC7AED1-172F-42AE-9C12-295BC2ADB751`
     */
    RequestId: string;
    /**
     * 合规包信息。
     */
    CompliancePack: {
        /**
         * 合规包状态。取值：
         * - ACTIVE：正常。
         * - CREATING：创建中。
         * @example `ACTIVE`
         */
        Status: string;
        /**
         * 合规包ID。
         * @example `cp-a8a8626622af0082****`
         */
        CompliancePackId: string;
        /**
         * 合规包风险等级。取值：
         * - 1：高风险。
         * - 2：中风险。
         * - 3：低风险。
         * @example `1`
         */
        RiskLevel: number;
        /**
         * 合规包描述。
         * @example `基于等保2.0三级标准，提供持续检测合规性的建议模板，帮助您提前自检并修复问题，以便快速通过正式检测。`
         */
        Description: string;
        /**
         * 合规包中的规则列表。
         */
        ConfigRules: {
            /**
             * 规则模板标识。
             * @example `eip-bandwidth-limit`
             */
            ManagedRuleIdentifier: string;
            /**
             * 规则名称。
             * @example `弹性IP实例带宽满足最低要求`
             */
            ConfigRuleName: string;
            /**
             * 规则ID。
             * @example `cr-a260626622af0005****`
             */
            ConfigRuleId: string;
            /**
             * 规则参数信息。
             */
            ConfigRuleParameters: {
                /**
                 * 规则中参数是否必填。取值：
                 * - true：必填。
                 * - false：非必填。
                 * @example `true`
                 */
                Required: boolean;
                /**
                 * 规则参数名称。
                 * @example `bandwidth`
                 */
                ParameterName: string;
                /**
                 * 规则参数值。
                 * @example `10`
                 */
                ParameterValue: string;
            }[];
            /**
             * 规则描述。
             * @example `弹性IP实例可用带宽大于等于指定参数值，视为“合规”。默认值：10 MB。`
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
            /**
             * 规则评估的资源类型。多个资源类型之间用半角逗号（,）分隔。
             * @example `ACS::EIP::EipAddress`
             */
            ResourceTypesScope: string;
        }[];
        /**
         * 当前合规包模板信息，模板中规则列表不包含自定义函数规则。可基于模板信息快速为其他账号或账号组创建同样的合规包。
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
        TemplateContent: string;
        /**
         * 合规包名称。
         * @example `等保三级预检合规包`
         */
        CompliancePackName: string;
        /**
         * 合规包归属的阿里云账号ID。
         * @example `100931896542****`
         */
        AccountId: number;
        /**
         * 合规包模板ID。
         * @example `ct-5f26ff4e06a300c4****`
         */
        CompliancePackTemplateId: string;
        /**
         * 创建合规包的时间戳。单位：毫秒。
         * @example `1624245766000`
         */
        CreateTimestamp: number;
        /**
         * 资源组生效范围。
         */
        Scope: {
            ExcludeRegionIdsScope: string;
            ResourceIdsScope: string;
            ExcludeResourceGroupIdsScope: string;
            /**
             * 合规包仅对绑定指定标签键的资源生效。
             * @example `ECS`
             */
            TagKeyScope: string;
            TagsScope: {
                TagKey: string;
                TagValue: string;
            }[];
            ExcludeTagsScope: {
                TagKey: string;
                TagValue: string;
            }[];
            /**
             * 合规包仅对绑定指定标签键值对的资源生效。
             * @example `test`
             */
            TagValueScope: string;
            /**
             * 合规包仅对指定地域ID中的资源生效。
             * @example `cn-hangzhou`
             */
            RegionIdsScope: string;
            /**
             * 合规包对指定资源ID无效，即不对该资源执行评估。
             * @example `eip-8vbf3x310fn56ijfd****`
             */
            ExcludeResourceIdsScope: string;
            /**
             * 合规包仅对指定资源组ID中的资源生效。
             * @example `rg-aekzc7r7rhx****`
             */
            ResourceGroupIdsScope: string;
        };
    };
}
