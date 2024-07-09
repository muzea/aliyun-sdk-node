export interface DescribeActiveOperationTasksRequest {
    /**
     * 待处理事件所属的地域ID，可调用[DescribeRegions](~~144489~~)接口获取。
     * @example `cn-hangzhou`
     */
    "Region"?: string;
    /**
     * 任务类型，取值：**rds_apsaradb_upgrade**表示小版本升级。
     * @example `rds_apsaradb_upgrade`
     */
    "TaskType"?: string;
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
    /**
     * 产品名， 默认值为**hbase**。
     * @example `hbase`
     */
    "ProductId"?: string;
    /**
     * 数据库类型，取值：
     * - **hbaseue**：云数据库HBase增强版。
     * - **hbase**：云数据库HBase标准版。
     * - **bds**：BDS数据同步服务。
     * @example `hbaseue`
     */
    "DbType"?: string;
    /**
     * 任务运行状态，取值：
     * - **2**：等待用户指定时间。
     * - **3**：等待处理。
     * - **4**：处理中。
     * - **5**：成功。
     * - **6**：失败。
     * - **7**：已取消。
     * @example `5`
     */
    "Status"?: number;
    /**
     * HBase实例ID。
     * @example `ld-bp150tns0sjxs****`
     */
    "InsName"?: string;
    /**
     * 是否允许修改时间，取值：
     * - **0**：不允许。
     * - **1**：允许。
     * @example `1`
     */
    "AllowChange"?: number;
    /**
     * 是否允许取消，取值：
     * - **0**：不允许。
     * - **1**：允许。
     * @example `1`
     */
    "AllowCancel"?: number;
    /**
     * 变更级别，取值：
     * - **S0**：异常修复。
     * - **S1**：系统运维。
     * @example `S1`
     */
    "ChangeLevel"?: string;
}
