export interface DescribeClusterBackupListRequest {
    /**
     * 实例所属的地域ID，可调用[DescribeRegions](~~61012~~)接口获取。
     * @example `cn-zhangjiakou`
     */
    "RegionId": string;
    /**
     * 实例ID。
     * @example `r-t4nj72oug5r5646qog`
     */
    "InstanceId": string;
    /**
     * 集群备份集ID。
     * @example `cb-hyxdof5x9kqbtust
    `
     */
    "ClusterBackupId"?: string;
    /**
     * 每页可展示的记录数。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 当前页的页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 查询开始时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
     * @example `2024-06-28T08:26Z`
     */
    "StartTime": string;
    /**
     * 查询结束时间，必须晚于查询开始时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
     * @example `2024-07-01T09:26Z`
     */
    "EndTime": string;
}
