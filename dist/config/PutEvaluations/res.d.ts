export interface PutEvaluationsResponse {
    /**
     * 请求ID。
     * @example `EDB324E2-A202-5FE4-A9BC-31E2C34F78A4`
     */
    RequestId: string;
    /**
     * 自定义函数规则评估结果的提交状态。取值：
     * - true：成功。
     * - fasle：失败。
     * @example `true`
     */
    Result: boolean;
}
