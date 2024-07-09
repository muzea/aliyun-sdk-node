export interface DescribeWorkflowInstanceResponse {
    /**
     * 工作流实例ID
     * @example `wi-3q9jo749ne5****`
     */
    workflowInstanceId: string;
    /**
     * 工作流ID
     * @example `w-3q9jo749ne5****`
     */
    workflowId: string;
    /**
     * 工作流版本号
     * @example `1`
     */
    workflowVersion: number;
    /**
     * 状态
     * @example `SUCCESS`
     */
    status: string;
    /**
     * 开始时间
     * @example `2024-03-27 00:00:00`
     */
    startTime: string;
    /**
     * 结束时间
     * @example `2024-03-27 00:00:00`
     */
    endTime: string;
    /**
     * 调度时间
     * @example `2024-03-27 00:00:00`
     */
    scheduleTime: string;
    /**
     * 运行次数
     * @example `1`
     */
    runTimes: number;
    /**
     * 工作流实例名称
     * @example `workflow_instance_name`
     */
    name: string;
    /**
     * 资源组ID
     * @example `wg-susqimrr649x****`
     */
    resourceGroupId: string;
    /**
     * EMR集群id
     * @example `c-047fa6bbe732****`
     */
    emrClusterId: string;
    /**
     * 超时的时间，单位：分钟
     * @example `0`
     */
    timeout: number;
    /**
     * 是否为补数实例
     * @example `false`
     */
    isComplementData: boolean;
    /**
     * 请求ID
     * @example `DD6B1B2A-5837-5237-ABE4-FF0C8944****`
     */
    requestId: string;
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
     * 重新运行时间
     * @example `2024-03-27 00:00:00`
     */
    restartTime: string;
}
