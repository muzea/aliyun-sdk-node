export interface GetIdleInstanceCullerResponse {
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
     * 错误信息。
     * @example `"XXX"`
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
    /**
     * CPU使用率阈值，单位是百分比，取值1~100，低于此值则认为实例当前处于闲置。
     * @example `20`
     */
    CpuPercentThreshold: number;
    /**
     * GPU使用率阈值，单位是百分比，取值1~100。如果实例为GPU类型，则此参数生效。CPU和GPU同时低于阈值则认为指定实例处于闲置。
     * @example `10`
     */
    GpuPercentThreshold: number;
    /**
     * 闲置等待时间阈值，单位是分钟。如果闲置时长超过此值，将自动停止DSW实例。
     * @example `60`
     */
    MaxIdleTimeInMinutes: number;
    /**
     * 实例当前闲置时长，单位是分钟。
     * @example `30`
     */
    IdleTimeInMinutes: number;
}
