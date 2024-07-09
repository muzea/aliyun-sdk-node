export interface DeleteLifecycleHookRequest {
    /**
     * 生命周期挂钩的ID。
     * @example `ash-bp14g3ee6bt3sc98****`
     */
    "LifecycleHookId"?: string;
    /**
     * 伸缩组的ID。
     * @example `asg-bp18p2yfxow2dloq****`
     */
    "ScalingGroupId"?: string;
    /**
     * 生命周期挂钩的名称。
     * @example `lifecyclehook****`
     */
    "LifecycleHookName"?: string;
    /**
     * 伸缩组所属的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
