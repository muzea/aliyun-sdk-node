export interface ListEventCenterRuleNameResponse {
    /**
     * 请求ID
     * @example `031572FA-7D8F-4C05-B790-1071E0E05DE6`
     */
    RequestId: string;
    /**
     * 返回值
     * @example `success`
     */
    Code: string;
    /**
     * 是否成功
     * @example `true`
     */
    IsSuccess: boolean;
    /**
     * 事件规则名称列表
     * @example `[{'RuleName': 'mlf', 'RuleId': 'crecr-73q93pgljm1pc2fp'}]`
     */
    RuleNames: {
        /**
         * 事件规则ID
         * @example `crecr-n6pbhgjxtl*****`
         */
        RuleId: string;
        /**
         * 事件规则名称
         * @example `test-chain`
         */
        RuleName: string;
    }[];
}
