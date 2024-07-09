export interface DescribeBackupsRequest {
    /**
     * 集群ID。
     * @example `hb-t4naqsay5gn****`
     */
    "ClusterId": string;
    /**
     * 要查询的备份ID。
     * @example `job-xxxx`
     */
    "BackupId"?: string;
    /**
     * 页码。
     * @example `1`
     */
    "PageNumber"?: string;
    /**
     * 页面大小。
     * @example `10`
     */
    "PageSize"?: string;
    /**
     * 查询备份的开始时间，格式为yyyy-MM-dd HH:mm。
     * @example `2020-12-13 00:00:00`
     */
    "StartTime"?: string;
    /**
     * 查询备份的结束时间，格式为yyyy-MM-dd HH:mm。
     * @example `2020-12-23 23:59:59`
     */
    "EndTime"?: string;
    /**
     * 查询备份的开始时间，格式为yyyy-MM-ddTHH:mmZ（UTC时间）。
     * @example `2020-12-12T16:00:00Z`
     */
    "StartTimeUTC"?: string;
    /**
     * 查询备份的结束时间，必须晚于查询开始时间，格式为yyyy-MM-ddTHH:mmZ（UTC时间）。
     * @example `2020-12-23T15:59:59Z`
     */
    "EndTimeUTC"?: string;
}
