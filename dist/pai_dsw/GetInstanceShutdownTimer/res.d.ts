export interface GetInstanceShutdownTimerResponse {
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
     * @example `"XXX"`
     */
    Message: string;
    /**
     * 状态码，可能值：
     * - InternalError：内部错误（除了参数验证错误外的其他错误，目前都归类到内部错误）
     * - ValidationError：参数验证错误。
     * @example `null`
     */
    Code: string;
    /**
     * HTTP状态码，可能值：
     * - 400
     * - 404
     * @example `null`
     */
    HttpStatusCode: number;
    /**
     * 实例ID。
     * @example `dsw-730xxxxxxxxxx`
     */
    InstanceId: string;
    /**
     * 创建时间。
     * @example `2021-01-12T14:36:01Z`
     */
    GmtCreateTime: string;
    /**
     * 修改时间。
     * @example `2021-01-12T14:36:01Z`
     */
    GmtModifiedTime: string;
    /**
     * 设定关机时间。
     * @example `2021-01-12T14:36:01Z`
     */
    DueTime: string;
    /**
     * 剩余关机时间，单位为毫秒。
     * @example `3600000`
     */
    RemainingTimeInMs: number;
}
