export interface DeleteClusterNodepoolRequest {
    /**
     * 集群ID。
     * @example `c61da77e8bfbc4c4c999af2b51b65****`
     */
    "ClusterId": string;
    /**
     * 节点池ID。
     * @example `np30db56bcac7843dca90b999c8928****`
     */
    "NodepoolId": string;
    /**
     * 是否强制删除。
     * @example `false`
     */
    "force"?: boolean;
}
