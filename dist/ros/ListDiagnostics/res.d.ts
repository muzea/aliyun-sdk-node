export interface ListDiagnosticsResponse {
    /**
     * HTTP请求返回的响应状态码，200表示请求成功。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 错误内容。
     * @example `You are not authorized to complete this action.`
     */
    Message: string;
    /**
     * 诊断列表。
     */
    Diagnostics: {
        /**
         * 诊断报告生成时间。
         * @example `2022-08-01T02:23:55`
         */
        CreateTime: string;
        /**
         * 诊断的关键字。
         * @example `047D84D9-D3EB-5DA8-87F1-9A7DD5598A5D`
         */
        DiagnosticKey: string;
        /**
         * 诊断产品。
         * @example `ros`
         */
        DiagnosticProduct: string;
        /**
         * 诊断报告ID。
         * @example `dr-2963bfbcac834f1a****`
         */
        ReportId: string;
        /**
         * 诊断状态。
         * @example `success`
         */
        Status: string;
    }[];
    /**
     * 请求ID。
     * @example `1983D1C4-88EA-5D7D-90AB-467D01867A5D`
     */
    RequestId: string;
    /**
     * 是否调用成功。取值：
     * - true：调用成功。
     * - false：调用失败。
     * @example `true`
     */
    Success: string;
    /**
     * 下一页查询开始的token。
     * @example `caeba0bbb2be03f84eb48b699f01****`
     */
    NextToken: string;
}
