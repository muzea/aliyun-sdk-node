export interface ListExecutionsResponse {
    /**
     * 翻页标记的Token
     * @example `MTRBMDc0NjAtRUJFNy00N0NBLTk3NTctMTJDQzQ`
     */
    NextToken: string;
    /**
     * 请求ID
     * @example `14A074-47CA-9757-12CC4761D47A`
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
    Executions: {
        /**
         * 执行状态。取值范围为Started, Queued, Running, Waiting, Success, Failed, Cancelled。
         * @example `Success`
         */
        Status: string;
        /**
         * 等待状态
         * @example `""`
         */
        WaitingStatus: string;
        /**
         * 目标资源
         * @example `"{"ResourceType": "ALIYUN::ECS::Instance", "Filters": [{"ResourceIds": ["i-bp14z07dg3464980x72o"], "RegionId": "cn-hangzhou", "Type": "ResourceIds"}]}"`
         */
        Targets: string;
        /**
         * 状态原因
         * @example `""`
         */
        StatusReason: string;
        /**
         * 执行的标签
         * @example `{}`
         */
        Tags: any;
        /**
         * 最近一次成功触发模板的时间
         * @example `2019-05-27T09:29:18Z`
         */
        LastSuccessfulTriggerTime: string;
        /**
         * 执行模式
         * @example `Automatic`
         */
        Mode: string;
        /**
         * 安全检查模式。取值范围为Skip, ConfirmEveryHighRiskAction。
         * @example `Skip`
         */
        SafetyCheck: string;
        /**
         * 模板名称
         * @example `MyTemplate`
         */
        TemplateName: string;
        /**
         * 模板版本号
         * @example `v1`
         */
        TemplateVersion: string;
        /**
         * 执行创建时间
         * @example `2019-05-16T10:26:14Z`
         */
        CreateDate: string;
        /**
         * 执行更新时间
         * @example `2019-05-16T10:26:14Z`
         */
        UpdateDate: string;
        /**
         * 执行描述
         * @example `MyDescription`
         */
        Description: string;
        /**
         * 最近一次触发模板的时间
         * @example `2019-05-27T09:29:18Z`
         */
        LastTriggerTime: string;
        /**
         * 父执行ID
         * @example `exec-xxx`
         */
        ParentExecutionId: string;
        /**
         * 最近一次触发模版后的执行状态
         * @example `Success`
         */
        LastTriggerStatus: string;
        /**
         * 任务执行状态
         * @example `“”`
         */
        StatusMessage: string;
        /**
         * 执行输出结果
         * @example `{ "InstanceId":"i-xxx" }`
         */
        Outputs: string;
        /**
         * 执行模板者
         * @example `1309252800`
         */
        ExecutedBy: string;
        /**
         * 执行结束时间
         * @example `2019-05-16T10:26:14Z`
         */
        EndDate: string;
        /**
         * 标记是否包含子任务
         * @example `false`
         */
        IsParent: boolean;
        /**
         * 执行开始时间
         * @example `2019-05-16T10:26:14Z`
         */
        StartDate: string;
        /**
         * 执行的唯一标识
         * @example `exec-44d32b45d2a449e`
         */
        ExecutionId: string;
        /**
         * 执行的输入参数
         * @example `{ "Status":"Running" }`
         */
        Parameters: any;
        /**
         * 任务按执行状态计数
         * @example `{"Failed": 0,"Success": 1,"Total": 2}`
         */
        Counters: any;
        /**
         * 资源组ID
         * @example `rg-acfmxsn4m4******`
         */
        ResourceGroupId: string;
        /**
         * 执行的模版类型。可分为Other、TimerTrigger、EventTrigger、AlarmTrigger。
         * @example `Other`
         */
        Category: string;
        /**
         * 模板ID
         * @example `123`
         */
        TemplateId: string;
        /**
         * 执行当前模板的角色
         * @example `OOSServiceRole`
         */
        RamRole: string;
        /**
         * 资源状态
         * @example `{ 			"Success": 1 		}`
         */
        ResourceStatus: string;
        /**
         * 当前正在运行的Tasks
         */
        CurrentTasks: {
            /**
             * Task执行ID
             * @example `task-exec-44d32b45d2a49899#1`
             */
            TaskExecutionId: string;
            /**
             * Task名称
             * @example `installSLSILogtail`
             */
            TaskName: string;
            /**
             * Task执行模板
             * @example `acs::Template`
             */
            TaskAction: string;
        }[];
        /**
         * 最近一次任务执行状态（定时、事件、告警类执行表示的是最近一次触发的执行状态，非触发类执行此字段与StatusMessage字段内容一致）
         * @example `""`
         */
        LastTriggerStatusMessage: string;
        /**
         * 最近一次执行输出结果（定时、事件、告警类执行表示的是最近一次触发的输出结果，非触发类执行此字段与Outputs字段内容一致）
         * @example `{
              "InstanceId": "i-xxx"
        }`
         */
        LastTriggerOutputs: string;
    }[];
}
