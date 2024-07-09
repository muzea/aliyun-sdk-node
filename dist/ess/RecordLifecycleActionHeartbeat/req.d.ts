export interface RecordLifecycleActionHeartbeatRequest {
    /**
     * 生命周期挂钩的ID。
     * @example `ash-bp1fxuqyi98w0aib****`
     */
    "lifecycleHookId": string;
    /**
     * 伸缩活动的等待状态标识符，您可以在实例被挂起的状态下，从生命周期挂钩指定的消息服务队列中，接收消息对应的详情页中获取。
     * 也可以调用[DescribeLifecycleActions](~~459333~~)获取。
     * 还可以从生命周期挂钩指定的消息服务主题中获取该值。
     * @example `F324B880-900E-4968-85DD-81691113****`
     */
    "lifecycleActionToken": string;
    /**
     * 生命周期挂钩为伸缩组活动设置的等待时间，等待状态超时后会执行默认执行策略。取值范围：30~21600，单位：秒。
     * 创建了生命周期挂钩后，您可以调用本接口延长ECS实例的等待时间，也可以调用[CompleteLifecycleAction](~~459335~~)提前结束伸缩活动的等待状态。
     * 默认值：600。
     * @example `600`
     */
    "heartbeatTimeout"?: number;
    /**
     * 伸缩组所属的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
