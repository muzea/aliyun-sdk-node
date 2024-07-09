export interface DescribeTaskInstanceResponse {
    /**
     * Id of the request
     * @example `DD6B1B2A-5837-5237-ABE4-FF0C8944****`
     */
    requestId: string;
    /**
     * 任务实例ID
     * @example `ti-3q9jo749ne5****`
     */
    TaskInstanceId: string;
    /**
     * 任务实例名称
     * @example `test`
     */
    TaskInstanceName: string;
    /**
     * 任务类型
     * @example `SHELL`
     */
    TaskType: string;
    /**
     * 任务ID
     * @example `t-3q9jo749ne5****`
     */
    TaskId: string;
    /**
     * 任务版本
     * @example `1`
     */
    TaskVersion: string;
    /**
     * 工作流实例ID
     * @example `wi-3q9jo749ne5****`
     */
    WorkflowInstanceId: string;
    /**
     * 状态
     * @example `SUCCESS`
     */
    Status: string;
    /**
     * 提交时间
     * @example `2024-03-27 00:00:00`
     */
    SubmitTime: string;
    /**
     * 开始时间
     * @example `2024-03-27 00:00:00`
     */
    StartTime: string;
    /**
     * 结束时间
     * @example `2024-03-27 00:00:00`
     */
    EndTime: string;
    /**
     * 重试次数
     * @example `0`
     */
    RetryTimes: number;
    /**
     * 外部应用ID
     * @example `application_123_***`
     */
    ExternalAppId: string;
    /**
     * 任务参数
     * @example `{
        "yarnUser": "",
        "conditionResult": "null",
        "rawScript": "sleep 300",
        "submitOnYarnFlag": false,
        "emrClusterId": "",
        "yarnPriority": "",
        "dependence": "null",
        "yarnMemory": "",
        "localParams": [],
        "switchResult": "null",
        "resourceList": [],
        "yarnQueue": "",
        "yarnVCores": "",
        "associateManualTaskFlag": false
    }`
     */
    TaskParams: string;
    /**
     * 资源组ID
     * @example `wg-123abc***`
     */
    ResourceGroupId: string;
    /**
     * EMR集群ID
     * @example `c-b933c5aac7f7***`
     */
    EmrClusterId: string;
    /**
     * 空跑标识
     * @example `0`
     */
    DryRun: string;
}
