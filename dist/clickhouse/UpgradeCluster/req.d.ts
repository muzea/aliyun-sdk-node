export interface UpgradeClusterRequest {
    /**
     * 集群ID。您可以通过调用[ListClusters](~~419072~~)接口查询目标地域下所有的集群信息，包括集群ID。
     * @example `cc-8vbsom12x476u****`
     */
    "DBClusterId": string;
    /**
     * 地域ID。您可以调用[DescribeRegions](~~416820~~)接口查看查询地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
