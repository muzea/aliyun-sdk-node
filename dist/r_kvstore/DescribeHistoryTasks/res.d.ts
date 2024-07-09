export interface DescribeHistoryTasksResponse {
    /**
     * 当前显示的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 请求ID。
     * @example `5D622714-AEDD-4609-9167-F5DDD3D1****`
     */
    RequestId: string;
    /**
     * 每页显示的最大记录数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 不考虑分页因素，满足查询条件的总任务数。
     * @example `5`
     */
    TotalCount: number;
    /**
     * 任务对象列表。
     */
    Items: {
        /**
         * 任务状态。
         * - **Scheduled**：等待执行
         * - **Running**：执行中
         * - **Succeed**：执行成功
         * - **Failed**：执行失败
         * - **Cancelling**：正在终止
         * - **Canceled**：已终止
         * - **Waiting**：等待预设时间
         * @example `Running`
         */
        Status: number;
        /**
         * 任务ID。
         * @example `t-83br18hloy3faf****`
         */
        TaskId: string;
        /**
         * 当前执行的步骤名，如果为空代表任务未开始。
         * @example `exec_task`
         */
        CurrentStepName: string;
        /**
         * 任务开始时间，格式为yyyy-MM-ddTHH:mm:ssZ（UTC时间）。
         * @example `2022-02-03T11:31:03Z`
         */
        StartTime: string;
        /**
         * 任务结束时间，格式为yyyy-MM-ddTHH:mm:ssZ（UTC时间）。
         * @example `2022-02-03T12:06:17Z`
         */
        EndTime: string;
        /**
         * 任务类型。
         * - **ModifyInsSpec**：规格变更或迁移
         * - **DeleteInsNode**：删除分片
         * - **AddInsNode**：增加分片
         * - **HaSwitch**：实例主备切换
         * - **RestartIns**：重启实例
         * - **CreateIns**：创建实例
         * - **ModifyInsConfig**：配置变更
         * @example `ModifyInsSpec`
         */
        TaskType: string;
        /**
         * 预估剩余执行时间，单位秒，0表示已执行完成。
         * @example `1000`
         */
        RemainTime: number;
        /**
         * 当前进度，范围为[0,100]。
         * @example `79.0`
         */
        Progress: number;
        /**
         * 地域ID。
         * @example `cn-shanghai`
         */
        RegionId: string;
        /**
         * 实例类型，固定为Instance。
         * @example `Instance`
         */
        InstanceType: string;
        /**
         * 实例ID。
         * @example `r-bp1zxszhcgatnx****`
         */
        InstanceId: string;
        /**
         * 实例名称。
         * @example `dba-tair-test-qcloud`
         */
        InstanceName: string;
        /**
         * DB类型，固定为redis。
         * @example `redis`
         */
        DbType: string;
        /**
         * 产品，固定为kvstore。
         * @example `kvstore`
         */
        Product: string;
        /**
         * 任务详情，不同taskType对应不同的输出。
         * @example `{\"callerUid\":\"test\"}`
         */
        TaskDetail: string;
        /**
         * 当前任务发起的原因。
         * @example `小版本升级`
         */
        ReasonCode: string;
        /**
         * 允许的操作信息，具体使用时是根据currentStepName+status在此信息中匹配操作Action，如果未匹配到Action，代表任务当前状态不支持操作，示例：
         * ```
         * {"steps": [
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
         * * **retry**：重试
         * * **cancel**：取消
         * * **modifySwitchTime**：修改切换时间或恢复时间
         * @example `{"steps":[{"action_info":{"Waiting":["modifySwitchTime"]},"step_name":"exec_task"}]}`
         */
        ActionInfo: string;
        /**
         * 资源所属的用户ID。
         * @example `141345906006****`
         */
        Uid: string;
        /**
         * 请求用户ID，callerSource为User时代表用户UID。
         * @example `141345906006****`
         */
        CallerSource: string;
        /**
         * 请求来源。
         * * **System**：系统自动
         * * **User**：用户
         * @example `User`
         */
        CallerUid: string;
    }[];
}
