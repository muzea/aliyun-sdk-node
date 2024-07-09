export interface DeleteIdleInstanceCullerResponse {
    /**
     * 请求ID。
     * @example `E7D55162-4489-1619-AAF5-3F97D5FC****`
     */
    RequestId: string;
    /**
     * 成功标志，可能值：
     * - true
     * - false
     * @example `true`
     */
    Success: boolean;
    /**
     * 操作结果信息。
     * - 执行成功时，返回结果为null。
     * - 执行失败时，描述失败原因。
     * @example `null`
     */
    Message: string;
    /**
     * 状态码，可能值：
     * - InternalError：内部错误（除了参数验证错误外的其他错误，目前都归类到内部错误）。
     * - ValidationError：参数验证错误。
     * @example `ValidationError`
     */
    Code: string;
    /**
     * 实例ID。
     * @example `dsw-730xxxxxxxxxx`
     */
    InstanceId: string;
}
