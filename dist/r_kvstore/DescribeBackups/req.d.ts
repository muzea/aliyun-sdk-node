export interface DescribeBackupsRequest {
    /**
     * 实例ID。
     * @example `r-bp1zxszhcgatnx****`
     */
    "InstanceId": string;
    /**
     * 备份文件的ID。
     * @example `11611111`
     */
    "BackupId"?: number;
    /**
     * 备份任务ID，由CreateBackup返回，CreateBackup若返回多个BackupJobId，则需要使用本接口分别对其查询。
     * @example `10001`
     */
    "BackupJobId"?: number;
    /**
     * 每页最大记录数，取值：30、50、100、200或300。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 页码，取值大于**0**且不超过Integer数据类型的最大值，默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 查询开始时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
     * @example `2019-03-11T10:00Z`
     */
    "StartTime": string;
    /**
     * 查询结束时间，必须晚于查询开始时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
     * @example `2019-03-14T18:00Z`
     */
    "EndTime": string;
    /**
     * 是否开启AoF落盘，取值：
     * * **0**：关闭。
     * * **1**：开启。
     * > 默认值：**0**。
     * @example `1`
     */
    "NeedAof"?: string;
}
