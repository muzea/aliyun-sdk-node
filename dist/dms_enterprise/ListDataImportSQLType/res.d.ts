export interface ListDataImportSQLTypeResponse {
    /**
     * 请求ID。可用于定位日志，排查问题。
     * @example `E5EE2B9E-2F95-57FA-B284-CB441CEE49D6`
     */
    RequestId: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功
     * - **false**：请求失败
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
    /**
     * SQL类型列表。
     */
    SqlTypeResult: string[];
}
