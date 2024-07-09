export interface ListNodesRequest {
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
     * 节点组ID列表。
     * @example `DD6B1B2A-5837-5237-ABE4-FF0C89568980`
     */
    "NodeGroupIds"?: string[];
    /**
     * 节点ID列表。
     * @example `c-b933c5aac8fe****`
     */
    "NodeIds"?: string[];
    /**
     * 节点名称列表。
     * @example `20`
     */
    "NodeNames"?: string[];
    /**
     * 私网IP。
     * @example `["172.12.0.91"]`
     */
    "PrivateIps"?: string[];
    /**
     * 公网IP。
     * @example `["120.13.14.38"]`
     */
    "PublicIps"?: string[];
    /**
     * 节点状态。
     * @example `["CREATED"]`
     */
    "NodeStates"?: string[];
    /**
     * 绑定的标签列表。
     */
    "Tags"?: any[];
}
