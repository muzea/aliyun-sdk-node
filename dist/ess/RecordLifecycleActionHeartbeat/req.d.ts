interface RecordLifecycleActionHeartbeatRequest {
    "RegionId"?: string;
    /**
    * 生命周期挂钩的ID。
    * @example `ash-****`
    */ "lifecycleHookId": string;
    /**
    * 伸缩活动的等待状态标识符，您可以从生命周期挂钩指定的消息服务队列或主题中获取该值。
    * @example `aaaa-bbbbb-cccc-ddddd`
    */ "lifecycleActionToken": string;
    /**
    * @example `123456123456`
    */ "OwnerId"?: number;
    /**
    * 生命周期挂钩为伸缩组活动设置的等待时间，等待状态超时后会执行下一步动作。取值范围：30~21600，单位：秒。
    * 默认值：600。
    * 创建了生命周期挂钩后，您可以调用本接口延长ECS实例的等待时间，也可以调用[CompleteLifecycleAction](~~73847~~)提前结束伸缩活动的等待状态。
    * @example `600`
    */ "heartbeatTimeout"?: number;
}
export { RecordLifecycleActionHeartbeatRequest };