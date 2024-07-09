export interface SyncUsersRequest {
    /**
     * 地域ID。
     * 您可以调用[ListRegions](~~188593~~)查询可以使用E-HPC的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 集群ID。
     * 您可以调用[ListClusters](~~87116~~)查询可以使用E-HPC的集群列表。
     * @example `ehpc-hz-gh5WKb****`
     */
    "ClusterId": string;
}
