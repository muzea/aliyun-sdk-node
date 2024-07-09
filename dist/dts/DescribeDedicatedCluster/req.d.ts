export interface DescribeDedicatedClusterRequest {
    /**
     * 集群ID。
     * @example `dtsCluster****`
     */
    "DedicatedClusterId": string;
    /**
     * 实例所在地域。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    "ResourceGroupId"?: string;
}
