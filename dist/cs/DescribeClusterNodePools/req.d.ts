export interface DescribeClusterNodePoolsRequest {
    /**
     * 集群ID。
     * @example `cc0f87de0b8fb403f86e10e204f83****`
     */
    "ClusterId": string;
    /**
     * 节点池名称。
     * @example `nodepool-test
    `
     */
    "NodepoolName"?: string;
}
