export interface DescribeTasksResponse {
    /**
     * 请求ID。
     * @example `A103039D-B1B2-4C57-B989-7D7C0DA95426`
     */
    RequestId: string;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 本页记录个数。
     * @example `30`
     */
    PageRecordCount: number;
    /**
     * 总记录数。
     * @example `40`
     */
    TotalRecordCount: number;
    Items: {
        /**
         * 任务执行信息列表。
         */
        TaskProgressInfo: {
            /**
             * 任务状态。
             * @example `2`
             */
            Status: string;
            /**
             * 任务结束时间。格式为<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
             * @example `2020-11-20T02:00Z`
             */
            FinishTime: string;
            /**
             * 任务进度百分比。
             * @example `100`
             */
            Progress: string;
            /**
             * 任务子步骤详情。
             * @example `null`
             */
            StepsInfo: string;
            /**
             * 任务开始时间。格式为<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
             * @example `2020-11-20T01:00Z`
             */
            BeginTime: string;
            /**
             * 预计结束时间。
             * > 若无特殊情况，该参数为空。
             * @example `null`
             */
            ExpectedFinishTime: string;
            /**
             * 任务出错时的错误码。
             * > 仅在任务出错时返回。
             * @example `null`
             */
            TaskErrorCode: string;
            /**
             * 当前的子步骤名称。
             * @example `create_instance`
             */
            CurrentStepName: string;
            /**
             * 任务进度的描述信息。
             * > 若目标任务无进度描述信息，该参数为空。
             * @example `null`
             */
            ProgressInfo: string;
            /**
             * 任务的子步骤进度。例如`1/4`表示该任务共包含4个子步骤，当前正在执行第一步。
             * @example `1/4`
             */
            StepProgressInfo: string;
            /**
             * 任务出错时的错误信息。
             * > 仅在任务出错时返回。
             * @example `null`
             */
            TaskErrorMessage: string;
            /**
             * 任务使用的API接口，例如**CreateDBInstance**。
             * @example `CreateDBInstance`
             */
            TaskAction: string;
            /**
             * 任务预计剩余时间。单位：秒。
             * > 如果任务不处于执行中则不返回本参数或返回的值为**0**。
             * @example `60`
             */
            Remain: number;
            /**
             * 当任务涉及库时，显示库名。
             * @example `DBtest`
             */
            DBName: string;
            /**
             * 任务ID。
             * @example `3472xxxxx`
             */
            TaskId: string;
        }[];
    };
}
