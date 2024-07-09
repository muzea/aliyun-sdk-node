export interface DescribeScalingGroupsRequest {
    /**
     * 伸缩组所属地域的ID。
     * @example `cn-qingdao`
     */
    "RegionId": string;
    /**
     * 伸缩组列表的页码。起始值：1。
     * 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数。最大值：50。
     * 默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 伸缩组管理的实例类型。可能值：
     * - ECS：伸缩组内管理的伸缩实例为ECS实例。
     * - ECI：伸缩组内管理的伸缩实例为ECI实例。
     * @example `ECS`
     */
    "GroupType"?: string;
    /**
     * 待查询伸缩组的ID。
     * 查询结果会忽略失效的伸缩组ID，并且不报错。
     */
    "ScalingGroupIds"?: string[];
    /**
     * 待查询的伸缩组的名称。
     * 查询结果会忽略失效的伸缩组名称，并且不报错。
     */
    "ScalingGroupNames"?: string[];
    /**
     * 伸缩组的名称。
     * @example `scalinggroup****`
     */
    "ScalingGroupName"?: string;
    /**
     * 待查询的伸缩组所属的资源组ID。
     * >当没有伸缩组属于当前资源组下时，查询结果为空，并且不会报错。
     * @example `rg-123******`
     */
    "ResourceGroupId"?: string;
    /**
     * 伸缩组的标签信息集合。
     */
    "Tags"?: {
        /**
         * 伸缩组的标签键。
         * @example `Department`
         */
        Key: string;
        /**
         * 伸缩组的标签值。
         * @example `Finance
        `
         */
        Value: string;
    }[];
}
