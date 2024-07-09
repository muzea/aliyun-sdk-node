export interface GetCompliancePackReportResponse {
    /**
     * 请求ID。
     * @example `6EC7AED1-172F-42AE-9C12-295BC2ADB751`
     */
    RequestId: string;
    /**
     * 合规包报告。
     */
    CompliancePackReport: {
        /**
         * 合规包评估报告的下载地址。
         * @example `https://cloud-config-compliance-report.oss-cn-shanghai.aliyuncs.com/CompliancePackReports/120886317861****​/cp-fdc8626622af00f9****​/120886317861****-cp-fdc8626622af00f9****-report-202106221046.xls?Expires=162442****&OSSAccessKeyId=LTAIs86R8H59****&Signature=sWmz4fq7eJEyDoho%2FoDOReZ3s****`
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
         * 合规包归属的阿里云账号ID。
         * @example `120886317861****`
         */
        AccountId: number;
        /**
         * 创建合规包评估报告的时间戳。单位：毫秒。
         * @example `1624329965857`
         */
        ReportCreateTimestamp: number;
    };
}
