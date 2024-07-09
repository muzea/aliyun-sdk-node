export interface DescribeAdviceServiceEnabledRequest {
    /**
     * 集群ID。
     * > 您可以调用[DescribeDBClusters](~~129857~~)接口查看数仓版（3.0）集群的集群ID。
     * @example `am-2ze0vp0j6t3to****`
     */
    "DBClusterId": string;
    /**
     * 地域ID。
     * > 您可以调用[DescribeRegions](~~143074~~)接口查看地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
