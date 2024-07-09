export interface ModifyDBClusterMaintainTimeRequest {
    /**
     * 集群ID。
     * > 您可以调用[DescribeDBClusters](~~129857~~)接口查看目标地域下所有AnalyticDB MySQL集群的详情，包括集群ID。
     * @example `am-bp111m2cfrdl****`
     */
    "DBClusterId": string;
    /**
     * 集群的可维护时间段，格式为hh:mmZ-hh:mmZ。
     * > 时间间隔只能为1小时，且需要设置为整点。
     * @example `22:00Z-23:00Z`
     */
    "MaintainTime": string;
}
