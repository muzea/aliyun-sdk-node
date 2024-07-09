export interface DescribeDBClusterAttributeRequest {
    /**
     * AnalyticDB MySQL数仓版集群ID。
     * > 您可以调用[DescribeDBClusters](~~129857~~)接口查看目标地域下所有AnalyticDB MySQL数仓版集群的集群ID。
     * @example `am-bp111m2cfrdl1****`
     */
    "DBClusterId": string;
    /**
     * 集群所在的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
