export interface ListDesensitizationRuleResponse {
    /**
     * 本次请求条件下的数据总量，此参数为可选参数，默认不返回。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `E76DD2E7-EBAC-5724-B163-19AAC233F8F2`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 请求是否成功，取值：
     * - true：请求成功。
     * - false：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 脱敏规则列表。
     */
    DesensitizationRuleList: {
        /**
         * 脱敏规则名称。
         * @example `脱敏规则测试`
         */
        RuleName: string;
        /**
         * 脱敏算法。
         * @example `HASH`
         */
        RuleType: string;
        /**
         * 规则描述。
         * @example `哈希脱敏算法`
         */
        RuleDesc: string;
        /**
         * 算法类型。
         * @example `MD5`
         */
        FunctionType: string;
        /**
         * 参数。
         * @example `{paramName: salt, paramValue: 1}`
         */
        FuncParams: string;
        /**
         * 示例。
         * @example `[{paramName: testStr, paramValue: 1}]`
         */
        FuncSample: string;
        /**
         * 近期修改脱敏规则用户ID。
         * @example `2`
         */
        LastModifierId: string;
        /**
         * 最后修改脱敏规则的用户名称。
         * @example `测试用户`
         */
        LastModifierName: string;
        /**
         * 使用脱敏规则次数。
         * @example `1`
         */
        ReferenceCount: number;
        /**
         * 脱敏规则ID。
         * @example `23`
         */
        RuleId: number;
    }[];
}
