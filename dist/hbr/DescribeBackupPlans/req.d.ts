export interface DescribeBackupPlansRequest {
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
     * - **OTS**：备份阿里云表格存储
     * - **UDM_ECS**：备份阿里云ECS整机
     * @example `ECS_FILE`
     */
    "SourceType"?: string;
    /**
     * 查询过滤器。
     */
    "Filters"?: {
        /**
         * 查询过滤器中的键值。取值可包括：
         * - **regionId**：地域ID
         * - **planId**：计划ID
         * - **sourceType**：备份源类型
         * - **vaultId**：仓库ID
         * - **instanceName**：实例名称
         * - **instanceId**：实例ID
         * - **planName**：计划名称
         * @example `vaultId`
         */
        Key: string;
        /**
         * 查询过滤器中的待匹配的值。
         * @example `["v-*********************"]`
         */
        Values: string[];
    }[];
}
