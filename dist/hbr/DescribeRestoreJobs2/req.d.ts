export interface DescribeRestoreJobs2Request {
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
     *   - **ECS_FILE**：恢复ECS文件。
     *   - **OSS**：恢复阿里云OSS。
     *   - **NAS**：恢复阿里云NAS。
     *   - **OTS_TABLE**：恢复到阿里云OTS。
     *   - **UDM\_ECS_ROLLBACK**：恢复到阿里云ECS整机。
     * @example `ECS_FILE`
     */
    "RestoreType"?: string;
    /**
     * 查询过滤器中的键值。
     */
    "Filters"?: {
        /**
         * 查询过滤器中的键值。取值包括：
         *   - **RegionId**：地域ID
         *   - **PlanId**：备份计划ID
         *   - **JobId**：备份任务ID
         *   - **VaultId**：仓库ID
         *   - **InstanceId**：ECS实例ID
         *   - **Bucket**：OSS Bucket名称
         *   - **FileSystemId**：文件系统ID
         *   - **Status**：任务状态
         *   - **CompleteTime**：任务结束时间
         * @example `VaultId`
         */
        Key: string;
        /**
         * 查询过滤器中的待匹配的值。
         */
        Values: string[];
        /**
         * 匹配方式。默认为IN。即过滤器中Key和Value支持的匹配操作（Operator）方式，取值可包括：
         *   - **EQUAL**：等于
         *   - **NOT_EQUAL**：不等于
         *   - **GREATER_THAN**：大于
         *   - **GREATER_THAN_OR_EQUAL**：大于等于
         *   - **LESS_THAN**：小于
         *   - **LESS_THAN_OR_EQUAL**：小于等于
         *   - **BETWEEN**：区间，value为JSON数组`[下届,上届]`。
         *   - **IN**：在集合中，value为数组。
         * > 当使用**CompleteTime**作为Key查询时，暂时不支持IN操作。
         * @example `IN`
         */
        Operator: string;
    }[];
}
