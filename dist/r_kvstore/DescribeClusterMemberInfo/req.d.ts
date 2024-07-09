export interface DescribeClusterMemberInfoRequest {
    /**
     * 实例ID，可调用[DescribeInstances](~~60933~~)接口获取。
     * @example `r-bp1zxszhcgatnx****`
     */
    "InstanceId": string;
    /**
     * 实例列表的页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页可展示的最大记录数，取值：**30**、**50**、**100**，默认值为**30**。
     * @example `30`
     */
    "PageSize"?: number;
}
