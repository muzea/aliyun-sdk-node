export interface RerunJobsRequest {
    /**
     * 集群ID。
     * 您可以通过调用[ListClusters](~~87116~~)获取集群ID。
     * @example `ehpc-sh-3VeFyR****`
     */
    "ClusterId": string;
    /**
     * 需要重新运行的作业ID列表，作业数量取值范围：1~100。
     * 格式为`[{"Id": "0.sched****"},{"Id": "1.sched****"}]`，多个作业间用半角逗号（,）隔开。
     * 您可以调用[ListJobs](~~87251~~)查询作业ID。
     * >需要重新运行的作业状态必须为RUNNING或QUEUED。
     * @example `[{"Id":"1.scheduler"}]`
     */
    "Jobs": string;
    /**
     * 采用异步消息链路重新运行作业。
     * 默认值：false。
     * @example `false`
     */
    "Async"?: boolean;
}
