export interface DescribeScalingConfigurationsRequest {
    /**
     * 伸缩配置所属伸缩组的地域ID。
     * @example `cn-qingdao`
     */
    "RegionId": string;
    /**
     * 伸缩配置列表的页码，起始值：1。
     * 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数，最大值：50。
     * 默认值：10。
     * @example `50`
     */
    "PageSize"?: number;
    /**
     * 伸缩组的ID，您可以查询该伸缩组下所有的伸缩配置。
     * @example `asg-bp17pelvl720x3v7****`
     */
    "ScalingGroupId"?: string;
    /**
     * 待查询伸缩配置的ID。
     * 查询结果包括生效和未生效的伸缩配置，并通过返回参数`LifecycleState`进行标识。
     */
    "ScalingConfigurationIds"?: string[];
    /**
     * 待查询伸缩配置的名称。
     * 查询结果会忽略失效的伸缩配置名称，并且不报错。
     */
    "ScalingConfigurationNames"?: string[];
}
