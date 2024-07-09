export interface DescribeDBClusterConfigChangeLogsRequest {
    /**
     * 修改的配置项文件，计算集群固定为be.conf，fe集群固定为fe.conf。
     * @example `be.conf`
     */
    "ConfigKey": string;
    /**
     * 集群ID。
     * @example `selectdb-cn-7213c8yvv09-be`
     */
    "DBClusterId": string;
    /**
     * 实例ID。
     * @example `selectdb-cn-jia3ma3b003`
     */
    "DBInstanceId": string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 变更记录查询的起始时间
     * @example `2023-04-25T09:48:23Z`
     */
    "StartTime": string;
    /**
     * 变更记录查询的截止时间
     * @example `2023-05-08T15:59:59Z`
     */
    "EndTime": string;
}
