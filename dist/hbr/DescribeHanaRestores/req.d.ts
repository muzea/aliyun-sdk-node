export interface DescribeHanaRestoresRequest {
    /**
     * 备份仓库ID。
     * @example `v-000au6bq******mpu`
     */
    "VaultId"?: string;
    /**
     * SAP HANA实例ID。
     * @example `cl-000b******soejg`
     */
    "ClusterId": string;
    /**
     * 分页页码。从1开始，默认值为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页大小。最小值为1，最大值为99，默认值为10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 恢复任务ID。
     * @example `r-0007o3vqfukfe92hvf13`
     */
    "RestoreId"?: string;
    /**
     * 数据库名称。
     * @example `SYSTEMDB`
     */
    "DatabaseName"?: string;
    /**
     * 备份ID。
     * @example `1632754800158`
     */
    "BackupId"?: number;
    /**
     * 恢复任务状态。
     *   - **RUNNING**：运行中
     *   - **COMPLETE**：成功
     *   - **PARTIAL_COMPLETE**：部分成功
     *   - **FAILED**：失败
     *   - **CANCELED**：已取消
     *   - **EXPIRED**：已超时
     * @example `COMPLETE`
     */
    "RestoreStatus"?: string;
    /**
     * 资源组ID。
     * @example `rg-acfm4ebtpkzx7zy`
     */
    "ResourceGroupId"?: string;
}
