export interface StopClusterRequest {
    /**
     * 指定停止的集群ID。
     * 您可以调用[ListClusters](~~87116~~)查询集群列表。
     * @example `ehpc-hz-FYUr32****`
     */
    "ClusterId": string;
}
