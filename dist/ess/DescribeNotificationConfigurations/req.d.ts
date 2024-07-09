export interface DescribeNotificationConfigurationsRequest {
    /**
     * 伸缩组的ID。
     * @example `asg-bp1igpak5ft1flyp****`
     */
    "ScalingGroupId": string;
    /**
     * 伸缩组所属的地域ID。
     * @example `cn-beijing`
     */
    "RegionId"?: string;
}
