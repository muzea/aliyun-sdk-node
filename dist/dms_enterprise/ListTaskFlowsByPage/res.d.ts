export interface ListTaskFlowsByPageResponse {
    /**
     * 请求ID。
     * @example `6CB28697-BFE2-5739-9228-3971990E982C`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 调用失败时，返回的错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功。
     * - **false**：请求失败。
     * @example `true`
     */
    Success: boolean;
    TaskFlowList: {
        /**
         * 任务流信息列表。
         */
        TaskFlow: {
            /**
             * 任务流ID。
             * @example `7***`
             */
            Id: number;
            /**
             * 任务流名称。
             * @example `poc_task_test`
             */
            DagName: string;
            /**
             * 任务流描述。
             * @example `test`
             */
            Description: string;
            /**
             * 创建人的用户ID。
             * @example `51****`
             */
            CreatorId: string;
            /**
             * 创建任务流用户的昵称。
             * @example `Creator_NickName`
             */
            CreatorNickName: string;
            /**
             * 任务流Owner的昵称。
             * @example `Owner_NickName`
             */
            DagOwnerNickName: string;
            /**
             * 最近一次部署记录的ID。
             * @example `65***`
             */
            DeployId: number;
            /**
             * 任务流状态，返回值如下：
             * - **0**：无效。
             * - **1**：无调度配置。
             * - **2**：等待调度。
             * @example `1`
             */
            Status: number;
            /**
             * 最后一个运行记录的状态，返回值如下：
             * - **0**：无效。
             * - **1**：无调度配置。
             * - **2**：等待调度。
             * @example `0`
             */
            LatestInstanceStatus: number;
            /**
             * 最近一个运行记录的创建时间。
             * @example `2022-04-13`
             */
            LatestInstanceTime: string;
            /**
             * 应用场景ID。
             * @example `1245`
             */
            ScenarioId: string;
            /**
             * 是否开启定时调度。
             * @example `false`
             */
            CronSwitch: boolean;
            /**
             * 定时调度Cron。
             * @example `0 0 1 * * ? *`
             */
            CronStr: string;
            /**
             * 事件调度配置，JSON字符串格式。
             * @example `{\"triggerType\":\"1\",\"specificTime\":'2022-11-15 11:59'}`
             */
            ScheduleParam: string;
            /**
             * 触发类型。返回值如下：
             * - **0**：周期调度
             * - **1**：手动运行
             * @example `0`
             */
            TriggerType: number;
            /**
             * 调度周期类型。取值如下：
             * - **2**: 小时级调度
             * - **3**: 日级调度
             * - **4**: 周级调度
             * - **5**: 月级调度
             * @example `2`
             */
            CronType: number;
            /**
             * 定时调度开始时间，此时间点之前任务流不进行调度。
             * @example `1970-01-01`
             */
            CronBeginDate: string;
            /**
             * 定时调度结束时间，此时间点之后任务流不进行调度。
             * @example `2023-01-01`
             */
            CronEndDate: string;
            /**
             * 时区设置，默认为东八区（Asia/Shanghai）。
             * @example `Asia/Shanghai`
             */
            TimeZoneId: string;
            /**
             * 任务流负责人的用户ID。
             * @example `12***89`
             */
            DagOwnerId: string;
        }[];
    };
    /**
     * 记录总数。
     * @example `24`
     */
    TotalCount: number;
}
