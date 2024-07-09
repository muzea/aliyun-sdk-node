export interface GetAggregateConfigRulesReportResponse {
    /**
     * 请求ID。
     * @example `F0BCC7B2-D0E4-49B0-95D2-6689CFB08D31`
     */
    RequestId: string;
    /**
     * 规则评估报告。
     */
    ConfigRulesReport: {
        /**
         * 规则评估报告的下载地址。
         * @example `https://cloud-config-compliance-report.oss-cn-shanghai.aliyuncs.com/ConfigRuleReports/100931896542****​/rules/100931896542****-rules-report-202106221125.zip?Expires=162433****&OSSAccessKeyId=LTAIs86R8H59****&Signature=yT8jn6ZQSX3dyCwVKL5EOJhGJ****`
         */
        ReportUrl: string;
        /**
         * 规则评估报告的状态。取值：
         * - NONE：未创建。
         * - CREATING：创建中。
         * - COMPLETE：完成。
         * @example `CREATING`
         */
        ReportStatus: string;
        /**
         * 规则归属的管理账号ID。
         * @example `100931896542****`
         */
        AccountId: number;
        /**
         * 账号组ID。
         * @example `ca-f632626622af0079****`
         */
        AggregatorId: string;
        /**
         * 创建评估报告的时间戳。单位：毫秒。
         * @example `1624332329593`
         */
        ReportCreateTimestamp: number;
        /**
         * 评估报告ID。
         * @example `crp-88176457e0d900c9****`
         */
        ReportId: string;
    };
}
