export interface RunWorkflowRequest {
    /**
     * 工作空间ID
     * @example `12345`
     */
    "workspaceId": string;
    /**
     * 项目ID
     * @example `p-3q9jo749ne5****`
     */
    "projectId": string;
    /**
     * 工作流ID
     * @example `w-3q9jo749ne5****`
     */
    "workflowId": string;
    /**
     * 资源组ID
     * @example `wg-acfmv4opbs****`
     */
    "resourceGroupId": string;
    /**
     * 运行类型
     * @example `START_PROCESS`
     */
    "execType"?: string;
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
     * 启动参数
     * @example `{"key1":"value1"}`
     */
    "startParams"?: string;
    /**
     * 空跑标识
     * @example `0`
     */
    "dryRun"?: string;
    /**
     * 补数依赖模式
     * @example `OFF_MODE`
     */
    "complementDependentMode"?: string;
    /**
     * 补数执行方式
     * @example `RUN_MODE_PARALLEL`
     */
    "runMode"?: string;
    /**
     * 补数并行度，范围1~7
     * @example `1`
     */
    "expectedParallelismNumber"?: string;
    /**
     * 补数调度日期范围
     * @example `2024-01-01 00:00:00,2024-01-02 00:00:00`
     */
    "scheduleTime"?: string;
}
