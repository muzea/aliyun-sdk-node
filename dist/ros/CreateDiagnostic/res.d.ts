export interface CreateDiagnosticResponse {
    /**
     * 错误码。
     * @example `Forbidden`
     */
    Code: string;
    /**
     * 诊断类型。
     * @example `Stack`
     */
    DiagnosticType: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 错误内容。
     * @example `You are not authorized to complete this action.`
     */
    Message: string;
    /**
     * 诊断ID。
     * @example `dr-e94e39a1274d44b6****`
     */
    ReportId: string;
    /**
     * 请求ID。
     * @example `943B24D7-1A67-55A4-B045-818F90693D3A`
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
