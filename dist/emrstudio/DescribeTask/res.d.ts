export interface DescribeTaskResponse {
    /**
     * Id of the request
     * @example `DD6B1B2A-5837-5237-ABE4-FF0C8944****`
     */
    requestId: string;
    /**
     * 任务ID
     * @example `t-3q9jo749ne5****`
     */
    TaskId: string;
    /**
     * 任务名称
     * @example `test`
     */
    TaskName: string;
    /**
     * 创建时间
     * @example `2024-03-27 00:00:00`
     */
    CreateTime: string;
    /**
     * 更新时间
     * @example `2024-03-27 00:00:00`
     */
    UpdateTime: string;
    /**
     * 版本
     * @example `1`
     */
    Version: string;
    /**
     * 描述
     * @example `test`
     */
    Description: string;
    /**
     * 项目ID
     * @example `p-3q9jo749ne5****`
     */
    ProjectId: string;
    /**
     * 任务类型
     * @example `SHELL`
     */
    TaskType: string;
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
     * 运行标志
     * @example `YES`
     */
    Flag: string;
    /**
     * 任务优先级
     * @example `MEDIUM`
     */
    TaskPriority: string;
    /**
     * 失败重试次数
     * @example `0`
     */
    FailRetryTimes: number;
    /**
     * 失败重试间隔
     * @example `1`
     */
    FailRetryInterval: number;
    /**
     * 超时告警标志
     * @example `CLOSE`
     */
    TimeoutFlag: string;
    /**
     * 超时策略
     * @example `WARN`
     */
    TimeoutNotifyStrategy: string;
    /**
     * 超时时长
     * @example `10`
     */
    Timeout: number;
    /**
     * 延时执行时间
     * @example `0`
     */
    DelayTime: number;
    /**
     * 资源ID列表
     * @example `r-oy98v7n43el****`
     */
    ResourceIds: string;
}
