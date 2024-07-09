export interface DescribeTasksResponse {
    /**
     * 总记录数。
     * @example `1`
     */
    TotalRecordCount: number;
    /**
     * 本页记录数。
     * @example `30`
     */
    PageRecordCount: number;
    Tasks: {
        /**
         * 任务详情。
         */
        Task: {
            /**
             * 任务完成时间，格式为`YYYY-MM-DDThh:mm:ssZ`（UTC时间）。
             * @example `2020-12-02T02:40:15Z`
             */
            FinishTime: string;
            /**
             * 任务子步骤详情。
             * @example `[{\"remain\":0,\"name\":\"init_task\",\"progress\":100},{\"remain\":1764,\"name\":\"create_instance\",\"progress\":0},{\"remain\":1,\"name\":\"init_cluster\",\"progress\":0},{\"remain\":2,\"name\":\"create_backup\",\"progress\":0}]`
             */
            StepsInfo: string;
            /**
             * 任务进度百分比。
             * @example `100`
             */
            Progress: number;
            /**
             * 预计结束时间。若无特殊情况，该参数为空。
             * @example `null`
             */
            ExpectedFinishTime: string;
            /**
             * 任务开始时间，格式为`YYYY-MM-DDThh:mm:ssZ`（UTC时间）。
             * @example `2020-12-02T02:39:15Z`
             */
            BeginTime: string;
            /**
             * 任务出错时的错误码。
             * >仅当任务状态为**Stop**时返回该参数。
             * @example `null`
             */
            TaskErrorCode: string;
            /**
             * 任务进度的描述信息。若目标任务无进度描述信息，该参数为空。
             * @example `null`
             */
            ProgressInfo: string;
            /**
             * 当前任务的子步骤名称。
             * @example `create_instance`
             */
            CurrentStepName: string;
            /**
             * 任务子步骤进度。例如`1/4`表示该任务共包含4个子步骤，当前正在执行第一步。
             * @example `1/4`
             */
            StepProgressInfo: string;
            /**
             * 任务出错时的错误信息。
             * >仅当任务状态为**Stop**时返回该参数。
             * @example `null`
             */
            TaskErrorMessage: string;
            /**
             * 目标任务所使用的API接口，例如`CreateDBInstance`。
             * @example `CreateDBInstance`
             */
            TaskAction: string;
            /**
             * 数据库名称。
             * >仅涉及数据库相关操作的任务会返回该参数。
             * @example `test`
             */
            DBName: string;
            /**
             * 任务预计剩余时间，单位为秒。
             * @example `1767`
             */
            Remain: number;
            /**
             * 目标任务ID。
             * @example `111111111`
             */
            TaskId: string;
        }[];
    };
    /**
     * 查询结束时间。
     * @example `2020-12-02T03:00Z`
     */
    EndTime: string;
    /**
     * 请求ID。
     * @example `4352AD99-9FF5-41A6-A319-068089******`
     */
    RequestId: string;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 查询开始时间。
     * @example `2020-11-30T00:00Z`
     */
    StartTime: string;
    /**
     * 任务所对应的集群ID。
     * @example `pc-***************`
     */
    DBClusterId: string;
}
