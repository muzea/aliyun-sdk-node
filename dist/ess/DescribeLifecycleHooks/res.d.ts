export interface DescribeLifecycleHooksResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 查询起始页数。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 查询每页返回行数。
     * @example `50`
     */
    PageSize: number;
    /**
     * 生命周期挂钩总个数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 生命周期挂钩信息列表。
     */
    LifecycleHooks: {
        /**
         * 实例挂起等待状态结束后的下一步动作。
         * @example `CONTINUE`
         */
        DefaultResult: string;
        /**
         * 生命周期挂钩ID。
         * @example `ash-bp19d1032y9kij96****`
         */
        LifecycleHookId: string;
        /**
         * 生命周期挂钩的名称。
         * @example `lifecyclehook****`
         */
        LifecycleHookName: string;
        /**
         * 生命周期挂钩对应的伸缩活动类型。
         * @example `SCALE_OUT`
         */
        LifecycleTransition: string;
        /**
         * 伸缩活动的等待状态的固定字符串信息。
         * @example `Test Lifecycle Hook.`
         */
        NotificationMetadata: string;
        /**
         * 生命周期挂钩通知对象标识符，参数格式如下：
         * - 未设置通知：`acs:ess:{region-id}:{account-id}:null/null`。
         * - 消息服务MNS队列：`acs:mns:{region-id}:{account-id}:queue/{queuename}`。
         * - 消息服务MNS主题：``acs:mns:{region-id}:{account-id}:topic/{topicname}``。
         * - 运维编排OOS模板：`acs:oos:{region-id}:{account-id}:template/{templatename}`。
         * - 事件总线，参数取值格式：`acs:eventbridge:{region-id}:{account-id}:eventbus/default`。
         * 参数格式中的变量含义如下：
         * - region-id：伸缩组所在的地域的ID。
         * - account-id：阿里云账号ID。
         * - queuename：MNS队列的名称。
         * - topicname：MNS主题的名称。
         * - templatename：OOS模板的名称。
         * @example `acs:ess:cn-beijing:161456884340****:null/null`
         */
        NotificationArn: string;
        /**
         * 生命周期挂钩为伸缩活动设置的等待时间，等待超时后会执行下一步动作。
         * @example `60`
         */
        HeartbeatTimeout: number;
        /**
         * 伸缩组ID。
         * @example `asg-bp1igpak5ft1flyp****`
         */
        ScalingGroupId: string;
        /**
         * 生命周期挂钩的状态，可能值：
         * - Active：启动状态。
         * - InActive：暂停状态。
         * @example `Active`
         */
        LifecycleHookStatus: string;
    }[];
}
