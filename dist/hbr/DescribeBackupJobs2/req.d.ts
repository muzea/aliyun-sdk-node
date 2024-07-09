export interface DescribeBackupJobs2Request {
    /**
     * 分页页码，从1开始，默认值为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页大小，最小值为1，最大值为99，默认值为10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 数据源类型，取值范围：
     * - **ECS_FILE**：备份ECS文件
     * - **OSS**：备份阿里云OSS
     * - **NAS**：备份阿里云NAS
     * - **OTS**：备份阿里云OTS
     * - **UDM_ECS**：备份ECS整机
     * - **UDM\_ECS\_DISK**：ECS整机备份-云盘备份子任务
     * - **COMMON_NAS**：通用NAS数据源，包括归档NAS数据源和本地NAS数据源。您需要通过Filters的Values区分数据源类型。
     * - **File**：本地文件备份
     * @example `ECS_FILE`
     */
    "SourceType"?: string;
    /**
     * 排序方向。取值范围：
     * - **ASCEND**：升序
     * - **DESCEND**（默认）：降序
     * @example `DESCEND`
     */
    "SortDirection"?: string;
    /**
     * 查询过滤器中的键值。
     */
    "Filters"?: {
        /**
         * 查询过滤器中的键值。取值包括：
         * - **RegionId**：地域ID
         * - **PlanId**：备份计划ID
         * - **JobId**：备份任务ID
         * - **VaultId**：仓库ID
         * - **InstanceId**：ECS实例ID
         * - **Bucket**：OSS bucket名称
         * - **FileSystemId**：文件系统ID
         * - **Status**：任务状态
         * - **CreatedTime**：任务开始时间
         * - **CompleteTime**：任务结束时间
         * - **InstanceName**：表格存储实例名称
         * - **BackupType**：备份任务（仅当 SourceType 取值为COMMON_NAS时，需要配置该参数）
         * @example `VaultId`
         */
        Key: string;
        /**
         * 查询过滤器的变量值。
         */
        Values: string[];
        /**
         * 匹配方式。默认为IN。即过滤器中Key和Value支持的匹配操作（Operator）方式，取值包括：
         * - **EQUAL**：等于
         * - **NOT_EQUAL**：不等于
         * - **GREATER_THAN**：大于
         * - **GREATER_THAN_OR_EQUAL**：大于等于
         * - **LESS_THAN**：小于
         * - **LESS_THAN_OR_EQUAL**：小于等于
         * - **BETWEEN**：区间，value为JSON数组`[下届,上届]`。
         * - **IN**：在集合中，value为数组。
         * > 当使用**CompleteTime**作为Key查询时，暂时不支持IN操作。
         * @example `IN`
         */
        Operator: string;
    }[];
}
