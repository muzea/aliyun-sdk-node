export interface DescribePendingMaintenanceActionRequest {
    /**
     * 待处理事件所在地域的地域ID，您可以调用[DescribeRegions](~~98041~~)接口查看PolarDB支持的地域和可用区。
     * > * 您可以输入**all**查看您账户下所有的待处理事件。
     * > * 当`Region`设置为**all**时，`TaskType`也必须设置为**all**。
     * @example `all`
     */
    "Region": string;
    /**
     * 待处理事件的任务类型，取值范围如下：
     * * **DatabaseSoftwareUpgrading**：数据库软件升级
     * * **DatabaseHardwareMaintenance**：硬件维护与升级
     * * **DatabaseStorageUpgrading**：数据库存储升级
     * * **DatabaseProxyUpgrading**：代理小版本升级
     * * **all**：表示查询上述所有类型的待处理事件详情
     * > 当`Region`设置为**all**时，`TaskType`也必须设置为**all**。
     * @example `all`
     */
    "TaskType": string;
    /**
     * 是否返回历史任务，取值范围如下：
     * * **0**：返回当前任务
     * * **1**：返回历史任务
     * 默认取值为**0**。
     * @example `0`
     */
    "IsHistory"?: number;
    /**
     * 每页记录数，取值为**30**、**50**或**100**。
     * 默认值为**30**。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 页码，取值为大于0且不超过Integer数据类型的最大值，默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 资源组ID。
     * @example `rg-************`
     */
    "ResourceGroupId"?: string;
}
