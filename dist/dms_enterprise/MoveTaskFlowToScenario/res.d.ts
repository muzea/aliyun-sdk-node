export interface MoveTaskFlowToScenarioResponse {
    /**
     * 请求ID，用于定位日志，排查问题。
     * @example `D85FD18C-4322-5D49-8C14-5A10E668F86C`
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
     * - **true**：请求成功
     * - **false**：请求失败
     * @example `true`
     */
    Success: boolean;
}
