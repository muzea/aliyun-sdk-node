export interface AttachInstancesRequest {
    /**
     * 伸缩组的ID。
     * @example `asg-bp18p2yfxow2dloq****`
     */
    "ScalingGroupId": string;
    /**
     * 将已经存在的实例手动添加到伸缩组时，是否将该实例的生命周期托管给伸缩组。取值范围：
     * - true：托管。该实例的生命周期由弹性伸缩管理，与伸缩组自动创建的实例一致。实例被移出伸缩组（不包括通过调用DetachInstances参数移出的实例）时会自动释放。
     * - false：不托管。该实例在被移出伸缩组时不会被释放。
     * >包年包月实例、托管实例和伸缩组中节省停机实例不支持设置该参数项。
     * 默认值：false。
     * @example `false`
     */
    "Entrusted"?: boolean;
    /**
     * 待添加ECS实例、ECI实例、托管实例或者伸缩组中处于节省停机状态实例的ID。
     */
    "InstanceIds"?: string[];
    /**
     * ECS实例或ECI实例作为负载均衡实例后端服务器时的权重。
     */
    "LoadBalancerWeights"?: number[];
    /**
     * 伸缩组添加实例时，是否触发扩容生命周期挂钩。取值范围：
     * - true：触发。
     * - false：不触发。
     * >托管实例和伸缩组中节省停机实例不支持设置该参数项。
     * 默认值：false。
     * @example `false`
     */
    "LifecycleHook"?: boolean;
    /**
     * 伸缩组所属的地域ID。
     * @example `cn-qingdao`
     */
    "RegionId"?: string;
    /**
     * 保证请求幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25965~~)。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
}
