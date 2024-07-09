export interface DescribeScalingActivitiesRequest {
    /**
     * 伸缩活动所属伸缩组的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 伸缩活动列表的页码，起始值：1。
     * 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数，最大值：50。
     * 默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 伸缩组的ID。
     * > 调用该API时，`ScalingGroupId`和`ScalingActivityIds`参数必须二选一进行配置，如果两个参数同时都不配置，则会报错。
     * @example `asg-bp18p2yfxow2dloq****`
     */
    "ScalingGroupId"?: string;
    /**
     * 伸缩活动的状态。取值范围：
     *
     * - Successful：执行成功的伸缩活动。
     * - Warning：部分执行成功的伸缩活动。
     * - Failed：执行失败的伸缩活动。
     * - InProgress：正在执行的伸缩活动。
     * - Rejected：执行伸缩活动请求被拒绝。
     *
     * @example `Successful`
     */
    "StatusCode"?: string;
    /**
     * 待查询伸缩活动的ID。
     * > 调用该API时，`ScalingGroupId`和`ScalingActivityIds`参数必须二选一进行配置，如果两个参数同时都不配置，则会报错。
     */
    "ScalingActivityIds"?: string[];
}
