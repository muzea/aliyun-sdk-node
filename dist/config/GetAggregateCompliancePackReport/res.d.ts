export interface GetAggregateCompliancePackReportResponse {
    /**
     * 请求ID。
     * @example `0D234DAC-1ABD-42E8-9475-BE317857E29B`
     */
    RequestId: string;
    /**
     * 合规包评估报告。
     */
    CompliancePackReport: {
        /**
         * 合规包评估报告的下载地址。
         * @example `https://cloud-config-compliance-report.oss-cn-shanghai.aliyuncs.com/CompliancePackReports/100931896542****​/cp-fdc8626622af00f9****​/100931896542****-cp-fdc8626622af00f9****-report-202106221050.zip?Expires=162433****&OSSAccessKeyId=LTAIs86R8H59****&Signature=RqvJZtaxQ2HfqRcl0Ic2HG8oo****`
         */
        ReportUrl: string;
        /**
         * 合规包评估报告的状态。取值：
         * - NONE：未创建。
         * - CREATING：创建中。
         * - COMPLETE：完成。
         * @example `COMPLETE`
         */
        ReportStatus: string;
        /**
         * 合规包ID。
         * @example `cp-fdc8626622af00f9****`
         */
        CompliancePackId: string;
        /**
         * 合规包归属的企业管理账号ID。
         * @example `100931896542****`
         */
        AccountId: number;
        /**
         * 创建合规包评估报告的时间戳。单位：毫秒。
         * @example `1624330246640`
         */
        ReportCreateTimestamp: number;
    };
}
