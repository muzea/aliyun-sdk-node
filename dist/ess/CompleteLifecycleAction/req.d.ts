export interface CompleteLifecycleActionRequest {
    /**
     * 生命周期挂钩的ID。
     * @example `ash-bp14g3ee6bt3sc98****`
     */
    "LifecycleHookId": string;
    /**
     * 伸缩活动的等待状态标识符，您可以从生命周期挂钩指定的消息服务队列或主题中获取该值。
     * @example `aaaa-bbbbb-cccc-ddddd`
     */
    "LifecycleActionToken": string;
    /**
     * 生命周期挂钩等待状态结束后的下一步动作。取值范围：
     * - CONTINUE：继续响应弹性扩张活动，将ECS实例添加至伸缩组；继续响应弹性收缩活动，将ECS实例从伸缩组移除。
     * - ABANDON：终止弹性扩张活动，直接释放创建出来的ECS实例；继续响应弹性收缩活动，将ECS实例从伸缩组移除。
     * - ROLLBACK：针对弹性收缩活动，会拒绝释放ECS实例，进行回滚；针对弹性扩张活动，效果同ABANDON一样。
     * 如您不指定该参数，生命周期挂钩等待状态结束后的下一步动作则仍然保持为生命周期挂钩设置的`DefaultResult`值。
     * 伸缩组中存在多个生命周期挂钩时同步触发，最终的下一步动作如下：
     * - 对弹性收缩活动，在ABANDON或ROLLBACK类型生命周期挂钩触发的等待状态结束时，会将提前结束后续生命周期挂钩的等待状态。
     * - 在挂起弹性收缩活动的生命周期挂钩类型为CONTINUE时，或者对弹性扩张活动，后续生命周期挂钩会继续挂起伸缩活动，直到最后一个生命周期挂钩触发的等待状态结束。最终的下一步动作以最后一个结束等待状态的生命周期挂钩类型为准。
     * @example `CONTINUE`
     */
    "LifecycleActionResult"?: string;
    /**
     * 保证请求幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25965~~)。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
    /**
     * 伸缩组所属的地域ID。
     * @example `cn-qingdao`
     */
    "RegionId"?: string;
}
