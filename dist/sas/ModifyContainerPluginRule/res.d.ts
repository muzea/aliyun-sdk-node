export interface ModifyContainerPluginRuleResponse {
    /**
     * 防逃逸规则列表
     */
    Data: {
        /**
         * 规则id。
         * @example `600640`
         */
        RuleId: number;
        /**
         * 规则名称。
         * @example `test555`
         */
        RuleName: string;
        /**
         * 对应的开关id
         * @example `USER-CONTAINER-RULE-SWITCH-TYPE_xxx`
         */
        SwitchId: string;
    };
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `D03DD0FD-6041-5107-AC00-383E28F1****`
     */
    RequestId: string;
}
