export interface RemoveInstancesRequest {
    /**
     * 伸缩组的ID。
     * @example `asg-bp18p2yfxow2dloq****`
     */
    "ScalingGroupId": string;
    /**
     * 指定被删除ECS实例的动作。取值范围：
     * - recycle：ECS实例触发了节省停机效果。
     *     > 仅在`ScalingPolicy`为`recycle`时生效。
     * - release：ECS实例被释放。
     * CreateScalingGroup的ScalingPolicy参数指定伸缩组的回收模式，但实例被删除时的具体动作，由RemoveInstances的RemovePolicy参数决定。例如：
     * - ScalingPolicy为recycle，且RemovePolicy为recycle，ECS实例触发了节省停机效果。
     * - ScalingPolicy为recycle，且RemovePolicy为release，ECS实例被释放。
     * - ScalingPolicy为release，且RemovePolicy为recycle，ECS实例被释放。
     * - ScalingPolicy为release，且RemovePolicy为release，ECS实例被释放。
     * 默认值：release。
     * @example `release`
     */
    "RemovePolicy"?: string;
    /**
     * 是否修改期望实例数。取值范围：
     * - true：从伸缩组删除ECS实例后，期望实例数也减少相应台数。
     * - false：从伸缩组删除ECS实例后，期望实例数不会变化。
     * 默认值：true。
     * @example `true`
     */
    "DecreaseDesiredCapacity"?: boolean;
    /**
     * 从伸缩组删除一批实例时，是否忽略其中无效的实例。取值范围：
     * - true：从伸缩组中删除一批实例时，会忽略其中无效的实例。如果存在无效的实例，并且有效的实例被成功删除时，伸缩活动执行状态也会显示为警告状态，可以从伸缩活动详情查看无效的实例。
     * - false：从伸缩组中删除一批实例时，不会忽略无效的实例。如果一批实例中存在无效的实例，请求会报错。
     * 默认值：false。
     * @example `false`
     */
    "IgnoreInvalidInstance"?: boolean;
    /**
     * 待删除ECS实例的ID。
     */
    "InstanceIds": string[];
    /**
     * 伸缩组所属的地域ID。
     * @example `cn-qingdao`
     */
    "RegionId"?: string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25965~~)。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
}
