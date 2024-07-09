export interface DescribeDBClusterConfigRequest {
    /**
     * 修改的配置项文件。
     * - 计算集群为：be.conf。
     * - fe集群为：fe.conf。
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
     * @example `selectdb-cn-7213cjv****`
     */
    "DBInstanceId": string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
