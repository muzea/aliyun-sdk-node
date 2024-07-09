export interface DescribeJobRequest {
    /**
     * 集群ID。
     * 您可以通过调用[ListClusters](~~87116~~)获取集群ID。
     * @example `ehpc-hz-jeJki6****`
     */
    "ClusterId": string;
    /**
     * 作业ID。
     * 您可以调用[ListJobs](~~87251~~)查询作业ID。
     * @example `1.scheduler****`
     */
    "JobId": string;
    /**
     * 采用异步消息链路停止作业。
     * 默认值：false。
     * @example `false`
     */
    "Async"?: boolean;
}
