export interface DeleteDBNodesRequest {
    /**
     * 集群ID。
     * @example `pc-**************`
     */
    "DBClusterId": string;
    /**
     * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，保证在不同请求间唯一，大小写敏感、不超过64个ASCII字符。
     * @example `6000170000591aed949d0f54a343f1a42***********`
     */
    "ClientToken"?: string;
    /**
     * 节点类型。取值范围：
     * - RO
     * - STANDBY
     * - DLNode
     * @example `RO`
     */
    "DBNodeType"?: string;
    /**
     * 集群节点ID。
     * >您可以通过[DescribeDBClusters](~~185342~~)接口查看账号下所有集群的详细信息，包括节点ID。
     * @example `pi-************`
     */
    "DBNodeId": string[];
}
