export interface DescribeCommitContainerTaskResponse {
    /**
     * 符合查询条件的结果条数。
     * @example `5`
     */
    TotalCount: number;
    /**
     * 本次调用返回的查询凭证值。
     * @example `AAAAAdDWBF2****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `45D5B0AD-3B00-4A9B-9911-6D5303B06712`
     */
    RequestId: string;
    /**
     * 每页显示行数。
     * @example `20`
     */
    MaxResults: string;
    /**
     * 任务详细信息。
     */
    CommitTasks: {
        /**
         * 任务ID。
         * @example `t-2zej6nstkg744qc3****`
         */
        TaskId: string;
        /**
         * 任务状态。可能值：
         * - Running：运行中
         * - Succeeded：成功
         * - Failed：失败
         * @example `Running`
         */
        TaskStatus: string;
        /**
         * 任务进度（百分比）。
         * @example `50%`
         */
        TaskProgress: string;
        /**
         * 状态消息。
         * @example `Commit container -xxxxxx`
         */
        StatusMessage: string;
        /**
         * 容器名称。
         * @example `worker0`
         */
        ContainerName: string;
        /**
         * 任务阶段信息。
         */
        CommitPhaseInfos: {
            /**
             * 阶段名称。可能值：
             * - PullBaseImage：拉取原容器镜像。
             * - CommitContainer：提交容器生成镜像。
             * - PushCommittedImage：推送镜像到ACR。
             * @example `PullBaseImage`
             */
            Phase: string;
            /**
             * 阶段状态。
             * @example `Success`
             */
            Status: string;
            /**
             * 阶段信息。
             * @example `Pull base image for container container-1 successfully`
             */
            Message: string;
            /**
             * 阶段时间。
             * @example `2023-01-05T14:06:40.920005316+08:00`
             */
            RecordTime: string;
        }[];
        /**
         * 任务开始时间。
         * @example `2023-03-06T08:22:40Z`
         */
        TaskCreationTime: string;
        /**
         * 任务完成时间。
         * @example `2023-03-06T08:23:40Z`
         */
        TaskFinishedTime: string;
    }[];
}
