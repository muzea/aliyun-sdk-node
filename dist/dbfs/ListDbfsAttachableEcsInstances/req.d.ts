export interface ListDbfsAttachableEcsInstancesRequest {
    /**
     * 所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 当前页码。默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数。默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 查询资源时的筛选键。
     * 与FilterValue配合使用，取值必须为InstanceId或InstanceName。
     * 传入InstanceId则根据ECS实例ID进行筛选，传入InstanceName则根据ECS实例名称进行筛选。
     * @example `InstanceName`
     */
    "FilterKey"?: string;
    /**
     * 查询资源时的筛选值。
     * 与FilterKey配合使用。
     * @example `autotest1`
     */
    "FilterValue"?: string;
}
