export interface DeleteDedicatedHostClusterRequest {
    /**
     * 专有宿主机集群所在的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 专有宿主机集群ID。
     * @example `dc-bp12wlf6am0vz9v2****`
     */
    "DedicatedHostClusterId": string;
}
