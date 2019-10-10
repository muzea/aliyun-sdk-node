interface SetInstancesProtectionRequest {
    "RegionId"?: string;
    /**
    * 伸缩组的ID。
    * @example `AG6CQdPU8OKdwLjgZcJ****`
    */ "ScalingGroupId": string;
    "InstanceId": string[];
    /**
    * 伸缩组自动缩容时是否保护ECS实例，使其不被终止或移出伸缩组，取值范围：
    * - true
    * - false
    *
    * @example `true`
    */ "ProtectedFromScaleIn": boolean;
    /**
    * @example `123456123456`
    */ "OwnerId"?: number;
}
export { SetInstancesProtectionRequest };