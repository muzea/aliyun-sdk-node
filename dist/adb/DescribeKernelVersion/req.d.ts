export interface DescribeKernelVersionRequest {
    /**
     * 集群ID。
     * > * 您可以调用[DescribeDBClusters](~~98094~~)接口查看目标地域下所有的集群信息，包括集群ID。
     * @example `am-bp1ub9grke1****`
     */
    "DBClusterId": string;
    /**
     * 地域ID。
     * > 您可以调用[DescribeRegions](~~612293~~)接口查看地域ID。
     * @example `cn-shanghai`
     */
    "RegionId"?: string;
}
