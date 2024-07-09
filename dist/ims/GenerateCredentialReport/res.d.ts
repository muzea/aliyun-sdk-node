export interface GenerateCredentialReportResponse {
    /**
     * 请求ID。
     * @example `BBCCA90A-A1F0-4B16-B355-692247197805`
     */
    RequestId: string;
    /**
     * 用户凭证报告的生成状态。取值：
     * - STARTED：用户凭证报告开始生成。
     * - INPROGRESS：用户凭证报告生成中。
     * - COMPLETED：用户凭证报告已经生成。
     * @example `STARTED`
     */
    State: string;
}
