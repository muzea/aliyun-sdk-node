export interface CreateFileProtectRuleResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `EC7C8984-D108-516F-9D36-3DF1D1228CCA`
     */
    RequestId: string;
    /**
     * 规则ID。
     * @example `123`
     */
    RuleId: number;
}
