export interface GetCalculationJobResponse {
    /**
     * 请求ID。
     * @example `7D59453C-48AA-5FC5-8848-2D373BD1A17F`
     */
    RequestId: string;
    /**
     * AB指标ID。
     * @example `1`
     */
    ABMetricId: string;
    /**
     * AB指标名称。
     * @example `pv`
     */
    ABMetricName: string;
    /**
     * 状态。
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
}
