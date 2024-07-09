export interface ListComponentInstancesRequest {
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
     * 应用名称列表。
     * @example `["HDFS"]`
     */
    "ApplicationNames"?: string[];
    /**
     * 节点ID列表。
     * @example `["i-bp1cudc25w2bfwl5****"]`
     */
    "NodeIds"?: string[];
    /**
     * 节点名称列表。
     * @example `["core1-1"]`
     */
    "NodeNames"?: string[];
    /**
     * 组件名称列表。
     * @example `["DataNode"]`
     */
    "ComponentNames"?: string[];
    /**
     *
     * @example `null`
     */
    "ComponentStates"?: string[];
}
