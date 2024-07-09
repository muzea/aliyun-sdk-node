export interface UpdateTaskFlowScheduleResponse {
    /**
     * 请求ID，用于定位日志，排查问题。
     * @example `7BF38A13-C181-5B5E-97F1-8643F8A10093`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `InvalidParameterValid`
     */
    ErrorCode: string;
    /**
     * 调用失败时，返回的错误信息。
     * @example `InvalidParameterValid`
     */
    ErrorMessage: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功
     * - **false**：请求失败
     * @example `true`
     */
    Success: boolean;
}
