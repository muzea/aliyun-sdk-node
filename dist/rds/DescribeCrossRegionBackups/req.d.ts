export interface DescribeCrossRegionBackupsRequest {
    /**
     * 实例ID。
     * @example `rm-uf6wjk5****`
     */
    "DBInstanceId": string;
    /**
     * 实例所在地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 跨地域备份目的地域ID。
     * @example `cn-shanghai`
     */
    "CrossBackupRegion"?: string;
    /**
     * 跨地域备份文件ID。
     * >**CrossBackupId**和起止时间参数（**StartTime**、**EndTime**）必须传入其中一组。
     * @example `14562`
     */
    "CrossBackupId"?: number;
    /**
     * 查询开始时间，格式：*yyyy-MM-dd*T*HH:mm:ss*Z（GMT时间）。
     * > 非0时区需要在传入时在实际时间上减去8小时。
     * @example `2024-03-05T02:21:00Z`
     */
    "StartTime"?: string;
    /**
     * 查询结束时间，格式：*yyyy-MM-dd*T*HH:mm:ss*Z（GMT时间）。
     * > 非0时区需要在传入时在实际时间上减去8小时。
     * @example `2024-03-05T02:24:37Z`
     */
    "EndTime"?: string;
    /**
     * 每页记录数，取值：
     * * **30**
     * * **50**
     * * **100**
     * 默认值：30。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 页码，取值：大于0且不超过Integer的最大值。
     * 默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 用户备份ID。
     * @example `603524****`
     */
    "BackupId"?: number;
    /**
     * 资源组ID。
     * @example `rg-acfmy****`
     */
    "ResourceGroupId"?: string;
}
