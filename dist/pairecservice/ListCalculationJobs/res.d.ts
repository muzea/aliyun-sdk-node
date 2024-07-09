export interface ListCalculationJobsResponse {
    /**
     * 请求ID。
     * @example `F7AC05FF-EDE7-5C2B-B9AE-33D6DF4178BA`
     */
    RequestId: string;
    /**
     * 列表内元素总数。
     * @example `10`
     */
    TotalCount: number;
    /**
     * 计算任务列表。
     */
    CalculationJobs: {
        /**
         * 计算任务ID。
         * @example `2`
         */
        CalculationJobId: string;
        /**
         * AB指标名称。
         * @example `pv`
         */
        ABMetricName: string;
        /**
         * 任务状态。
         * - Success-成功
         * - Failure-失败
         * - Initializing-初始化中
         * - Running-运行中
         * @example `Success`
         */
        Status: string;
        /**
         * 任务信息。
         */
        JobMessage: string[];
        /**
         * 任务配置。
         * @example `{}`
         */
        Config: string;
        /**
         * 运行时间。
         * @example `2021-12-15T23:24:33.132+08:00`
         */
        GmtRanTime: string;
        /**
         * 业务时间。
         * @example `2021-12-15`
         */
        BizDate: string;
        /**
         * 任务来源。
         * - CronOffline-离线定时任务
         * - DataRerun-数据重跑任务
         * @example `CronOffline`
         */
        JobSource: string;
    }[];
}
