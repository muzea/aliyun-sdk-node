export interface DeleteScalingGroupRequest {
    /**
     * 伸缩组的ID。
     * @example `asg-bp18p2yfxow2dloq****`
     */
    "ScalingGroupId": string;
    /**
     * 如果伸缩组存在ECS实例或ECI实例，或者存在正在进行伸缩活动，是否强制删除伸缩组并移出和释放ECS实例或ECI实例。取值范围：
     * - true：强制删除伸缩组。会先停止伸缩组，拒绝接收新的伸缩活动请求，然后等待已有的伸缩活动完成，最后将伸缩组内所有ECS实例移出伸缩组（手动添加的ECS实例或ECI实例会被移出伸缩组，弹性伸缩自动创建的ECS实例或ECI实例会被自动删除）并删除伸缩组。
     * - false：不强制删除伸缩组。满足以下两个条件时，会先停止伸缩组，然后再删除伸缩组。
     *     - 伸缩组没有任何伸缩活动正在执行。
     *     - 伸缩组当前的ECS或ECI实例数量（Total Capacity）为0。
     * 默认值：false。
     * @example `false`
     */
    "ForceDelete"?: boolean;
    /**
     * 伸缩组所属的地域ID。
     * @example `cn-qingdao`
     */
    "RegionId"?: string;
}
