export interface SetInstancesProtectionRequest {
    /**
     * 伸缩组的ID。
     * @example `asg-bp18p2yfxow2dloq****`
     */
    "ScalingGroupId": string;
    /**
     * 伸缩组自动缩容时是否保护ECS实例，使该实例不被终止或移出伸缩组。取值范围：
     * - true：保护ECS实例。
     * - false：不保护ECS实例。
     * @example `true`
     */
    "ProtectedFromScaleIn": boolean;
    /**
     * ECS实例的ID列表。
     */
    "InstanceIds": string[];
}
