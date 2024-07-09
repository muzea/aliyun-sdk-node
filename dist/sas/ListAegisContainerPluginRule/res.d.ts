export interface ListAegisContainerPluginRuleResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `CE500770-42D3-442E-9DDD-156E0F9F3B45`
     */
    RequestId: string;
    /**
     * 数据分页信息。
     */
    PageInfo: {
        /**
         * 分页查询时，当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，每页最多显示的数据条数。
         * @example `20`
         */
        PageSize: number;
        /**
         * 数据的总条数。
         * @example `69`
         */
        TotalCount: number;
    };
    /**
     * 规则列表。
     */
    RuleList: {
        /**
         * 创建时间。单位：毫秒。
         * @example `1676355025000`
         */
        GmtCreate: number;
        /**
         * 当前实体类型的修改时间。单位：毫秒。
         * @example `1681985833000`
         */
        GmtModified: number;
        /**
         * 规则id。
         * @example `30****`
         */
        RuleId: number;
        /**
         * 规则名称。
         * @example `test-18****`
         */
        RuleName: string;
        /**
         * 规则描述。
         * @example `system_call`
         */
        RuleDescription: string;
        /**
         * 规则模板ID。通过ListSystemClientRules获取模板ID。
         * @example `868**`
         */
        RuleTemplateId: string;
        /**
         * 规则模板名称。
         * @example `system_call`
         */
        RuleTemplateName: string;
        /**
         * 规则动作模式。取值：
         * - **1**：告警
         * - **2**：拦截
         * @example `1`
         */
        Mode: number;
        /**
         * 规则项列表。
         */
        SelectedPolicy: string[];
        /**
         * 规则对应的开关ID。
         * @example `USER-ENABLE-SWITCH-TYPE_****`
         */
        SwitchId: string;
        /**
         * 白名单镜像列表。
         */
        WhiteImages: string[];
    }[];
}
