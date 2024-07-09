export interface DescribeBackupsRequest {
    /**
     * 实例ID。
     * > 当本参数传入的是分片集群实例ID时，还需要传入**NodeId**参数。
     * @example `dds-bp1a7009eb24****`
     */
    "DBInstanceId": string;
    /**
     * 分片集群实例中Shard节点的ID。
     * > 当**DBInstanceId**参数传入的是分片集群实例ID时，本参数必填。
     * @example `d-bp128a003436****`
     */
    "NodeId"?: string;
    /**
     * 备份ID。
     * 当**DBInstanceId**参数传入的是分片集群实例ID时，备份ID个数与Shard节点个数相同，中间用英文逗号（,）间隔。
     * @example `2072****,2072****,2072****`
     */
    "BackupId"?: string;
    /**
     * 页码，取值为大于0且不超过Integer数据类型的最大值，默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页记录数，取值：
     * - **30**（默认值）
     * - **50**
     * - **100**
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 查询开始时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
     * @example `2022-01-13T13:00Z`
     */
    "StartTime"?: string;
    /**
     * 查询结束时间，必须晚于查询开始时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
     * @example `2022-01-14T13:00Z`
     */
    "EndTime"?: string;
    "SrcRegion"?: string;
    "DestRegion"?: string;
}
