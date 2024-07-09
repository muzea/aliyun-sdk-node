export interface DescribeDetachedBackupsRequest {
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-uf6wjk5****`
     */
    "DBInstanceId"?: string;
    /**
     * 备份集ID。
     * @example `327****`
     */
    "BackupId"?: string;
    /**
     * 备份集状态，取值：
     * - **Success**：已完成备份
     * - **Failed**：备份失败
     * @example `Success`
     */
    "BackupStatus"?: string;
    /**
     * 备份模式，取值：
     * - **Automated**：系统自动备份
     * - **Manual**：手动备份
     * @example `Automated`
     */
    "BackupMode"?: string;
    /**
     * 查询开始时间。
     * 格式：<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
     * @example `2021-03-01T16:00Z`
     */
    "StartTime"?: string;
    /**
     * 查询结束时间，需要大于查询开始时间。
     * 格式：<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
     * @example `2021-03-15T16:00Z`
     */
    "EndTime"?: string;
    /**
     * 每页记录数，取值：
     * - **30**
     * - **50**
     * - **100**
     * > 默认值：**30**。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 页码，取值：大于0且不超过Integer的最大值。
     * > 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 实例所在的地域。
     * @example `cn-hangzhou`
     */
    "Region": string;
    /**
     * 资源组ID。
     * @example `rg-acfmy****`
     */
    "ResourceGroupId"?: string;
}
