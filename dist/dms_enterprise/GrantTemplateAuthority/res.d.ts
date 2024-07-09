export interface GrantTemplateAuthorityResponse {
    /**
     * 请求ID。
     * @example `34E01EDD-6A16-4CF0-9541-C644D1BE01AA`
     */
    RequestId: string;
    /**
     * 请求是否成功，返回值如下：
     * - true：请求成功
     * - false：请求失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 是否授权成功。
     * @example `true`
     */
    Result: boolean;
}
