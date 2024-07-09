export interface EnableAdviceServiceRequest {
    /**
     * 集群ID。
     * > 您可以调用[DescribeDBClusters](~~129857~~)接口查看数仓版（3.0）集群的集群ID。
     * @example `am-bp1q10xxzq2z4****`
     */
    "DBClusterId": string;
    /**
     * 地域ID。
     * > 您可以调用[DescribeRegions](~~143074~~)接口查看可用地域的地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
}
