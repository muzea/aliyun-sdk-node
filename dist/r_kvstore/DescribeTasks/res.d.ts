export interface DescribeTasksResponse {
    /**
     * 请求ID。
     * @example `608FAEC9-485E-4C65-82DE-2E5B955E****`
     */
    RequestId: string;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 每页可展示的记录数。
     * @example `30`
     */
    PageSize: number;
    /**
     * 总记录数。
     * @example `2`
     */
    TotalRecordCount: number;
    /**
     * 任务信息详细列表。
     */
    Items: {
        /**
         * 任务状态。
         * * **0**：等待中。
         * * **1**：执行中。
         * * **2**：已结束。
         * * **4**：已关闭。
         * * **7**：暂停。
         * * **8**：中断。
         * @example `2`
         */
        Status: string;
        /**
         * 任务结束时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2020-11-13T06:17:18Z`
         */
        FinishTime: string;
        /**
         * 子任务步骤信息，格式为JSON。包含该子任务的预计剩余时间（**remain**）、任务名称（**name**）和任务进度（**progress**）信息。
         * > 如果不存在子步骤，不返回本参数。
         * @example `[{\"remain\":0,\"name\":\"init_instance\",\"progress\":100},{\"remain\":107,\"name\":\"init_redis\",\"progress\":12.3},{\"remain\":1881,\"name\":\"init_config\",\"progress\":0}]`
         */
        StepsInfo: string;
        /**
         * 任务进度，单位为百分比。
         * @example `100`
         */
        Progress: number;
        /**
         * 任务开始时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2020-11-13T06:16:54Z`
         */
        BeginTime: string;
        /**
         * 任务预计剩余时间，单位为秒。
         * > 如果任务不处于执行中，不返回本参数或返回的值为**0**。
         * @example `60`
         */
        Remain: number;
        /**
         * 当前的子步骤名称。
         * @example `init_redis`
         */
        CurrentStepName: string;
        /**
         * 任务的子步骤进度。
         * > 如果不存在子步骤，不返回本参数。
         * @example `3/3`
         */
        StepProgressInfo: string;
        /**
         * 任务ID。
         * @example `32302****`
         */
        TaskId: string;
        /**
         * 任务标识。
         * @example `ModifyDBInstanceParameter`
         */
        TaskAction: string;
    }[];
}
