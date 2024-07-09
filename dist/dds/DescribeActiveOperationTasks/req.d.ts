export interface DescribeActiveOperationTasksRequest {
    /**
     * 地域ID。
     * > **all**表示查询该用户下所有的任务，当此参数传入值为**all**时， **taskType**参数的值也必须为**all**。
     * @example `cn-beijing`
     */
    "Region"?: string;
    /**
     * 任务类型。
     * @example `***`
     */
    "TaskType"?: string;
    /**
     * 每页记录数，取值： **30、50、100**，默认值为**30**。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 产品ID。
     * @example `***`
     */
    "ProductId"?: string;
    /**
     * 数据库类型。
     * @example `***`
     */
    "DbType"?: string;
    /**
     * 任务状态。
     * - **0**：等待执行。
     * - **1**：执行中。
     * - **2**：执行成功。
     * - **3**：执行失败。
     * @example `0`
     */
    "Status"?: number;
    /**
     * 实例的名称。
     * @example `dds-bp16aaccfe10****`
     */
    "InsName"?: string;
    /**
     * 是否允许修改时间。取值如下：
     * - **0**：不允许修改。
     * - **1**：允许修改。
     * @example `1`
     */
    "AllowChange"?: number;
    /**
     * 是否允许取消。取值如下：
     * - **0**：不允许取消。
     * - **1**：允许取消。
     * @example `***`
     */
    "AllowCancel"?: number;
    /**
     * 变更类型。取值如下：
     * - **all**（默认）：全部运维。
     * - **S0**：异常修复。
     * - **S1**：系统运维。
     * @example `***`
     */
    "ChangeLevel"?: string;
}
