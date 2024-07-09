export interface ListConfigRuleEvaluationResultsResponse {
    /**
     * 请求ID。
     * @example `2A4A33BD-8186-4D60-91B9-42174EED75B5`
     */
    RequestId: string;
    /**
     * 规则评估结果。
     */
    EvaluationResults: {
        /**
         * 查询下一页使用的Token。
         * @example `IWBjqMYSy0is7zSMGu16****`
         */
        NextToken: string;
        /**
         * 每页的最大记录数。
         * @example `10`
         */
        MaxResults: number;
        /**
         * 规则评估结果列表。
         */
        EvaluationResultList: {
            /**
             * 规则风险等级。取值：
             * - 1：高风险。
             * - 2：中风险。
             * - 3：低风险。
             * @example `1`
             */
            RiskLevel: number;
            /**
             * 合规评估结果。取值：
             * - COMPLIANT：合规。
             * - NON_COMPLIANT：不合规。
             * - NOT_APPLICABLE：不适用。
             * - INSUFFICIENT_DATA：无数据。
             * - IGNORED：已忽略。
             * @example `NON_COMPLIANT`
             */
            ComplianceType: string;
            /**
             * 产生资源评估结果的时间戳。单位：毫秒。
             * @example `1622802307150`
             */
            ResultRecordedTimestamp: number;
            /**
             * 不合规资源的补充信息。可能包含以下信息：
             * - `configuration`：资源当前实际配置，即资源不合规配置。
             * - `desiredValue`：资源期望配置，即资源合规配置。
             * - `operator`：资源当前配置和期望配置之间的比较运算符。
             * - `property`：当前配置在资源属性结构体中的JSON路径。
             * - `reason`：资源不合规原因。
             * @example `{\"configuration\":\"\",\"desiredValue\":\"\",\"operator\":\"IsNotStringEmpty\",\"property\":\"$.KeyPairName\",\"reason\":\"No property contains.\"}`
             */
            Annotation: string;
            /**
             * 规则被触发执行评估的时间戳。单位：毫秒。
             * @example `1622802307081`
             */
            ConfigRuleInvokedTimestamp: number;
            /**
             * 规则触发机制。取值：
             * - ConfigurationItemChangeNotification：配置变更。
             * - ScheduledNotification：周期执行。
             * @example `ConfigurationItemChangeNotification`
             */
            InvokingEventMessageType: string;
            /**
             * 规则评估结果标识符。
             */
            EvaluationResultIdentifier: {
                /**
                 * 时间轴展示的时间戳。单位：毫秒。
                 * @example `1622802307081`
                 */
                OrderingTimestamp: number;
                /**
                 * 规则评估结果中的资源信息。
                 */
                EvaluationResultQualifier: {
                    /**
                     * 资源归属的阿里云账号ID。
                     * @example `120886317861****`
                     */
                    ResourceOwnerId: number;
                    /**
                     * 规则ARN。
                     * @example `acs:config::120886317861****:rule/cr-cac56457e0d900d3****`
                     */
                    ConfigRuleArn: string;
                    /**
                     * 资源类型。
                     * @example `ACS::ECS::Instance`
                     */
                    ResourceType: string;
                    /**
                     * 规则名称。
                     * @example `ECS实例CPU核数满足最低要求`
                     */
                    ConfigRuleName: string;
                    /**
                     * 资源ID。
                     * @example `i-hp3e4kvhzqn2s11t****`
                     */
                    ResourceId: string;
                    /**
                     * 规则ID。
                     * @example `cr-cac56457e0d900d3****`
                     */
                    ConfigRuleId: string;
                    /**
                     * 资源名称。
                     * @example `iZuf6j91r34rnwawoox****`
                     */
                    ResourceName: string;
                    /**
                     * 资源归属的地域ID。
                     * @example `cn-hangzhou`
                     */
                    RegionId: string;
                    /**
                     * 规则所属的合规包ID。
                     * @example `cp-bcc33457e0d900d5****`
                     */
                    CompliancePackId: string;
                    /**
                     * 已忽略评估结果的自动恢复日期。
                     * > 为空表示不会自动恢复，需要您手动恢复。
                     * @example `2022-06-01`
                     */
                    IgnoreDate: string;
                };
            };
            /**
             * 是否启用修正设置。取值：
             * - true：启用修正设置。
             * - false：不启用修正设置。
             * @example `false`
             */
            RemediationEnabled: boolean;
        }[];
    };
}
