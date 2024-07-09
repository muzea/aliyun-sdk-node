export interface DescribeBackupLogsRequest {
    /**
     * 集群ID。
     * @example `pc-**************`
     */
    "DBClusterId": string;
    /**
     * 查询开始时间。格式为 `YYYY-MM-DDThh:mmZ`（UTC时间）。
     * @example `2020-02-01T15:00Z`
     */
    "StartTime": string;
    /**
     * 查询结束时间，需晚于查询开始时间。格式为`YYYY-MM-DDThh:mmZ`（UTC时间）。
     * @example `2020-02-12T15:00Z`
     */
    "EndTime": string;
    /**
     * 备份地域。
     * @example `cn-hangzhou`
     */
    "BackupRegion"?: string;
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
     * 页码，取值范围为大于0且不超过Integer的最大值的整数，默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
}
