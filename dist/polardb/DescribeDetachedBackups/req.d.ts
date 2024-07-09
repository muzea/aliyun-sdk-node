export interface DescribeDetachedBackupsRequest {
    /**
     * 集群ID。
     * @example `pc-****************`
     */
    "DBClusterId": string;
    /**
     * 备份ID。
     * @example `111111111`
     */
    "BackupId"?: string;
    /**
     * 备份状态，取值范围如下：
     * * **Success**：备份完成
     * * **Failed**：备份失败
     * @example `Success`
     */
    "BackupStatus"?: string;
    /**
     * 备份模式，取值范围如下：
     * * **Automated**：系统自动备份
     * * **Manual**：手动备份
     * @example `Manual`
     */
    "BackupMode"?: string;
    /**
     * 跨地域备份的目的地域。
     * > 当前仅PolarDB MySQL版支持该参数。
     * @example `cn-hangzhou`
     */
    "BackupRegion"?: string;
    /**
     * 查询开始时间，格式为`YYYY-MM-DDThh:mmZ`（UTC时间）。
     * @example `2020-05-01T00:00Z`
     */
    "StartTime": string;
    /**
     * 查询结束时间，查询结束时间需晚于开始时间，格式为`YYYY-MM-DDThh:mmZ`（UTC时间）。
     * @example `2020-05-14T00:00Z`
     */
    "EndTime": string;
    /**
     * 每页记录数，取值范围如下：
     * * **30**
     * * **50**
     * * **100**
     * 默认值为**30**。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 页码，取值范围为大于0但不超过Integer最大值的整数，默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
}
