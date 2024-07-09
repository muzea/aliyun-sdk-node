export interface DescribeSQAConfigRequest {
    /**
     * 地域ID。
     * > 您可以调用[DescribeRegions](~~143074~~)接口查看指定AnalyticDB MySQL数仓版（3.0）支持的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 资源组ID。
     * @example `rg-4690g37929****`
     */
    "ResourceGroupId"?: string;
    /**
     * AnalyticDB MySQL数仓版（3.0）集群ID。
     * >您可以调用[DescribeDBClusters](~~129857~~)接口查看AnalyticDB MySQL数仓版（3.0）集群的集群ID。
     * @example `am-8vbyw9awuj141haf9`
     */
    "DBClusterId": string;
    /**
     * 资源组名称。
     * > 您可以调用[DescribeDBResourceGroup](~~612410~~)接口查看指定集群的资源组信息，包括资源组名称。
     * @example `test
    `
     */
    "GroupName": string;
}
