export interface DescribeScalingActivityDetailResponse {
    /**
     * 请求ID。
     * @example `B13527BF-1FBD-4334-A512-20F5E9D3FB4D`
     */
    RequestId: string;
    /**
     * 伸缩活动的ID。
     * @example `asa-bp1c9djwrgxjyk31****`
     */
    ScalingActivityId: string;
    /**
     * 伸缩活动的详细信息，即活动执行成功或失败。伸缩活动状态为拒绝时不显示。
     * @example `new ECS instances \"i-bp16t2cgmiiymeqv****\" are created.`
     */
    Detail: string;
}
