export interface DeleteDiagnosticResponse {
    /**
     * 错误码。
     * @example `Forbidden`
     */
    Code: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 错误信息。
     * @example `You are not authorized to complete this action.`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `91EF0DC1-3BB5-555E-AAA1-4F5C640D15DA`
     */
    RequestId: string;
    /**
     * 是否调用成功。取值：
     * - true：调用成功。
     * - false：调用失败。
     * @example `true`
     */
    Success: string;
}
