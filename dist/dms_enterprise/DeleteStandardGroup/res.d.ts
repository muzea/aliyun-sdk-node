export interface DeleteStandardGroupResponse {
    /**
     * 请求ID，用于定位日志，排查问题。
     * @example `C5B8E84B-42B6-4374-AD5A-6264E1753325`
     */
    RequestId: string;
    /**
     * 请求是否成功。返回值如下：
     * - **true**：请求成功。
     * - **false**：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用失败时，返回的错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
}
