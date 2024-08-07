export interface CreateLifecycleHookRequest {
    /**
     * 目标伸缩组的ID。
     * @example `asg-bp1eyv4qn8ssgv43****`
     */
    "ScalingGroupId": string;
    /**
     * 生命周期挂钩的名称。不能与当前伸缩组其他生命周期挂钩重名，长度为2~64个英文或中文字符，以数字、大小写字母或中文开头，可包含数字、下划线（_）、短划线（-）和英文句号（.）。
     * 默认值为LifecycleHookId的值。
     * @example `lifecyclehook****`
     */
    "LifecycleHookName"?: string;
    /**
     * 生命周期挂钩适用的伸缩活动类型，取值范围：
     *
     * - SCALE_OUT：伸缩组弹性扩张活动
     * - SCALE_IN：伸缩组弹性收缩活动
     *
     * @example `SCALE_OUT`
     */
    "LifecycleTransition": string;
    /**
     * 等待状态结束后的下一步动作，取值范围：
     * - CONTINUE：继续响应弹性扩张活动或者继续响应弹性收缩活动。
     * - ABANDON：直接释放弹性扩张活动创建出来的ECS实例或者直接将弹性收缩活动中的ECS实例从伸缩组移除。
     * - ROLLBACK：针对弹性收缩活动，会拒绝释放ECS实例，进行回滚；针对弹性扩张活动，会直接释放创建出来的ECS实例，效果同ABANDON一样。
     * 当伸缩组发生弹性收缩活动（SCALE_IN）并触发多个生命周期挂钩时，如果一个生命周期挂钩的DefaultResult取值为ABANDON或ROLLBACK，且该挂钩等待状态结束时，会提前将其他生命周期挂钩对应的等待状态提前结束。其他情况下，下一步动作均以最后一个结束等待状态的下一步动作为准。
     * 默认值：CONTINUE
     * @example `CONTINUE`
     */
    "DefaultResult"?: string;
    /**
     * 生命周期挂钩为伸缩组活动设置的等待时间，等待状态超时后会执行下一步动作。取值范围：30~21600，单位：秒。
     * 创建了生命周期挂钩后，您可以调用RecordLifecycleActionHeartbeat延长ECS实例的等待时间，也可以调用CompleteLifecycleAction提前结束伸缩活动的等待状态。
     * 默认值：600
     * @example `600`
     */
    "HeartbeatTimeout"?: number;
    /**
     * 生命周期挂钩暂停伸缩活动时推送给NotificationArn（通知对象）的通知信息，便于管理和标记不同类别的通知信息。必须同时指定NotificationArn。参数长度不能超过4096个字符。
     * 如果NotificationArn指定为OOS模板，包括公共模板或者自定义模板，则NotificationMetadata必须指定为JSON字符串，且与OOS模板的参数相符。比如，`{"dbInstanceId": "dds-bp17661e0135****",  "modifyMode": "Append"}`，`dbInstanceId`和`modifyMode`为OOS模板中已定义的参数。OOS模板的部分参数有默认值，NotificationMetadata必须指定无默认值的参数，指定有默认值的参数时会覆盖原默认值，但以下参数请保持默认值，用于在伸缩活动运行时获取相关信息：
     * - `regionId`：伸缩活动执行的地域，默认为${regionId}
     * - `instanceIds`：伸缩活动关联的实例列表，默认为${instanceIds}
     * - `lifecycleHookId`：生命周期挂钩ID，默认为${lifecycleHookId}
     * - `lifecycleActionToken`：伸缩活动的等待状态标识符，用于提前结束当前的挂起活动，默认为${lifecycleActionToken}
     * - `scalingGroupId`：伸缩活动所属的伸缩组ID，默认为${scalingGroupId}
     * - `lifecycleActionResult` ：生命周期挂钩等待状态结束后的下一步动作，用于在OOS模板执行失败时提前结束当前的挂起活动，当DefaultResult为ROLLBACK时，参数值默认为ROLLBACK，其余情况默认为ABANDON。
     * >- 您可以根据需要设置lifecycleActionResult的值来覆盖当前默认值，取值范围为ABANDON、CONTINUE、ROLLBACK、${lifecycleActionResult}。
     * 其中，${lifecycleActionResult}表示lifecycleActionResult的值和DefaultResult保持一致。
     * - 您可以在[OOS控制台](https://oos.console.aliyun.com/)获取对应模板的参数的详细信息。
     * @example `Test lifecycle hook.`
     */
    "NotificationMetadata"?: string;
    /**
     * 生命周期挂钩通知对象标识符，不设置本参数表示不发送通知，设置本参数时支持以下通知方式：
     * - 消息服务MNS队列，参数取值格式：acs:mns:{region-id}:{account-id}:queue/{queuename} 。
     * - 消息服务MNS主题，参数取值格式：acs:mns:{region-id}:{account-id}:topic/{topicname}。
     * - 运维编排OOS模板，参数取值格式：acs:oos:{region-id}:{account-id}:template/{templatename}。
     * - 事件总线 ，参数取值格式：acs:eventbridge:{region-id}:{account-id}:eventbus/default。
     * 参数格式中的变量含义如下：
     * - region-id：伸缩组所在的地域的ID。
     * - account-id：阿里云账号ID，不支持RAM用户的账号ID。
     * - queuename：MNS队列的名称。
     * - topicname：MNS主题的名称。
     * - templatename：OOS模板的名称。
     * @example `acs:mns:cn-beijing:161456884340****:queue/modifyLifecycleHo****`
     */
    "NotificationArn"?: string;
}
