export interface DescribeDBInstanceTopologyRequest {
    /**
     * 实例所属的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例ID。
     * @example `pxc-********`
     */
    "DBInstanceName": string;
    /**
     * 查询拓扑中历史实例范围开始时间，格式为yyyy-MM-dd HH:mm:ss。
     * @example `2021-10-21T10:30:45Z 04:00:00`
     */
    "StartTime"?: string;
    /**
     * 查询拓扑中历史实例范围结束时间，格式为yyyy-MM-dd HH:mm:ss。
     * @example `2021-10-22T10:30:45Z 04:00:00`
     */
    "EndTime"?: string;
}
