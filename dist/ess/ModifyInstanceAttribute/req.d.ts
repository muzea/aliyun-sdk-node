export interface ModifyInstanceAttributeRequest {
    /**
     * 伸缩组内ECS实例的ID。
     * @example `i-bp109k5j3dum1ce6****`
     */
    "InstanceId": string;
    /**
     * 伸缩组的ID。
     * @example `asg-bp18p2yfxow2dloq****`
     */
    "ScalingGroupId": string;
    /**
     * 手动添加到伸缩组的实例，是否将该实例的生命周期托管给伸缩组。取值范围：
     * - true：托管。该实例的生命周期由弹性伸缩管理，与伸缩组自动创建的实例一致。实例被移出伸缩组（不包括通过调用DetachInstances参数移出的实例）时会自动释放。
     * - false：不托管。该实例在被移出伸缩组时不会被释放。
     * > 该参数仅支持手动添加到伸缩组的实例，而不支持在伸缩组内创建的实例。
     * @example `true`
     */
    "Entrusted"?: boolean;
    /**
     * 伸缩组所属的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
