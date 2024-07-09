export interface GetControlPolicyRequest {
    /**
     * 管控策略ID。
     * @example `cp-SImPt8GCEwiq****`
     */
    "PolicyId": string;
    /**
     * 指定返回结果中管控策略描述的语言。取值：
     * - zh-CN（默认值）：中文。
     * - en：英文。
     * - ja：日文。
     * > 该参数仅在系统管控策略时有效。
     * @example `zh-CN`
     */
    "Language"?: string;
}
