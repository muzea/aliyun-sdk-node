export interface MoveResourceGroupRequest {
    /**
     * 目标实例ID，可调用[DescribeInstances](~~144595~~)接口获取。
     * @example `ld-bp169l540vc6c****`
     */
    "ClusterId": string;
    /**
     * 目标资源组ID，可调用[ListResourceGroups](~~158855~~)接口查看资源组列表。
     * @example `rg-aekzrk6zzsy****`
     */
    "NewResourceGroupId": string;
}
