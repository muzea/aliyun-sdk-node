export interface ListNodesNoPagingRequest {
    /**
     * 待查询的集群ID。
     * 您可以通过调用[ListClusters](~~87116~~)获取集群ID。
     * @example `ehpc-hz-FYUr32****`
     */
    "ClusterId": string;
    /**
     * 节点类型，取值范围：
     * - Manager：管控节点
     * - Login：登录节点
     * - Compute：计算节点
     * 默认值：Compute
     * @example `Compute`
     */
    "Role"?: string;
    /**
     * 节点名称，支持模糊查询，支持MySQL的正则表达式。
     * @example `Compute0`
     */
    "HostName"?: string;
    /**
     * 节点列表排序方式。取值范围：
     * - Forward：按节点的加入时间正序排序。
     * - Backward：按节点的加入时间逆序排序。
     * 默认值：Forward
     * @example `Forward`
     */
    "Sequence"?: string;
}
