export interface ChangeColumnSecurityLevelResponse {
    /**
     * 请求ID，用于定位日志，排查问题。
     * @example `E103C5F9-DE47-53F2-BF34-D71DF38F****`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 错误信息。
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
}
