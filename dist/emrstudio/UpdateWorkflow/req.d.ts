export interface UpdateWorkflowRequest {
    /**
     * 项目ID
     * @example `p-3q9jo749ne5****`
     */
    "projectId": string;
    /**
     * 工作流ID
     * @example `w-n72kong0832****`
     */
    "workflowId": string;
    /**
     * 工作空间ID
     * @example `123***`
     */
    "workspaceId": string;
    /**
     * 工作流名称
     * @example `test`
     */
    "name"?: string;
    /**
     * 任务依赖关系json，包含工作流所有任务之间的依赖关系，preTaskId为上游任务id，postTaskId为下游任务id，此处指定的任务id为自定义id（不能为0），每一个任务需有唯一的id。如果任务节点没有上游任务，也需要增加一个preTaskId为0的依赖关系
     * @example `  [{"preTaskId":"0", "postTaskId":"t1"}]`
     */
    "taskRelationJson"?: string;
    /**
     * 任务定义json，包含工作流所有任务的描述信息
     * @example ` [{"taskId":"t1","name":"t1","taskParams":{"rawScript":"echo 1"},"taskType":"SHELL"}]`
     */
    "taskDefinitionJson"?: string;
    /**
     * 描述
     * @example `test`
     */
    "description"?: string;
    /**
     * 工作流参数
     * @example `[{"prop":"key1","value":"value1"}]`
     */
    "workflowParams"?: string;
    /**
     * 目录ID
     * @example `wd-n72kong0832****`
     */
    "parentDirectoryId"?: string;
    /**
     * 超时的时间，单位：分钟
     * @example `10`
     */
    "timeout"?: number;
    /**
     * 执行策略
     * @example `PARALLEL`
     */
    "executionType"?: string;
    /**
     * 调度状态
     * @example `OFFLINE`
     */
    "scheduleState"?: string;
    /**
     * 调度起始时间
     * @example `2024-01-01 00:00:00`
     */
    "scheduleStartTime"?: string;
    /**
     * 调度结束时间
     * @example `2024-01-01 00:00:00`
     */
    "scheduleEndTime"?: string;
    /**
     * 调度cron表达式
     * @example `0 0 * * * ? *`
     */
    "cronExpr"?: string;
    /**
     * 时区
     * @example `Asia/Shanghai`
     */
    "timeZone"?: string;
    /**
     * 失败策略
     * @example `END`
     */
    "failureStrategy"?: string;
    /**
     * 通知策略
     * @example `NONE`
     */
    "alertStrategy"?: string;
    /**
     * 告警组ID
     * @example `ag-n72kong0832****`
     */
    "alertGroupId"?: string;
    /**
     * 工作流实例优先级
     * @example `MEDIUM`
     */
    "workflowInstancePriority"?: string;
    /**
     * 资源组ID
     * @example `wg-acfmv4opbs****`
     */
    "resourceGroupId"?: string;
}
