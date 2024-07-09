export interface DescribeWorkflowResponse {
    /**
     * 请求id
     * @example `611AD6E6-BFE3-5897-AA12-569F79DBAF9B`
     */
    requestId: string;
    /**
     * 工作流
     */
    workflow: {
        /**
         * 工作流ID
         * @example `w-n72kong0832****`
         */
        workflowId: string;
        /**
         * 工作流名称
         * @example `test`
         */
        name: string;
        /**
         * 工作流描述
         * @example `test`
         */
        description: string;
        /**
         * 工作流参数
         * @example `  [{"prop":"key1","value":"value1"}]`
         */
        workflowParams: string;
        /**
         * 目录ID
         * @example `wd-n72kong0832****`
         */
        parentDirectoryId: string;
        /**
         * 超时的时间，单位：分钟
         * @example `0`
         */
        timeout: number;
        /**
         * 执行策略
         * @example `PARALLEL`
         */
        executionType: string;
        /**
         * 创建时间
         * @example `2024-01-01 00:00:00`
         */
        createTime: string;
        /**
         * 更新时间
         * @example `2024-01-01 00:00:00`
         */
        updateTime: string;
    };
    /**
     * 任务列表
     */
    tasks: {
        /**
         * 任务ID
         * @example `t-n72kong0832****`
         */
        taskId: string;
        /**
         * 任务名称
         * @example `task_name`
         */
        name: string;
        /**
         * 任务版本
         * @example `1`
         */
        version: number;
        /**
         * 任务描述
         * @example `task description`
         */
        description: string;
    }[];
    /**
     * 任务依赖关系列表
     */
    taskRelations: {
        /**
         * 上游任务id，如果为0，则说明没有上游节点
         * @example `t-n72kong0832****`
         */
        preTaskId: string;
        /**
         * 下游任务id
         * @example `t-n72kong0832****`
         */
        postTaskId: string;
    }[];
    /**
     * 定时调度信息
     */
    schedule: {
        /**
         * 调度状态
         * @example `OFFLINE`
         */
        scheduleState: string;
        /**
         * 调度起始时间
         * @example `2024-01-01 00:00:00`
         */
        scheduleStartTime: string;
        /**
         * 调度结束时间
         * @example `2024-01-01 00:00:00`
         */
        scheduleEndTime: string;
        /**
         * 调度cron表达式
         * @example `0 0 * * * ? *`
         */
        cronExpr: string;
        /**
         * 时区
         * @example `Asia/Shanghai`
         */
        timeZone: string;
        /**
         * 失败策略
         * @example `END`
         */
        failureStrategy: string;
        /**
         * 通知策略
         * @example `NONE`
         */
        alertStrategy: string;
        /**
         * 告警组ID
         * @example `ag-n72kong0832****`
         */
        alertGroupId: string;
        /**
         * 工作流实例优先级
         * @example `MEDIUM`
         */
        workflowInstancePriority: string;
        /**
         * 资源组ID
         * @example `wg-susqimrr649x****`
         */
        resourceGroupId: string;
        /**
         * EMR集群id
         * @example `C-15F7AB9B53F1****`
         */
        emrClusterId: string;
    };
}
