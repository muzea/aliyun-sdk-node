export interface AddContainerPluginRuleResponse {
    /**
     * Data：自定义结果数据。
     */
    Data: {
        /**
         * 规则ID。
         * @example `219`
         */
        RuleId: number;
        /**
         * 规则名称。
         * @example `test2`
         */
        RuleName: string;
        /**
         * 对应的开关ID。
         * @example `USER-CONTAINER-RULE-SWITCH-TYPE_xxxx`
         */
        SwitchId: string;
    };
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `24A20733-10A0-4AF6-BE6B-E3322413BB68`
     */
    RequestId: string;
}
