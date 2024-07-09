export interface DescribeLifecycleHooksRequest {
    /**
     * 伸缩组的ID。
     * @example `asg-bp1igpak5ft1flyp****`
     */
    "ScalingGroupId"?: string;
    /**
     * 生命周期挂钩名称。
     * @example `lifecyclehook****`
     */
    "LifecycleHookName"?: string;
    /**
     * 实例状态列表的页码，起始值：1。
     * 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数，最大值：50。
     * 默认值：50。
     * @example `50`
     */
    "PageSize"?: number;
    /**
     * 生命周期挂钩的ID列表。
     */
    "LifecycleHookIds"?: string[];
    /**
     * 伸缩组所属地域的ID。
     * @example `cn-beijing`
     */
    "RegionId"?: string;
}
