export interface AddDesensitizationRuleRequest {
    /**
     * 规则名称。
     * @example `脱敏算法测试`
     */
    "RuleName": string;
    /**
     * 脱敏算法。
     * @example `HASH`
     */
    "RuleType": string;
    /**
     * 规则描述。
     * @example `哈希算法`
     */
    "RuleDescription"?: string;
    /**
     * 脱敏算法类型。
     * @example `MD5`
     */
    "FunctionType": string;
    /**
     * 算法参数。
     */
    "FunctionParams"?: any[];
    /**
     * 租户ID。
     * > 鼠标移动到界面右上角的头像处，查看租户ID。具体操作，请参见[查看租户信息](~~181330~~)。
     * @example `3***`
     */
    "Tid"?: number;
}
