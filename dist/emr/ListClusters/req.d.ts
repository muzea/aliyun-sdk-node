export interface ListClustersRequest {
    /**
     * 区域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 标记当前开始读取的位置，置空表示从头开始。
     * @example `eyJlY21OZXh0VG9rZW4iOiIxIiwidGFpaGFvTmV4dFRva2VuIjoiNTYiLCJ0YWloYW9OZXh0VG9rZW5JbnQiOjU2LCJlY21OZXh0VG9rZW5JbnQiOjF9`
     */
    "NextToken"?: string;
    /**
     * 一次获取的最大记录数。取值范围：1~100。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 集群名称。
     * @example `emrtest`
     */
    "ClusterName"?: string;
    /**
     * 资源组ID。
     * @example `rg-acfmzabjyop****`
     */
    "ResourceGroupId"?: string;
    /**
     * 集群ID列表。数组元素个数N的取值范围：1~100。
     * @example `rg-acfmzabjyop****`
     */
    "ClusterIds"?: string[];
    /**
     * 集群类型列表。数组元素个数N的取值范围：1~100。
     * @example `["c-b933c5aac8fe****"]`
     */
    "ClusterTypes"?: string[];
    /**
     * 集群状态数组。数组元素个数N的取值范围：1~100。
     * @example `["HADOOP"]`
     */
    "ClusterStates"?: string[];
    /**
     * 付费类型。数据元素个数N的取值范围：1~2。
     * @example `["ECS"]`
     */
    "PaymentTypes"?: string[];
    /**
     * 标签列表。数组元素个数N取值范围：1~20。
     * @example `["PayAsYouGo"]`
     */
    "Tags"?: any[];
}
