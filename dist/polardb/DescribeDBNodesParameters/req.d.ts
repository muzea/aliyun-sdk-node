export interface DescribeDBNodesParametersRequest {
    /**
     * 集群ID。
     * @example `pc-****************`
     */
    "DBClusterId": string;
    /**
     * 节点ID。支持传入多个节点ID，多个节点ID间用英文逗号（,）分隔。
     * @example `pi-****************,pi-****************`
     */
    "DBNodeIds": string;
}
