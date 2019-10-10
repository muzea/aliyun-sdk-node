interface CreateLifecycleHookRequest {
    "RegionId"?: string;
    /**
    * 伸缩组的ID。
    * @example `AG6CQdPU8OKdwLjgZcJ****`
    */ "ScalingGroupId": string;
    /**
    * 生命周期挂钩适用的伸缩活动类型，取值范围：
    *
    * - SCALE_OUT：伸缩组弹性扩张活动
    * - SCALE_IN：伸缩组弹性收缩活动
    *
    * @example `SCALE_OUT`
    */ "LifecycleTransition": string;
    /**
    * @example `123456123456`
    */ "OwnerId"?: number;
    /**
    * 生命周期挂钩的名称。不能与当前伸缩组其他生命周期挂钩重名，长度为2~40个英文或中文字符，以数字、大小字母或中文开头，可包含数字、下划线（_）、连字符（-）和点号（.）。
    * 默认值为生命周期挂钩ID。
    * @example `test_SCALE_OUT`
    */ "LifecycleHookName"?: string;
    /**
    * 等待状态结束后的下一步动作，取值范围：
    * - CONTINUE：继续响应弹性扩张活动或者继续响应弹性收缩活动。
    * - ABANDON：直接释放弹性扩张活动创建出来的ECS实例或者直接将弹性收缩活动中的ECS实例从伸缩组移除。
    * 默认值：CONTINUE。
    * 当伸缩组发生弹性收缩活动（SCALE_IN）并触发多个生命周期挂钩时，DefaultResult为ABANDON的生命周期挂钩触发的等待状态结束时，会提前将其它对应的等待状态提前结束。其他情况下，下一步动作均以最后一个结束等待状态的下一步动作为准。
    * @example `CONTINUE`
    */ "DefaultResult"?: string;
    /**
    * 生命周期挂钩为伸缩组活动设置的等待时间，等待状态超时后会执行下一步动作。取值范围：30~21600，单位：秒。
    * 默认值：600。
    * 创建了生命周期挂钩后，您可以调用[RecordLifecycleActionHeartbeat](~~73846~~)延长ECS实例的等待时间，也可以调用[CompleteLifecycleAction](~~73847~~)提前结束伸缩活动的等待状态。
    * @example `600`
    */ "HeartbeatTimeout"?: number;
    /**
    * 伸缩活动的等待状态的固定字符串信息。参数长度不能超过128个字符。
    * 弹性伸缩每次推送消息到通知对象时，会同时发送您预先指定的NotificationMetadata参数值，便于管理和标记不同类别的通知信息。当您同时指定了NotificationArn参数时，NotificationMetadata参数方可生效。
    * @example `Test`
    */ "NotificationMetadata"?: string;
    /**
    * 生命周期挂钩通知对象标识符。支持消息服务MNS队列和主题，参数取值格式：acs:ess:{region}:{account-id}:{resource-relative-id}。
    * - region：伸缩组所在的地域
    * - account-id：阿里云账号ID
    * 例如：
    * - MNS队列：acs:ess:{region}:{account-id}:queue/{queuename}
    * - MNS主题：acs:ess:{region}:{account-id}:topic/{topicname}
    *
    * @example `acs:ess:cn-hangzhou:1111111111:queue/queue1`
    */ "NotificationArn"?: string;
    "LifecycleHook"?: string[];
}
export { CreateLifecycleHookRequest };