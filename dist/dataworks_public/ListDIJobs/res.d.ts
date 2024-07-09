export interface ListDIJobsResponse {
    /**
     * 请求ID。
     * @example `7263E4AC-9D2E-5B29-B8AF-7C5012E92A41`
     */
    RequestId: string;
    /**
     * 任务分页结果。
     */
    DIJobPaging: {
        /**
         * 总记录数。
         * @example `6`
         */
        TotalCount: number;
        /**
         * 页码。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 分页大小。
         * @example `10`
         */
        PageSize: number;
        /**
         * 任务列表。
         */
        DIJobs: {
            /**
             * 任务ID。
             * @example `16626`
             */
            DIJobId: number;
            /**
             * 工作空间的ID。
             * @example `1967`
             */
            ProjectId: number;
            /**
             * 任务名称。
             * @example `mysql_to_holo_sync_8772`
             */
            JobName: string;
            /**
             * 同步类型，可选的枚举值有：
             * - FullAndRealtimeIncremental（全量和实时增量）
             * - RealtimeIncremental（实时增量）
             * - Full（全量）
             * @example `Full`
             */
            MigrationType: string;
            /**
             * 源端数据源类型，枚举值：MySQL。
             * @example `MySQL`
             */
            SourceDataSourceType: string;
            /**
             * 目标端数据源类型，枚举值：Hologres。
             * @example `Hologres`
             */
            DestinationDataSourceType: string;
            /**
             * 同步状态，可选的枚举值：
             * - Finished（运行成功已结束）
             * - Initialized（初始化完成）
             * - Stopped（已停止）
             * - Failed（运行失败）
             * - Running（运行中）
             * - Stopping（停止中）
             * @example `Finished`
             */
            JobStatus: string;
        }[];
    };
}
