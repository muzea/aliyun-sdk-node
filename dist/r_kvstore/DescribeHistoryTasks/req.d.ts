export interface DescribeHistoryTasksRequest {
    /**
     * 待处理事件所属的地域ID，可调用[DescribeRegions](~~61012~~)查询。
     * @example `cn-beijing`
     */
    "RegionId"?: string;
    /**
     * 每页记录数，取值：10~100。默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 查询结果的页码。取值范围：正整数。 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 当前固定为Instance。
     * @example `Instance`
     */
    "InstanceType"?: string;
    /**
     * 任务状态，用于选择对应状态的任务：
     * - **Scheduled**：等待执行
     * - **Running**：执行中
     * - **Succeed**：执行成功
     * - **Failed**：执行失败
     * - **Cancelling**：正在终止
     * - **Canceled**：已终止
     * - **Waiting**：等待预设时间
     * > 默认为空，表示全选，如需选择多个状态请用英文逗号（,）分隔。
     * @example `Scheduled`
     */
    "Status"?: string;
    /**
     * 实例ID，用于查询对应实例的任务，默认为空，表示不限制。如需查询多个实例请用英文逗号（,）分隔，最多支持30个。
     * @example `r-uf62br2491p5l****
    `
     */
    "InstanceId"?: string;
    /**
     * 任务ID，用于查询已知ID的任务默认为空，表示不限制。如需查询多个请用英文逗号（,）分隔，最多支持30个。
     * @example `t-83br18hloy3faf****
    `
     */
    "TaskId"?: string;
    /**
     * 任务类型，用于查询特定类型任务情况，默认为空，表示不限制，取值如下：
     * - **ModifyInsSpec**：规格变更或迁移
     * - **DeleteInsNode**：删除分片
     * - **AddInsNode**：增加分片
     * - **HaSwitch**：实例主备切换
     * - **RestartIns**：重启实例
     * - **CreateIns**：创建实例
     * - **ModifyInsConfig**：配置变更
     * > 如需查询多个请用英文逗号（,）分隔。
     * @example `ModifyInsSpec`
     */
    "TaskType"?: string;
    /**
     * 查询任务的最早开始时间，格式为yyyy-MM-ddTHH:mm:ssZ（UTC时间），最早支持查询30天前的数据。
     * @example `2022-01-02T11:31:03Z`
     */
    "FromStartTime": string;
    /**
     * 查询任务的最晚开始时间，格式为yyyy-MM-ddTHH:mm:ssZ（UTC时间），需晚于任务的最早开始时间。
     * @example `2022-02-02T11:31:03Z`
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
}
