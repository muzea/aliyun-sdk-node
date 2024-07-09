export interface GetConfigRulesReportResponse {
    /**
     * 请求ID。
     * @example `6EC7AED1-172F-42AE-9C12-295BC2ADB751`
     */
    RequestId: string;
    /**
     * 规则评估报告。
     */
    ConfigRulesReport: {
        /**
         * 规则评估报告的状态。取值：
         * - NONE：未创建。
         * - CREATING：创建中。
         * - COMPLETE：完成。
         * @example `CREATING`
         */
        ReportStatus: string;
        /**
         * 规则评估报告的下载地址。
         * @example `https://cloud-config-compliance-report.oss-cn-shanghai.aliyuncs.com/ConfigRuleReports/100931896542****​/rules/100931896542****-rules-report-202106221125.zip?Expires=162433****&OSSAccessKeyId=LTAIs86R8H59****&Signature=yT8jn6ZQSX3dyCwVKL5EOJhGJ****`
         */
        ReportUrl: string;
        /**
         * 规则归属的阿里云账号ID。
         * @example `100931896542****`
         */
        AccountId: number;
        /**
         * 创建评估报告的时间戳。单位：毫秒。
         * @example `1614687022000`
         */
        ReportCreateTimestamp: number;
        /**
         * 评估报告ID。
         * @example `crp-88176457e0d900c9****`
         */
        ReportId: string;
    };
}
