export interface DecodeDiagnosticMessageRequest {
    /**
     * API请求因无权限被拒绝访问时，请求响应体中返回的编码的诊断信息。
     * @example `AQEAAAAAZBgxr0U1MjA1NTM1LUM4BBktMzE5RS1CODgxLUU1QTI0RDNFQTM1****`
     */
    "EncodedDiagnosticMessage"?: string;
}
