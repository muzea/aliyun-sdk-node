export interface DescribeDBClusterHealthStatusRequest {
    /**
     * AnalyticDB MySQL数仓版（3.0）集群ID。
     * >您可以调用[DescribeDBClusters](~~129857~~)接口查看目标地域下所有AnalyticDB MySQL数仓版（3.0）集群的集群ID。
     * @example `am-bp1d8lbdj22rx****`
     */
    "DBClusterId": string;
    /**
     * 地域ID。
     * >您可以调用[DescribeRegions](~~143074~~)接口查看可用地域的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
