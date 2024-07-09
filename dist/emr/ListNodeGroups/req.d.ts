export interface ListNodeGroupsRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 集群ID。
     * @example `c-b933c5aac8fe****`
     */
    "ClusterId": string;
    /**
     * 标记当前开始读取的位置，置空表示从头开始。
     * @example `DD6B1B2A-5837-5237-ABE4-FF0C89568980`
     */
    "NextToken"?: string;
    /**
     * 一次获取的最大记录数。取值范围：1~100。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 节点组ID列表。数组元素个数N取值范围：1~100。
     * @example `c-b933c5aac8fe****`
     */
    "NodeGroupIds"?: string[];
    /**
     * 节点组名称列表。数组元素个数N取值范围：1~100。
     * @example `DD6B1B2A-5837-5237-ABE4-FF0C89568980`
     */
    "NodeGroupNames"?: string[];
    /**
     * 节点组类型列表。数组元素个数N取值范围：1~100。
     * @example `20`
     */
    "NodeGroupTypes"?: string[];
    /**
     * 节点组状态。数组元素个数N取值范围：1~100。
     * @example `["CORE"]`
     */
    "NodeGroupStates"?: string[];
}
