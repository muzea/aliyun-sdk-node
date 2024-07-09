export interface PutEventRuleResponse {
    /**
     * 状态码。
     * >200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `The Request is not authorization.`
     */
    Message: string;
    /**
     * 创建或修改事件报警规则时，返回影响的行数。
     * @example `1`
     */
    Data: string;
    /**
     * 请求ID。
     * @example `0B47C47B-E68A-4429-BB23-370E91889C7D`
     */
    RequestId: string;
    /**
     * 操作是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
}
