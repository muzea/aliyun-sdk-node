export interface DescribeDBClusterSpaceSummaryRequest {
    /**
     * AnalyticDB MySQL数仓版（3.0）集群ID。
     * >您可以调用[DescribeDBClusters](~~129857~~)接口查看目标地域下所有AnalyticDB MySQL数仓版（3.0）集群的集群ID。
     * @example `am-bp1u8c0mgfg58****`
     */
    "DBClusterId": string;
    /**
     * 地域ID。
     * > 您可以调用[DescribeRegions](~~143074~~)接口查看AnalyticDB MySQL版支持的地域和可用区信息，包括地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
