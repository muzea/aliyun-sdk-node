export interface ChangeColumnSecLevelResponse {
    /**
     * 请求ID。
     * @example `C51420E3-144A-4A94-B473-8662FCF4AD10`
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
     * - true：请求成功
     * - false：请求失败
     * @example `false`
     */
    Success: boolean;
}
