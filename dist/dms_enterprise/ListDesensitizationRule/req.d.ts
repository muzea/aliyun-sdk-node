export interface ListDesensitizationRuleRequest {
    /**
     * 开始页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页数据量。最大值不超过100。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 脱敏算法。
     * @example `HASH`
     */
    "RuleType"?: string;
    /**
     * 脱敏算法类型。
     * @example `MD5`
     */
    "FuncType"?: string;
    /**
     * 脱敏规则名称。
     * @example `脱敏规则测试`
     */
    "RuleName"?: string;
    /**
     * 脱敏规则ID。
     * @example `1`
     */
    "RuleId"?: number;
    /**
     * 租户ID。
     * > 鼠标移动到界面右上角的头像处，查看租户ID。具体操作，请参见[查看租户信息](~~181330~~)。
     * @example `3***`
     */
    "Tid"?: number;
}
