export interface GetIntervalLimitOfSLAResponse {
    /**
     * 请求ID。用于定位日志，排查问题。
     * @example `5B96E35F-A58E-5399-9041-09CF9A1E46EA`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 调用失败时，返回的错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功。
     * - **false**：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 周期限制（单位：分钟）。
     * @example `59`
     */
    IntervalLimit: number;
}
