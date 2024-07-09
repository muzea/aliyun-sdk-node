export interface ListTaskExecutionsResponse {
    /**
     * 翻页标记的Token
     * @example `MTRBMDc0NjAtRUJFNy00N0NBLTk3NTctMTJDQzQ3NjFENDdB`
     */
    NextToken: string;
    /**
     * 请求ID
     * @example `CDABABABAB-FC28-4D9C-8FB5-68DC6F0486FC`
     */
    RequestId: string;
    /**
     * 分页大小
     * @example `50`
     */
    MaxResults: number;
    /**
     * 执行数据
     */
    TaskExecutions: {
        /**
         * 子任务执行ID
         * @example `exec-xxx`
         */
        ChildExecutionId: string;
        /**
         * 执行输出结果
         * @example `{ "InstanceId":"i-xxx" }`
         */
        Outputs: string;
        /**
         * 任务状态
         * @example `Running`
         */
        Status: string;
        /**
         * 结束时间
         * @example `2019-05-16T10:26:14Z`
         */
        EndDate: string;
        /**
         * 父任务执行ID
         * @example `task-exec-xxx`
         */
        ParentTaskExecutionId: string;
        /**
         * 任务名称
         * @example `describeInstance	`
         */
        TaskName: string;
        /**
         * 开始时间
         * @example `2019-05-16T10:26:14Z`
         */
        StartDate: string;
        /**
         * 循环中的元素
         * @example `i-1234566zxcvvb`
         */
        LoopItem: string;
        /**
         * 执行创建时间
         * @example `2019-05-16T10:26:14Z`
         */
        CreateDate: string;
        /**
         * 执行ID
         * @example `exec-44d32b45d2a449e49899`
         */
        ExecutionId: string;
        /**
         * 任务动作
         * @example `ACS::Sleep`
         */
        TaskAction: string;
        /**
         * 任务执行ID
         * @example `task-exec-xxx`
         */
        TaskExecutionId: string;
        /**
         * 更新时间
         * @example `2019-05-16T10:26:14Z`
         */
        UpdateDate: string;
        /**
         * Loop配置和统计信息，仅Loop父节点有此信息。
         * @example `{}`
         */
        Loop: any;
        /**
         * 模板ID
         * @example `xxx`
         */
        TemplateId: string;
        /**
         * 循环批次数
         * @example `2`
         */
        LoopBatchNumber: number;
        /**
         * 状态信息
         * @example `""`
         */
        StatusMessage: string;
        /**
         * 附加数据
         * @example `{                     "NotifyNote":""                 }`
         */
        ExtraData: any;
        /**
         * 执行的输入参数
         * @example `{ "Status":"Running" }`
         */
        Properties: string;
    }[];
}
