export interface ModifyDesensitizationStrategyResponse {
    /**
     * 请求ID。
     * @example `283C461F-11D8-48AA-B695-DF092DA32AF3`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 错误消息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 请求是否成功，取值：
     * - **true**：请求成功。
     * - **false**：请求失败。
     * @example `false`
     */
    Success: boolean;
    /**
     * 结果值。
     * @example `True`
     */
    Result: boolean;
}
