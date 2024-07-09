export interface StopJobsRequest {
    /**
     * 集群ID。
     * 您可以通过调用[ListClusters](~~87116~~)获取集群ID。
     * @example `ehpc-hz-FYUr32****`
     */
    "ClusterId": string;
    /**
     * 待停止的作业ID列表，作业数量取值范围：1~100。
     * 格式为`[{"Id": "0.sched****"},{"Id": "1.sched****"}]`，多个作业间用半角逗号（,）隔开。
     * 您可以调用[ListJobs](~~87251~~)查询作业ID。
     * >待停止的作业状态必须为RUNNING或QUEUED。
     * @example `[{"Id":"1.sched****"},{"Id":"0.sched****"}]`
     */
    "Jobs": string;
    /**
     * 采用异步消息链路停止作业。
     * 默认值：false。
     * @example `false`
     */
    "Async"?: boolean;
}
