export interface ListConfigRulesForTargetResponse {
    /**
     * 检测任务列表。
     */
    Data: {
        /**
         * 目标节点ID。
         * @example `134254031178****`
         */
        TargetId: string;
        /**
         * 目标节点类型。取值：
         * - USER：当前登录账号。适用单账号模式。
         * - ROOT：资源目录中的Root资源夹。适用多账号模式。
         * - FOLDER：资源目录中的资源夹。适用多账号模式。
         * - ACCOUNT：资源目录中的成员。适用多账号模式。
         * @example `USER`
         */
        TargetType: string;
        /**
         * 规则ID。
         * @example `cr-0lb4866180880069****`
         */
        ConfigRuleId: string;
        /**
         * 账号组ID。
         * 用于在配置审计中查询不合规资源检测报告的具体内容。
         * > 仅多账号模式返回该参数。
         * @example `ca-efdc33dc9b37002d****`
         */
        AggregatorId: string;
        /**
         * 标签键。
         * @example `CostCenter`
         */
        TagKey: string;
        /**
         * 是否启用自动修正。取值：
         * - true：已启用。
         * - false：未启用。
         * @example `false`
         */
        Remediation: boolean;
        /**
         * 标签策略场景。取值：
         * - tags：资源绑定指定标签值场景下的标签策略。
         * - rg_inherit：资源自动继承资源组标签场景下的标签策略。
         * @example `tags`
         */
        PolicyType: string;
        /**
         * 自动修复配置的标签值。
         * @example `Project`
         */
        TagValue: string;
    }[];
    /**
     * 请求ID。
     * @example `7126AECD-D7AD-5073-8E88-DD2BD1FC139E`
     */
    RequestId: string;
    /**
     * 根据`NextToken`判断是否具备下一个查询开始的Token。取值：
     * - 如果`NextToken`为空，即`"NextToken": ""`，表示没有下一个。
     * - 如果`NextToken`有值，则该值就是下一个查询开始的Token。
     * @example `caeba0bbb2be03f84eb48b699f0a****`
     */
    NextToken: string;
}
