export interface StartExecutionResponse {
    /**
     * 请求ID
     * @example `14A07460-EBE7-47CA-9757-12CC4761D47A`
     */
    RequestId: string;
    /**
     * 执行数据
     */
    Execution: {
        /**
         * 执行输出结果
         * @example `{ "InstanceId":"i-xxx" }`
         */
        Outputs: string;
        /**
         * 执行状态
         * @example `Success`
         */
        Status: string;
        /**
         * 结束时间
         * @example `2019-05-16T10:26:14Z`
         */
        EndDate: string;
        /**
         * 执行模板者
         * @example `root(13092080xx12344)`
         */
        ExecutedBy: string;
        /**
         * 是否包含子任务
         * @example `false`
         */
        IsParent: boolean;
        /**
         * 执行的标签
         * @example `{"k1":"v2","k2":"v2"}`
         */
        Tags: any;
        /**
         * 开始时间
         * @example `2019-05-16T10:26:14Z`
         */
        StartDate: string;
        /**
         * 安全检查模式
         * @example `Skip`
         */
        SafetyCheck: string;
        /**
         * 执行模式
         * @example `Automatic`
         */
        Mode: string;
        /**
         * 模板名称
         * @example `MyTemplate`
         */
        TemplateName: string;
        /**
         * 执行创建时间
         * @example `2019-05-16T10:26:14Z`
         */
        CreateDate: string;
        /**
         * 模板版本号
         * @example `v1`
         */
        TemplateVersion: string;
        /**
         * 执行的唯一标识
         * @example `exec-xxxyyy`
         */
        ExecutionId: string;
        /**
         * 执行的输入参数
         * @example `{ "Status":"Running" }`
         */
        Parameters: string;
        /**
         * 执行的描述信息
         * @example `test execution.`
         */
        Description: string;
        /**
         * 执行数
         * @example `1`
         */
        Counters: any;
        /**
         * 更新时间
         * @example `2019-05-16T10:26:14Z`
         */
        UpdateDate: string;
        /**
         * 资源组ID
         * @example `rg-acfmxsn4m4******`
         */
        ResourceGroupId: string;
        /**
         * 父执行ID
         * @example `exec-xxxx`
         */
        ParentExecutionId: string;
        /**
         * 执行当前模板的角色
         * @example `OOSServiceRole`
         */
        RamRole: string;
        /**
         * 模板ID
         * @example `t-1bd341007f`
         */
        TemplateId: string;
        /**
         * 状态信息
         * @example `""`
         */
        StatusMessage: string;
        /**
         * 循环模式
         * @example `Automatic`
         */
        LoopMode: string;
        /**
         * 当前正在运行的Tasks
         */
        CurrentTasks: {
            /**
             * 任务执行ID
             * @example `exec-dsadasdawq`
             */
            TaskExecutionId: string;
            /**
             * 任务名称
             * @example `testTask`
             */
            TaskName: string;
            /**
             * 任务的动作
             * @example `ACS::TimerTrigger`
             */
            TaskAction: string;
        }[];
    };
}
