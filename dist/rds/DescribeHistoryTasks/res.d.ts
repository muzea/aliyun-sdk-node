export interface DescribeHistoryTasksResponse {
    /**
     * 查询结果的页码。取值范围：正整数。
     * 默认值：**1**。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 请求唯一ID，如果遇到问题请提供这个请求ID，由工作人员为您排查。
     * @example `5CD61041-35F7-10F7-BE94-33A48B22****`
     */
    RequestId: string;
    /**
     * 每页记录数，取值：**10~100**。默认值：**10**。
     * @example `10`
     */
    PageSize: number;
    /**
     * 不考虑分页因素，满足这些限制条件的总任务数。
     * @example `2`
     */
    TotalCount: number;
    /**
     * 任务列表。
     */
    Items: {
        /**
         * 任务状态。
         * * Scheduled - 等待执行
         * * Running - 执行中
         * * Succeed - 执行成功
         * * Failed - 执行失败
         * * Cancelling - 正在终止
         * * Canceled - 已终止
         * * Waiting - 等待预设时间
         * @example `Running`
         */
        Status: string;
        /**
         * 任务ID，格式t-***
         * @example `t-83br18hloy3faf****`
         */
        TaskId: string;
        /**
         * 当前执行的步骤名，如果为空代表任务未开始。
         * @example `exec_task`
         */
        CurrentStepName: string;
        /**
         * 任务开始时间
         * UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
         * @example `2022-02-03T11:31:03Z`
         */
        StartTime: string;
        /**
         * 任务结束时间
         * UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
         * @example `2022-02-03T12:06:17Z`
         */
        EndTime: string;
        /**
         * 任务类型/任务名称。
         * @example `autotest_dispatch_cases`
         */
        TaskType: string;
        /**
         * 预估剩余执行时间，单位秒。
         * @example `1000`
         */
        RemainTime: number;
        /**
         * 当前进度，0～100。
         * @example `79.0`
         */
        Progress: number;
        /**
         * 区域。
         * @example `cn-shanghai`
         */
        RegionId: string;
        /**
         * 实例类型，Eg. Instance 用户实例。
         * @example `Instance`
         */
        InstanceType: string;
        /**
         * 实例ID，Eg. rm-xxx。
         * @example `rm-uf62br2491p5l****`
         */
        InstanceId: string;
        /**
         * 实例名，用户自定义别名。
         * @example `test`
         */
        InstanceName: string;
        /**
         * DB类型。
         * @example `mysql`
         */
        DbType: string;
        /**
         * 产品, rds等。
         * @example `rds`
         */
        Product: string;
        /**
         * 详情，JSON String 可扩展。
         * 不同taskType对应不同的输出。
         * @example `{\"callerUid\":\"test\"}`
         */
        TaskDetail: string;
        /**
         * 当前任务发起的原因。
         * @example ` ****`
         */
        ReasonCode: string;
        /**
         * 允许的操作信息，具体使用时是根据currentStepName+status在此信息中匹配操作Action，如果未匹配到Action，代表任务当前状态不支持操作，示例：
         * ```
         *   "steps": [
         *     {
         *       "step_name": "exec_task", // 步骤名, 与currentStepName匹配
         *       "action_info": {    // 步骤支持的操作
         *         "Waiting": [      // 状态，与status匹配
         *           "modifySwitchTime" // 操作Action，可能多个，即代表支持多个操作
         *         ]
         *       }
         *     },
         *     {
         *       "step_name": "init_task", // 步骤名
         *       "action_info": {    // 步骤支持的操作
         *         "Running": [      // 状态
         *           "cancel",       // 操作
         *           "pause"
         *         ]
         *       }
         *     }
         *   ]
         * }
         * ```
         * 系统可能支持的操作：
         * retry - 重试
         * cancel - 取消
         * modifySwitchTime - 修改切换时间/恢复时间
         * @example `{\"steps\":[{\"action_info\":{\"Waiting\":[\"modifySwitchTime\"]},\"step_name\":\"exec_task\"}]}`
         */
        ActionInfo: string;
        /**
         * 资源所属用户ID。
         * @example `141345906006****`
         */
        Uid: string;
        /**
         * 请求用户ID，callerSource为User时代表用户UID。
         * @example `141345906006****`
         */
        CallerSource: string;
        /**
         * 请求来源
         * System：系统
         * User：用户。
         * @example `User`
         */
        CallerUid: string;
    }[];
}
