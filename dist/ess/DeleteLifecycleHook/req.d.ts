interface DeleteLifecycleHookRequest {
    "RegionId"?: string;
    /**
    * @example `123456123456`
    */ "OwnerId"?: number;
    /**
    * 生命周期挂钩的ID。
    * @example `ash-****`
    */ "LifecycleHookId"?: string;
    /**
    * 伸缩组的ID。
    * @example `dP8VqSd9ENXPc0ciVmbc****`
    */ "ScalingGroupId"?: string;
    /**
    * 生命周期挂钩的名称。
    * @example `测试SCALE_IN`
    */ "LifecycleHookName"?: string;
}
export { DeleteLifecycleHookRequest };