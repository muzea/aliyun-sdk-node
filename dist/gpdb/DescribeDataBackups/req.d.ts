export interface DescribeDataBackupsRequest {
    /**
     * 实例ID。
     * > 您可以调用[DescribeDBInstances](~~86911~~)接口查看目标地域下所有的AnalyticDB PostgreSQL实例的详情，包括实例ID。
     * @example `gp-bp***************`
     */
    "DBInstanceId": string;
    /**
     * 备份集ID。如果带上BackupId，则是查询该备份详情。
     * > 您可以调用[DescribeDataBackups](~~210093~~)查看目标实例下的所有备份集信息，包括备份集ID。
     * @example `327329803`
     */
    "BackupId"?: string;
    /**
     * 查询开始时间。格式： yyyy-MM-ddTHH:mmZ（UTC时间）。
     * @example `2011-06-01T15:00Z`
     */
    "StartTime": string;
    /**
     * 查询结束时间，需要大于查询开始时间。格式： yyyy-MM-ddTHH:mmZ（UTC时间）。
     * @example `2011-06-01T16:00Z`
     */
    "EndTime": string;
    /**
     * 每页记录数。取值说明：
     * - 30
     * - 50
     * - 100
     * 默认值：30。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 页码，取值大于0且不超过Integer的最大值。默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 备份类型。取值说明：
     * - **DATA**：全量备份。
     * - **RESTOREPOI**：可恢复点。
     * 如果不传，则默认返回全量备份集的记录。
     * @example `DATA`
     */
    "DataType"?: string;
    /**
     * 备份模式。取值说明：
     * - Automated：系统自动备份。
     * - Manual：手动备份。
     * 如果不传，则返回所有。
     * @example `Automated`
     */
    "BackupMode"?: string;
    /**
     * 备份集状态。取值说明：
     * - Success：已完成备份。
     * - Failed：备份失败。
     * 如果不传，则返回所有。
     * @example `Success`
     */
    "BackupStatus"?: string;
}
