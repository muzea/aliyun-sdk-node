export interface ModifyLifecycleHookRequest {
    /**
     * 待修改生命周期挂钩的ID，用于指定生命周期挂钩。
     * @example `ash-bp1fxuqyi98w0aib****`
     */
    "LifecycleHookId"?: string;
    /**
     * 伸缩组的ID，用于指定生命周期挂钩。
     * @example `asg-bp18p2yfxow2dloq****`
     */
    "ScalingGroupId"?: string;
    /**
     * 待修改生命周期挂钩的名称，用于指定生命周期挂钩。
     * @example `test_SCAL****`
     */
    "LifecycleHookName"?: string;
    /**
     * 等待状态结束后的下一步动作，取值范围：
     * - CONTINUE：继续响应弹性扩张活动或者继续响应弹性收缩活动。
     * - ABANDON：直接释放弹性扩张活动创建出来的ECS实例或者直接将弹性收缩活动中的ECS实例从伸缩组移除。
     * - ROLLBACK：针对弹性收缩活动，会拒绝释放ECS实例，进行回滚；针对弹性扩张活动，会直接释放创建出来的ECS实例，效果同ABANDON一样。
     * 当伸缩组发生弹性收缩活动（SCALE_IN）并触发多个生命周期挂钩时，如果一个生命周期挂钩的DefaultResult取值为ABANDON或ROLLBACK，且该挂钩等待状态结束时，会提前将其他生命周期挂钩对应的等待状态提前结束。其他情况下，下一步动作均以最后一个结束等待状态的下一步动作为准。
     * @example `CONTINUE`
     */
    "DefaultResult"?: string;
    /**
     * 生命周期挂钩为伸缩组活动设置的等待时间，等待状态超时后会执行下一步动作。取值范围：30~21600，单位：秒。
     * 您可以调用RecordLifecycleActionHeartbeat延长ECS实例的等待时间，也可以调用CompleteLifecycleAction提前结束伸缩活动的等待状态。
     * @example `600`
     */
    "HeartbeatTimeout"?: number;
    /**
     * 生命周期挂钩适用的伸缩活动类型，取值范围：
     * - SCALE_OUT：伸缩组弹性扩张活动。
     * - SCALE_IN：伸缩组弹性收缩活动。
     * @example `SCALE_IN`
     */
    "LifecycleTransition"?: string;
    /**
     * 伸缩活动的等待状态的固定字符串信息。参数长度不能超过4096个字符。
     * 弹性伸缩每次推送消息到通知对象时，会同时发送您预先指定的NotificationMetadata参数值，便于管理和标记不同类别的通知信息。当您同时指定了NotificationArn参数时，NotificationMetadata参数方可生效。
     * @example `Test`
     */
    "NotificationMetadata"?: string;
    /**
     * 生命周期挂钩通知对象标识符，设置本参数时支持以下通知方式：
     * - 消息服务MNS队列，参数取值格式：acs:mns:{region-id}:{account-id}:queue/{queuename}。
     * - 消息服务MNS主题，参数取值格式：acs:mns:{region-id}:{account-id}:topic/{topicname}。
     * - 运维编排OOS模板，参数取值格式：acs:oos:{region-id}:{account-id}:template/{templatename}。
     * - 事件总线，参数取值格式：acs:eventbridge:{region-id}:{account-id}:eventbus/default。
     * 参数格式中的变量含义如下：
     * - region-id：伸缩组所在的地域的ID。
     * - account-id：阿里云账号ID。
     * - queuename：MNS队列的名称。
     * - topicname：MNS主题的名称。
     * - templatename：OOS模板的名称。
     * @example `acs:mns:cn-beijing:161456884340****:queue/modifyLifecycleHo****`
     */
    "NotificationArn"?: string;
    /**
     * 伸缩组所属的地域ID。
     * @example `cn-beijing`
     */
    "RegionId"?: string;
    /**
     * 修改当前生命周期挂钩的状态，取值范围：
     * - Active：表示启动生命周期挂钩。
     * - InActive：表示暂停生命周期挂钩。
     * 如果不设置该参数，则当前生命周期挂钩状态保持为原有状态。
     * >生命周期挂钩创建成功后，系统默认为启动状态。
     * @example `Active`
     */
    "LifecycleHookStatus"?: string;
}
