export interface CreateScenarioResponse {
    /**
     * 请求ID。
     * @example `4E1D2B4D-3E53-4ABC-999D-1D2520B3471A`
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
     * 业务场景ID。
     * @example `36***`
     */
    ScenarioId: number;
}
