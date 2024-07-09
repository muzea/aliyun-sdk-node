export interface GetDiagnosticResponse {
    /**
     * 错误码。
     * @example `Forbidden`
     */
    Code: string;
    /**
     * 诊断项名称。
     * @example `ros`
     */
    DiagnosticProduct: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 错误内容。
     * @example `The specified parameter ReportId is invalid, Can not find diagnostic report dr-5f6135782f104b0f****.`
     */
    Message: string;
    /**
     * 诊断建议。
     * @example `{'RosActionMessages': {'Reason': 'Fail to delete stack (fc966920-450a-456b-983c-deeaec8e****), as deletion protection is enabled.', 'Recommend': ''}}`
     */
    Recommends: any;
    /**
     * 诊断报告ID。
     * @example `dr-cc80afc48c8741e9****`
     */
    ReportId: string;
    /**
     * 请求ID。
     * @example `96A24844-9603-5E79-BDF4-EFD412FC5D4C`
     */
    RequestId: string;
    /**
     * 诊断状态。取值：
     * -  Running：运行中。
     * - Complete：诊断完成。
     * - Failed：诊断失败。
     * @example `Running`
     */
    Status: string;
    /**
     * 诊断状态的原因。
     * @example `Complete`
     */
    StatusReason: string;
    /**
     * 是否调用成功。取值：
     * - true：调用成功。
     * - false：调用失败。
     * @example `true`
     */
    Success: string;
    /**
     * 诊断的关键字。
     * @example `0938F60C-A2CA-5A2E-9983-03EB1E6D7AE2`
     */
    DiagnosticKey: string;
    /**
     * 诊断时间。
     * @example `2023-03-27T03:32:03Z`
     */
    DiagnosticTime: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpCode: string;
    /**
     * 诊断结果。
     */
    DiagnosticResult: {
        /**
         * 资源栈信息。
         */
        StackMessages: any;
        /**
         * ROS调用信息。
         */
        RosActionMessages: any;
        /**
         * 诊断失败的资源列表。
         */
        FailedResources: any;
    };
}
