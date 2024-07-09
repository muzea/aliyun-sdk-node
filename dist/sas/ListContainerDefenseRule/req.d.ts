export interface ListContainerDefenseRuleRequest {
    /**
     * 规则类型。取值：
     * - 1: 系统规则
     * - 2: 用户规则
     * @example `1`
     */
    "RuleType"?: number;
    /**
     * 条件列表。
     */
    "Conditions"?: {
        /**
         * 条件类型。支持以下类型：
         * - **ruleName**：规则名称。
         * @example `ruleName`
         */
        Type: string;
        /**
         * 条件内容。
         * @example `auto-test-rule-**`
         */
        Value: string;
    }[];
    /**
     * 设置从返回结果的第几页开始显示查询结果。默认值为**1**，表示从第1页开始显示。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 指定分页查询时，每页显示的数据最大条数。每页默认显示的数据条数为20条，PageSize参数值为空时，将默认返回20条数据。
     * > 建议PageSize取值不要为空。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 请求和接收消息的语言类型，默认值**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 是否系统默认规则。><notice>此参数已废弃。></notice>
     * @example `1`
     */
    "IsDefaultRule"?: number;
}
