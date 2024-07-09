export interface DecreaseNodesRequest {
    /**
     * 区域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 集群ID。
     * @example `c-b933c5aac8fe****`
     */
    "ClusterId": string;
    /**
     * 节点组ID。
     * @example `ng-869471354ecd****`
     */
    "NodeGroupId": string;
    /**
     * 缩容节点数量。本次缩容节点数量。取值应小于当前节点组存活节点数。
     * @example `3`
     */
    "DecreaseNodeCount"?: number;
    /**
     * 节点ID数组。数组元数个数N的取值范围：1~500。
     * @example `["i-bp1cudc25w2bfwl5****"]`
     */
    "NodeIds"?: string[];
}
