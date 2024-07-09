export interface StartConfigRuleEvaluationResponse {
    /**
     * 请求ID。
     * @example `D31EEAD7-BF1E-5927-977A-AFF9342A7273`
     */
    RequestId: string;
    /**
     * 规则执行结果。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Result: boolean;
}
