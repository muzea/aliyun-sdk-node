export interface GetTaskStatusResponse {
    /**
     * 请求ID。
     * @example `005F4623-AE53-504D-830F-44825F7DC211`
     */
    RequestId: string;
    /**
     * 任务状态信息。
     */
    TaskStatus: {
        /**
         * 任务状态。取值：
         * - InProgress：任务执行中。
         * - Success：任务执行成功。
         * - Failed：任务执行失败。
         * @example `Success`
         */
        Status: string;
        /**
         * 任务ID。
         * @example `t-shfqw1u1edszvxw5****`
         */
        TaskId: string;
        /**
         * 任务结束时间。
         * @example `2021-11-05T02:58:08Z`
         */
        EndTime: string;
        /**
         * 任务类型。取值：
         * - ProvisionAccessConfiguration：部署访问配置。
         * - DeprovisionAccessConfiguration：解除访问配置部署。
         * - CreateAccessAssignment：在RD账号上授权。
         * - DeleteAccessAssignment：移除RD账号上的授权。
         * @example `DeleteAccessAssignment`
         */
        TaskType: string;
        /**
         * 任务失败原因。
         * > 只有`Status`为`Failed`，才会显示该参数。
         * @example `No Permission.`
         */
        FailureReason: string;
        /**
         * 任务开始时间。
         * @example `2021-11-05T02:58:07Z`
         */
        StartTime: string;
    };
}
