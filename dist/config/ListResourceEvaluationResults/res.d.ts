export interface ListResourceEvaluationResultsResponse {
    /**
     * 请求ID。
     * @example `25C89DDB-BB79-487D-88C3-4A561F21EFC4`
     */
    RequestId: string;
    /**
     * 资源评估结果。
     */
    EvaluationResults: {
        /**
         * 查询下一页使用的Token。
         * @example `IWBjqMYSy0is7zSMGu16****`
         */
        NextToken: string;
        /**
         * 单次请求返回结果的最大条数。
         * @example `10`
         */
        MaxResults: number;
        /**
         * 资源评估结果列表。
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
             * @example `1624932227595`
             */
            ResultRecordedTimestamp: number;
            /**
             * 不合规资源的补充信息。可能包含以下信息：
             * - `configuration`：资源当前实际配置，即资源不合规配置。
             * - `desiredValue`：资源期望配置，即资源合规配置。
             * - `operator`：资源当前配置和期望配置之间的比较运算符。
             * - `property`：当前配置在资源属性结构体中的JSON路径。
             * - `reason`：资源不合规原因。
             * @example `{\"configuration\":\"false\",\"desiredValue\":\"True\",\"operator\":\"StringEquals\",\"property\":\"$.LoginProfile.MFABindRequired\"}`
             */
            Annotation: string;
            /**
             * 规则被触发执行评估的时间戳。单位：毫秒。
             * @example `1624932227157`
             */
            ConfigRuleInvokedTimestamp: number;
            /**
             * 规则触发机制。取值：
             * - ConfigurationItemChangeNotification：配置变更。
             * - ScheduledNotification：周期执行。
             * @example `ScheduledNotification`
             */
            InvokingEventMessageType: string;
            /**
             * 资源评估结果标识符。
             */
            EvaluationResultIdentifier: {
                /**
                 * 时间轴展示的时间戳。单位：毫秒。
                 * @example `1624932227157`
                 */
                OrderingTimestamp: number;
                /**
                 * 资源评估结果中的资源信息。
                 */
                EvaluationResultQualifier: {
                    /**
                     * 规则ARN。
                     * @example `acs:config::100931896542****:rule/cr-7f7d626622af0041****`
                     */
                    ConfigRuleArn: string;
                    /**
                     * 资源类型。
                     * @example `ACS::RAM::User`
                     */
                    ResourceType: string;
                    /**
                     * 规则名称。
                     * @example `RAM用户开启MFA`
                     */
                    ConfigRuleName: string;
                    /**
                     * 资源ID。
                     * @example `23642660635396****`
                     */
                    ResourceId: string;
                    /**
                     * 规则ID。
                     * @example `cr-7f7d626622af0041****`
                     */
                    ConfigRuleId: string;
                    /**
                     * 资源名称。
                     * @example `Alice`
                     */
                    ResourceName: string;
                    /**
                     * 资源归属的地域ID。
                     * @example `global`
                     */
                    RegionId: string;
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
             * @example `true`
             */
            RemediationEnabled: boolean;
        }[];
    };
}
