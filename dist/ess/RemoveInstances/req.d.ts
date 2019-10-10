interface RemoveInstancesRequest {
    "RegionId"?: string;
    /**
    * 伸缩组的ID。
    * @example `AG6CQdPU8OKdwLjgZcJ****`
    */ "ScalingGroupId": string;
    "InstanceId": string[];
    /**
    * @example `123456123456`
    */ "OwnerId"?: number;
    /**
    * 指定被移出实例的动作，取值范围：
    * - recycle：实例进入停机不收费状态。
    *     > 仅在ScalingPolicy为recycle时生效。
    * - release：实例被释放。
    * 默认值：release。
    * @example `release`
    */ "RemovePolicy"?: string;
}
export { RemoveInstancesRequest };