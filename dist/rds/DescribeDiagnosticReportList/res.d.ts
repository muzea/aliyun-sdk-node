export interface DescribeDiagnosticReportListResponse {
    /**
     * 请求ID。
     * @example `B7E9A79C-DE1B-4398-845F-D654FC0958BD`
     */
    RequestId: string;
    /**
     * 返回的诊断报告列表。
     */
    ReportList: {
        /**
         * 监控数据结束时间。
         * @example `2018-01-10T15:31:00Z`
         */
        EndTime: string;
        /**
         * 诊断时间。
         * @example `2018-01-17T12:46:09Z`
         */
        DiagnosticTime: string;
        /**
         * 监控数据起始时间。
         * @example `2018-01-10T15:30:00Z`
         */
        StartTime: string;
        /**
         * 诊断分数。
         * @example `100`
         */
        Score: number;
        /**
         * 公网下载地址，若当前不可下载，则为空串。
         * @example `http://rdsreport-hz-v3.oss-cn-hangzhou.aliyuncs.com/****`
         */
        DownloadURL: string;
    }[];
    /**
     * 实例ID。
     * @example `rm-uf6wjk5****`
     */
    DBInstanceId: string;
}
