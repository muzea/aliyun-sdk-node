export interface DescribeAutoProvisioningGroupHistoryResponse {
    /**
     * 每页行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `B48A12CD-1295-4A38-A8F0-0E92C937****`
     */
    RequestId: string;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 查询到的调度任务的总数。
     * @example `10`
     */
    TotalCount: number;
    AutoProvisioningGroupHistories: {
        /**
         * 所有调度任务的信息。
         */
        AutoProvisioningGroupHistory: {
            /**
             * 单次调度任务的状态。可能值：
             * - prepare：调度任务执行中。
             * - success：调度任务执行成功。
             * - failed：调度任务执行失败。
             * @example `success`
             */
            Status: string;
            /**
             * 开始执行单次调度任务的时间。
             * @example `2019-04-01T15:10:20Z`
             */
            StartTime: string;
            /**
             * 单次调度任务的ID。
             * @example `apg-task-bp67acfmxazb4p****`
             */
            TaskId: string;
            /**
             * 单次调度任务最后一次实例创建活动的执行时间。
             * @example `2019-04-01T15:10:20Z`
             */
            LastEventTime: string;
            ActivityDetails: {
                /**
                 * 单次调度任务的详细信息。
                 */
                ActivityDetail: {
                    /**
                     * 单次调度任务一次实例创建活动的执行状态。可能值：
                     * - Successful：实例创建成功。
                     * - Failed：实例创建失败。
                     * - InProgress：实例创建中。
                     * - Warning：实例部分创建成功。
                     * @example `Successful`
                     */
                    Status: string;
                    /**
                     * 单次调度任务一次实例创建活动的执行详情。
                     * @example `New ECS instances "i-bp67acfmxazb4p****, i-bp67acfmxazb5p****" created.`
                     */
                    Detail: string;
                }[];
            };
        }[];
    };
}
