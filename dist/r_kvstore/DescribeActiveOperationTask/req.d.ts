export interface DescribeActiveOperationTaskRequest {
    /**
     * 待处理事件所属的地域ID，可调用[DescribeRegions](~~61012~~)接口获取。
     * > 取值为**all**表示所有地域ID。
     * @example `all`
     */
    "Region": string;
    /**
     * 任务类型，取值：
     * - **rds\_apsaradb\_ha**：主从节点切换。
     * - **rds\_apsaradb\_transfer**：实例迁移。
     * - **rds\_apsaradb\_upgrade**：小版本升级。
     * @example `rds_apsaradb_ha`
     */
    "TaskType": string;
    /**
     * 是否返回历史任务，取值：
     * * **0**：默认值，返回当前任务。
     * * **1**：返回历史任务。
     * @example `1`
     */
    "IsHistory"?: number;
    /**
     * 每页可展示的最大记录数，取值需大于**10**，默认值为**30**。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 页码，大于**0**且不超过Integer数据类型的最大值，默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
}
