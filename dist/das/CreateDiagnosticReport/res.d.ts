export interface CreateDiagnosticReportResponse {
    /**
     * 请求ID。
     * @example `ac544623-f6ad-45fd-9a74-9be3db65****`
     */
    RequestId: string;
    /**
     * 请求返回消息。
     * >请求成功时该参数返回**Successful**，请求失败时会返回请求异常信息（如错误码等）。
     * @example `Successful`
     */
    Message: string;
    /**
     * 返回的数据。
     * @example `70af71852fcdf2c5dc7b90596e2cf05b`
     */
    Data: string;
    /**
     * 返回的状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 请求是否执行成功：
     * - **true**：执行成功。
     * - **false**：执行失败。
     * @example `true`
     */
    Success: string;
}
