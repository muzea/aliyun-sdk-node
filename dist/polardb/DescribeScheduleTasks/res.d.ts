export interface DescribeScheduleTasksResponse {
    /**
     * 请求返回消息。
     * > 请求成功时该参数返回**Successful**，请求失败时会返回请求异常信息（如错误码等）。
     * @example `Successful`
     */
    Message: string;
    /**
     * 结果集。
     */
    Data: {
        /**
         * 计划任务详情。
         */
        TimerInfos: {
            /**
             * 目标任务的状态。
             * @example `finish`
             */
            Status: string;
            /**
             * 任务类型。
             * @example `CreateDBNodes`
             */
            Action: string;
            /**
             * 为目标任务设定的最晚开始时间（UTC时间）。
             * @example `2021-01-28T12:30Z`
             */
            PlannedEndTime: string;
            /**
             * 系统预计的任务开始执行时间（UTC时间）。
             * @example `2021-01-28T12:16Z`
             */
            PlannedTime: string;
            /**
             * 集群ID。
             * @example `pc-**************`
             */
            DBClusterId: string;
            /**
             * 目标任务所属地域的地域ID。
             * @example `cn-hangzhou`
             */
            Region: string;
            /**
             * 为目标任务设定的执行开始时间（UTC时间）。
             * @example `2021-01-28T12:00Z`
             */
            PlannedStartTime: string;
            /**
             * 目标任务的任务ID。
             * @example `53879cdb-9a00-428e-acaf-ff4cff******`
             */
            TaskId: string;
            /**
             * 订单ID。
             * > 仅当`Action`取值为**CreateDBNodes**或**ModifyDBNodeClass**时返回该参数。
             * @example `208161753******`
             */
            OrderId: string;
            /**
             * 集群状态。
             * @example `Running`
             */
            DbClusterStatus: string;
            /**
             * 集群描述。
             * @example `test_cluster`
             */
            DbClusterDescription: string;
            /**
             * 计划任务是否可以取消。取值：
             * - **true**：可以取消
             * - **false**：不能取消
             * @example `true`
             */
            TaskCancel: boolean;
        }[];
        /**
         * 总记录数。
         * @example `1`
         */
        TotalRecordCount: number;
        /**
         * 页码。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 本页记录数。
         * @example `30`
         */
        PageSize: number;
    };
    /**
     * 请求结果。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `936C7025-27A5-4CB1-BB31-540E1F0CCA12`
     */
    RequestId: string;
}
