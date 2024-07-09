export interface AddClientUserDefineRuleResponse {
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `379a9b8f-107b-4630-9e95-2299a1ea****`
     */
    RequestId: string;
    /**
     * 自定义规则标识。
     */
    UserDefineRuleAddResult: {
        /**
         * 规则对应的开关ID。
         * @example `USER-DEFINE-RULE-SWITCH-TYPE_200****`
         */
        SwitchId: string;
        /**
         * 规则ID。
         * @example `1`
         */
        Id: number;
        /**
         * 操作系统类型。取值：
         * - **windows**：widows
         * - **linux**：linux
         * - **all**：全部
         * @example `linux`
         */
        Platform: string;
    };
}
