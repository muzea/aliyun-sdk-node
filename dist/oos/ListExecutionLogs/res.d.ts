export interface ListExecutionLogsResponse {
    /**
     * 翻页标记的Token
     * @example `gAAAAABdpsGWjX8dJ-a6dl_pvoS7AFxNHSNJKHLCAJ：J0ylgA53nWW5V4HTEZKCYTaEPNOrxFir4z43UTOjE150cFr8AGTifA==`
     */
    NextToken: string;
    /**
     * 请求ID
     * @example `14A07460-EBE7-47CA-9757-12CC4761D47A`
     */
    RequestId: string;
    /**
     * 局部展示
     * @example `true`
     */
    IsTruncated: boolean;
    /**
     * 分页大小
     * @example `50`
     */
    MaxResults: number;
    /**
     * 执行日志
     */
    ExecutionLogs: {
        /**
         * 任务执行ID
         * @example `exec-1234567zxcvb.t0010`
         */
        TaskExecutionId: string;
        /**
         * 详细信息
         * @example `The task CheckDiskCategory completed.`
         */
        Message: string;
        /**
         * 日志类型
         * @example ` System`
         */
        LogType: string;
        /**
         * 时间戳
         * @example `2019-05-24T:02:29:07Z`
         */
        Timestamp: string;
    }[];
}
