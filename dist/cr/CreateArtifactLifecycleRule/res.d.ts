export interface CreateArtifactLifecycleRuleResponse {
    /**
     * 返回码
     * @example `success`
     */
    Code: string;
    /**
     * 调用是否成功，取值：
     * - `true`：调用成功
     * - `false`：调用失败
     * @example `True`
     */
    IsSuccess: boolean;
    /**
     * 请求ID
     * @example `0AA66379-B880-5123-9F6A-96BB25D****`
     */
    RequestId: string;
    /**
     * 规则ID
     * @example `cralr-b6thg027zmk1****`
     */
    RuleId: string;
}
