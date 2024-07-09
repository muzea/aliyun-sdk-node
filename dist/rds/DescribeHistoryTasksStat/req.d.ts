export interface DescribeHistoryTasksStatRequest {
    /**
     * 地域ID。可调用DescribeRegions获取。
     * @example `cn-beijing`
     */
    "RegionId": string;
    /**
     * 任务状态，用于选择对应状态的任务：
     * * Scheduled - 等待执行
     * * Running - 执行中
     * * Succeed - 执行成功
     * * Failed - 执行失败
     * * Cancelling - 正在终止
     * * Canceled - 已终止
     * * Waiting - 等待预设时间
     * 如有多个状态则用英文逗号分隔，默认为空，表示全选。
     * @example `Scheduled`
     */
    "Status"?: string;
    /**
     * 实例ID。
     * @example `rm-2ze704f*****`
     */
    "InstanceId"?: string;
    /**
     * 任务ID。
     * @example `12221`
     */
    "TaskId"?: string;
    /**
     * 任务类型。
     * @example `all`
     */
    "TaskType"?: string;
    /**
     * 查询开始时间。格式：<i>yyyy-mm-dd</i>t<i>hh:mm</i>z（utc时间）。
     * @example `2023-05-08T07:04:17Z`
     */
    "FromStartTime": string;
    /**
     * 任务开始时间的结束时间，表示查询任务开始时间在此时间之前的任务。按照ISO8601标准表示，并需要使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2023-02-24T10:01:37Z`
     */
    "ToStartTime": string;
    /**
     * 任务执行耗时的最小值。用于筛选任务执行耗时大于此时间的任务，单位秒。默认0，表示不限制。
     * @example `0`
     */
    "FromExecTime"?: number;
    /**
     * 任务执行耗时的最大值。用于筛选任务执行耗时不小于此时间的任务，单位秒。默认0，表示不限制。
     * @example `0`
     */
    "ToExecTime"?: number;
    /**
     * 资源组ID。
     * @example `rg-acfmy*****`
     */
    "ResourceGroupId"?: string;
}
