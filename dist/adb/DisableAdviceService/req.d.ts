export interface DisableAdviceServiceRequest {
    /**
     * 集群ID。
     * > 您可以调用[DescribeDBClusters](~~129857~~)接口查看数仓版（3.0）集群的集群ID。
     * @example `am-uf67culrr26q2****`
     */
    "DBClusterId": string;
    /**
     * 地域ID。
     * > 您可以通过[DescribeRegions](~~143074~~)查看可用地域的地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
}
