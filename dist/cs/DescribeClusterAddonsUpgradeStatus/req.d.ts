export interface DescribeClusterAddonsUpgradeStatusRequest {
    /**
     * 集群ID。
     * @example `c23421cfa74454bc8b37163fd19af****`
     */
    "ClusterId": string;
    /**
     * 组件名称列表。
     */
    "componentIds": string[];
}
