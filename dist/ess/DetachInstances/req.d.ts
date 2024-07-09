export interface DetachInstancesRequest {
    /**
     * 伸缩组的ID。
     * @example `asg-bp1igpak5ft1flyp****`
     */
    "ScalingGroupId": string;
    /**
     * 是否修改期望实例数。取值范围：
     * - true：ECS实例、ECI实例或托管实例移出伸缩组后，期望实例数也减少相应数量。
     * - false：ECS实例、ECI实例或托管实例移出伸缩组后，期望实例数不会变化。
     * 默认值：true。
     * @example `true`
     */
    "DecreaseDesiredCapacity"?: boolean;
    /**
     * 指定是否停止使用ECS实例或ECI实例作为负载均衡实例的后端服务器（即将ECS实例或ECI实例移出负载均衡实例的默认服务器组和虚拟服务器组），以及是否将ECS实例或ECI实例移出RDS实例的访问白名单。
     * both：将ECS实例或ECI实例移出负载均衡实例的默认服务器组和虚拟服务器组，并将ECS实例或ECI实例移出RDS实例的访问白名单。
     * > 伸缩组移出托管实例时不支持设置该参数项。
     * @example `both`
     */
    "DetachOption"?: string;
    /**
     * 待移出ECS实例、ECI实例或托管实例的ID。
     */
    "InstanceIds": string[];
    /**
     * 伸缩组移出ECS实例或ECI实例时，是否触发缩容生命周期挂钩。取值范围：
     * - true：触发。
     * - false：不触发。
     * > 伸缩组移出托管实例时不支持设置该参数项。
     * 默认值：false。
     * @example `false`
     */
    "LifecycleHook"?: boolean;
    /**
     * 从伸缩组移出一批实例时，是否忽略其中无效的实例。取值范围：
     * - true：从伸缩组中移出一批实例时，会忽略其中无效的实例。如果存在无效的实例，并且有效的实例被成功移除时，伸缩活动执行状态也会显示为警告状态，可以从伸缩活动详情查看无效的实例。
     * - false：从伸缩组中移出一批实例时，不会忽略无效的实例。如果一批实例中存在无效的实例，请求会报错。
     * 默认值：false。
     * @example `false`
     */
    "IgnoreInvalidInstance"?: boolean;
    /**
     * 保证请求幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25965~~)。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
}
