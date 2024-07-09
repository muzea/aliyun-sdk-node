export interface GetAggregateConfigRuleResponse {
    /**
     * 请求ID。
     * @example `811234F4-C3AB-4D15-B90B-F55016D1B5AA`
     */
    RequestId: string;
    /**
     * 规则列表。
     */
    ConfigRule: {
        /**
         * 规则风险等级。取值：
         * - 1：高风险。
         * - 2：中风险。
         * - 3：低风险。
         * @example `1`
         */
        RiskLevel: number;
        /**
         * 规则参数信息。
         * @example `{"tag1Key":"ECS","tag1Value":"test"}`
         */
        InputParameters: any;
        /**
         * 规则来源信息。
         */
        Source: {
            /**
             * 规则来源详情。
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
                 * 事件来源。
                 * > 目前仅支持配置审计事件：aliyun.config。
                 * @example `aliyun.config`
                 */
                EventSource: string;
                /**
                 * 规则执行周期。取值：
                 * - One_Hour：1小时。
                 * - Three_Hours：3小时。
                 * - Six_Hours：6小时。
                 * - Twelve_Hours：12小时。
                 * - TwentyFour_Hours：24小时。
                 * @example `One_Hour`
                 */
                MaximumExecutionFrequency: string;
            }[];
            /**
             * 规则来源的归属。取值：
             * - CUSTOM_FC：自定义规则。
             * - ALIYUN：规则模板。
             * @example `ALIYUN`
             */
            Owner: string;
            /**
             * 规则标识。
             * - 如果是规则模板，该参数为规则模板标识。
             * - 如果是自定义规则，该参数为函数ARN。
             * @example `acs:fc:cn-hangzhou:100931896542****:services/ConfigService.LATEST/functions/specific-config`
             */
            Identifier: string;
        };
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
         * 规则执行周期。
         * - One_Hour：1小时。
         * - Three_Hours：3小时。
         * - Six_Hours：6小时。
         * - Twelve_Hours：12小时。
         * - TwentyFour_Hours：24小时。
         * @example `One_Hour`
         */
        MaximumExecutionFrequency: string;
        /**
         * 规则模板详情。
         */
        ManagedRule: {
            /**
             * 规则模板来源详情。
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
                 * 事件来源。
                 * > 目前仅支持配置审计事件：aliyun.config。
                 * @example `aliyun.config`
                 */
                EventSource: string;
                /**
                 * 规则执行周期。
                 * - One_Hour：1小时。
                 * - Three_Hours：3小时。
                 * - Six_Hours：6小时。
                 * - Twelve_Hours：12小时。
                 * - TwentyFour_Hours：24小时。
                 * @example `One_Hour`
                 */
                MaximumExecutionFrequency: string;
            }[];
            /**
             * 规则模板描述。
             * @example `ECS磁盘未因欠费或安全等原因而被锁定，视为“合规”。`
             */
            Description: string;
            /**
             * 规则模板标签列表。
             */
            Labels: string[];
            /**
             * 规则模板标识。
             * @example `ram-user-mfa-check`
             */
            Identifier: string;
            /**
             * 规则模板可选参数详情。
             * @example `{}`
             */
            OptionalInputParameterDetails: any;
            /**
             * 规则模板名称。
             * @example `RAM用户开启MFA`
             */
            ManagedRuleName: string;
            /**
             * 规则模板必选参数详情。
             * @example `{}`
             */
            CompulsoryInputParameterDetails: any;
        };
        /**
         * 规则模板ARN。
         * @example `acs:config::100931896542****:rule/cr-7f7d626622af0041****`
         */
        ConfigRuleArn: string;
        /**
         * 规则模板描述。
         * @example `RAM用户开启MFA，视为“合规”。`
         */
        Description: string;
        /**
         * 规则创建者信息。
         */
        CreateBy: {
            /**
             * 合规包ID。
             * @example `cp-541e626622af008****`
             */
            CompliancePackId: string;
            /**
             * 账号组名称。
             * @example `Test_Group`
             */
            AggregatorName: string;
            /**
             * 合规包名称。
             * @example `OSS合规基线`
             */
            CompliancePackName: string;
            /**
             * 规则创建者名称。
             * @example `Alice`
             */
            CreatorName: string;
            /**
             * 规则创建者类型。仅支持`AGGREGATOR`（账号组）。
             * @example `AGGREGATOR`
             */
            CreatorType: string;
            /**
             * 规则创建者的账号ID。
             * @example `100931896542****`
             */
            CreatorId: string;
            /**
             * 账号组ID。
             * @example `ca-04b3fd170e340007****`
             */
            AggregatorId: string;
        };
        /**
         * 规则名称。
         * @example `RAM用户开启MFA`
         */
        ConfigRuleName: string;
        /**
         * 规则执行状态。
         */
        ConfigRuleEvaluationStatus: {
            /**
             * 规则最近一次执行的错误码。
             * @example `TimeOut`
             */
            LastErrorCode: string;
            /**
             * 规则最近一次调用成功的结束时间戳。单位：毫秒。
             * @example `1624932227486`
             */
            LastSuccessfulEvaluationTimestamp: number;
            /**
             * 规则首次激活时间戳。
             * @example `1624932221993`
             */
            FirstActivatedTimestamp: number;
            /**
             * 规则是否已执行评估。取值：
             * - true：规则已执行评估。
             * - false：规则未执行评估。
             * @example `true`
             */
            FirstEvaluationStarted: boolean;
            /**
             * 规则最近一次调用成功的开始时间戳。单位：毫秒。
             * @example `1624932227476`
             */
            LastSuccessfulInvocationTimestamp: number;
            /**
             * 规则最近一次执行的错误信息。
             * @example `time out`
             */
            LastErrorMessage: string;
            /**
             * 规则最近一次调用失败的结束时间戳。单位：毫秒。
             * @example `1614687022000`
             */
            LastFailedEvaluationTimestamp: number;
            /**
             * 规则最近一次调用失败的开始时间戳。单位：毫秒。
             * @example `1614687022000`
             */
            LastFailedInvocationTimestamp: number;
        };
        /**
         * 规则ID。
         * @example `cr-7f7d626622af0041****`
         */
        ConfigRuleId: string;
        /**
         * 规则最近一次更新的时间戳。单位：毫秒。
         * @example `1614687022000`
         */
        ModifiedTimestamp: number;
        /**
         * 创建规则的时间戳。单位：毫秒。
         * @example `1604684022000`
         */
        CreateTimestamp: number;
        /**
         * 规则评估的资源类型。
         * @example `ACS::RAM::User`
         */
        ResourceTypesScope: string;
        ExcludeRegionIdsScope: string;
        /**
         * 规则只评估所属地域ID的资源。
         * @example `global`
         */
        RegionIdsScope: string;
        /**
         * 规则评估排除的资源ID。
         * @example `23642660635687****`
         */
        ExcludeResourceIdsScope: string;
        ResourceIdsScope: string;
        /**
         * 规则只评估所属资源组ID的资源。
         * @example `rg-aekzdibsjjc****`
         */
        ResourceGroupIdsScope: string;
        ExcludeResourceGroupIdsScope: string;
        /**
         * 规则只评估所属标签键的资源。
         * @example `RAM`
         */
        TagKeyScope: string;
        /**
         * 规则只评估所属标签值的资源。
         * @example `MFA`
         */
        TagValueScope: string;
        TagsScope: {
            TagKey: string;
            TagValue: string;
        }[];
        ExcludeTagsScope: {
            TagKey: string;
            TagValue: string;
        }[];
        /**
         * 规则触发机制。取值：
         * - ConfigurationItemChangeNotification：配置变更。
         * - ScheduledNotification：周期执行。
         * @example `ConfigurationItemChangeNotification`
         */
        ConfigRuleTriggerTypes: string;
        /**
         * 参数`TagKeyScope`取多值时的逻辑关系，例如：当参数`TagKeyScope`取值为`ECS,OSS`时，如果该参数为`AND`，则表示规则仅对同时绑定标签`ECS`和`OSS`的资源生效。取值：
         * - AND：与。
         * - OR：或。
         * @example `AND`
         */
        TagKeyLogicScope: string;
        /**
         * 规则仅对指定资源目录ID中成员账号内的资源生效。
         * @example `fd-ZtHsRH****`
         */
        FolderIdsScope: string;
        /**
         * 规则对指定资源目录ID中成员账号内的资源无效，即不对该资源目录ID中成员账号内的资源执行评估。
         * @example `fd-pWmkqZ****`
         */
        ExcludeFolderIdsScope: string;
        /**
         * 规则对指定成员账号内的资源无效，即不对该账号内的资源执行评估。
         * @example `120886317861****`
         */
        ExcludeAccountIdsScope: string;
        AccountIdsScope: string;
        /**
         * 规则合规统计结果。
         */
        Compliance: {
            /**
             * 合规统计结果。取值：
             * - COMPLIANT：合规。
             * - NON_COMPLIANT：不合规。
             * - NOT_APPLICABLE：不适用。
             * - INSUFFICIENT_DATA：无数据。
             * @example `NON_COMPLIANT`
             */
            ComplianceType: string;
            /**
             * 合规统计结果对应的评估资源数量。
             * @example `3`
             */
            Count: number;
        };
        /**
         * 规则归属阿里云账号ID。
         * @example `120886317861****`
         */
        AccountId: number;
    };
}
