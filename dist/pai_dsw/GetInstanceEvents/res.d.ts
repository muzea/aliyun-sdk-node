export interface GetInstanceEventsResponse {
    /**
     * 请求ID。
     * @example `E7D55162-4489-1619-AAF5-3F97D5FCA948`
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
     * 返回结果说明。
     * @example `XXX
    `
     */
    Message: string;
    /**
     * 状态码，可能值：
     * - InternalError：内部错误（除了参数验证错误外的其他错误，目前都归类到内部错误）。
     * - ValidationError：参数验证错误。
     * @example `None`
     */
    Code: string;
    /**
     * HTTP状态码，可能值：
     * - 400：输入参数错误
     * - 404：实例不存在
     * - 200：请求正常
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 实例ID。
     * @example `dsw-730xxxxxxxxxx`
     */
    InstanceId: string;
    /**
     * 实例事件列表。
     */
    Events: string[];
}
