export interface DescribeDataBackupSetRequest {
    /**
     * OceanBase 集群 ID。
     * @example `ob317v4uif****`
     */
    "InstanceId": string;
    /**
     * 按照备份集状态查询。
     * @example `DONE`
     */
    "Status"?: string;
    /**
     * 按照备份对象类型查询。
     * @example `tenant`
     */
    "BackupObjectType"?: string;
    /**
     * 开始时间，
     * 格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2022-12-27T16:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 备份集结束时间。
     * @example `2023-01-06T15:59:59Z`
     */
    "EndTime"?: string;
    /**
     * 页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页数量。
     * 默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
}
