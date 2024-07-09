export interface DescribeHistoryTasksRequest {
    /**
     * 待处理事件所属的地域ID，可调用DescribeRegions接口获取。
     * @example `cn-beijing`
     */
    "RegionId"?: string;
    /**
     * 每页记录数，取值：**10~100**。默认值：**10**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 查询结果的页码。取值范围：正整数。
     * 默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 当前只支持Instance。
     * @example `Instance`
     */
    "InstanceType"?: string;
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
     * 实例ID，用于查询对应实例的任务，如有多个用英文逗号分隔，最多支持30个，默认为空，表示不限制。
     * @example `rm-uf62br2491p5l****`
     */
    "InstanceId"?: string;
    /**
     * 任务ID，用于查询已知ID的任务，如有多个英文用逗号分隔，最多支持30个，默认为空，表示不限制。
     * @example `t-83br18hloy3faf****
    `
     */
    "TaskId"?: string;
    /**
     * 任务类型，用于查询特定类型任务情况，如有多个用英文逗号分隔，最多支持30个，默认为空，表示不限制。
     * @example `autotest_dispatch_cases
    `
     */
    "TaskType"?: string;
    /**
     * 任务开始时间的起始时间，表示查询任务开始时间在此时间之后的任务。按照ISO8601标准表示，并需要使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。最早支持30天前，距当前时间超过30天会自动转换成30天前。
     * @example `2022-01-02T11:31:03Z`
     */
    "FromStartTime": string;
    /**
     * 任务开始时间的结束时间，表示查询任务开始时间在此时间之前的任务。按照ISO8601标准表示，并需要使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2022-03-02T11:31:03Z`
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
     * @example `rg-ae****`
     */
    "ResourceGroupId"?: string;
}
