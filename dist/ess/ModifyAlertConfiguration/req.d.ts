export interface ModifyAlertConfigurationRequest {
    /**
     * 伸缩组的ID。
     * @example `asg-bp1eyv4qn8ssgv43****`
     */
    "ScalingGroupId": string;
    /**
     * 需要发送短信、邮件通知的伸缩活动状态。
     */
    "ScaleStatuses"?: string[];
    /**
     * 伸缩组所属的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
