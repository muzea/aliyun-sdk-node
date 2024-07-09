export interface DescribeHistoryTasksResponse {
    /**
     * 当前显示的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 请求ID。
     * @example `3C4A2494-XXXX-XXXX-93CF-548DB3375193`
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
         * - Scheduled：等待执行
         * - Running：执行中
         * - Succeed：执行成功
         * - Failed：执行失败
         * - Cancelling：正在终止
         * - Canceled：已终止
         * - Waiting：等待预设时间
         * @example `Succeed`
         */
        Status: number;
        /**
         * 任务ID。
         * @example `t-0mq1yyhm3ffl2bxxxx`
         */
        TaskId: string;
        /**
         * 当前执行的步骤名，如果为空代表任务未开始。
         * @example `exec_task`
         */
        CurrentStepName: string;
        /**
         * 任务开始时间，格式为yyyy-MM-ddTHH:mm:ssZ（UTC时间）。
         * @example `2023-02-11T02:33Z`
         */
        StartTime: string;
        /**
         * 任务结束时间，格式为yyyy-MM-ddTHH:mm:ssZ（UTC时间）。
         * @example `2023-03-16T02:59Z`
         */
        EndTime: string;
        /**
         * 任务类型。
         * - CreateIns：创建实例
         * - DeleteIns：删除实例
         * - ChangeVariable：参数调整
         * - ModifyInsConfig：配置变更
         * - RestartIns：重启实例
         * - HaSwitch：实例主备切换
         * - CloneIns：克隆实例
         * - KernelVersionUpgrade：内核版本升级
         * - ProxyVersionUpgrade：代理版本升级
         * - ModifyAccount：账号变更
         * - ModifyInsSpec：规格变更或迁移
         * - CreateReadIns：创建只读实例
         * - StartIns：启动实例
         * - StopIns：暂停实例
         * - ModifyNetwork：网络变更
         * - LockIns： 锁定实例
         * - UnlockIns：解锁实例
         * - DiskOnlineExpansion：磁盘在线扩容
         * - StorageOnlineExpansion：存储在线扩容
         * - AddInsNode：增加节点
         * - DeleteInsNode：删除节点
         * - ManualBackupIns：手动备份实例
         * - ModifyInsStorageType：修改存储类型
         * @example `CreateIns`
         */
        TaskType: string;
        /**
         * 预估剩余执行时间，单位秒，0表示已执行完成。
         * @example `1000
        `
         */
        RemainTime: number;
        /**
         * 当前进度，范围为[0,100]。
         * @example `100.0`
         */
        Progress: number;
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 实例类型，固定为Instance。
         * @example `Instance`
         */
        InstanceType: string;
        /**
         * 实例ID。
         * @example `dds-t4n18194768fxxxx`
         */
        InstanceId: string;
        /**
         * 实例名称。
         * @example `test-dds`
         */
        InstanceName: string;
        /**
         * DB类型，固定为mongodb。
         * @example `mongodb`
         */
        DbType: string;
        /**
         * 产品，固定为dds。
         * @example `dds`
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
         *    "steps": [
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
         * - retry：重试
         * - cancel：取消
         * - modifySwitchTime：修改切换时间/恢复时间
         * @example ``{\"steps\":[{\"action_info\":{\"Waiting\":[\"modifySwitchTime\"]},\"step_name\":\"exec_task\"}]}``
         */
        ActionInfo: string;
        /**
         * 资源所属的用户ID。
         * @example `141345906006****`
         */
        Uid: string;
        /**
         * 请求来源 System：系统 User：用户。
         * @example `System`
         */
        CallerSource: string;
        /**
         * 请求用户ID，callerSource为User时代表用户UID。
         * @example `141345906006****`
         */
        CallerUid: string;
    }[];
}
