export interface GetJobMetricsResponse {
    /**
     * 任务ID。
     * @example `dlc-20210126170216-*******`
     */
    JobId: string;
    /**
     * 任务监控数据列表。
     */
    PodMetrics: any[];
    /**
     * 本次调用的请求ID，用于诊断和答疑。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
}
