interface CompleteLifecycleActionRequest {
    "RegionId"?: string;
    /**
    * 生命周期挂钩的ID。
    * @example `ash-****`
    */ "LifecycleHookId": string;
    /**
    * 伸缩活动的等待状态标识符，您可以从生命周期挂钩指定的消息服务队列或主题中获取该值。
    * @example `aaaa-bbbbb-cccc-ddddd`
    */ "LifecycleActionToken": string;
    /**
    * @example `123456123456`
    */ "OwnerId"?: number;
    /**
    * 等待状态结束后的下一步动作，取值范围：
    * - CONTINUE：继续响应弹性扩张活动或者继续响应弹性收缩活动。
    * - ABANDON：直接释放弹性扩张活动创建出来的ECS实例或者直接将弹性收缩活动中的ECS实例从伸缩组移除。
    * 默认值：CONTINUE。
    * 当伸缩组发生弹性收缩活动（SCALE_IN）并触发多个生命周期挂钩时，DefaultResult为ABANDON的生命周期挂钩触发的等待状态结束时，会提前将其它对应的等待状态提前结束。其他情况下，下一步动作均以最后一个结束等待状态的下一步动作为准。
    * @example `CONTINUE`
    */ "LifecycleActionResult"?: string;
}
export { CompleteLifecycleActionRequest };