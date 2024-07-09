export interface AttachLoadBalancersRequest {
    /**
     * 伸缩组的ID。
     * @example `asg-bp1avr6ensitts3w****`
     */
    "ScalingGroupId": string;
    /**
     * 是否把当前伸缩组内的实例全部添加为负载均衡实例的后端服务器，取值范围：
     *
     * - true：添加。如果该参数值为`true`，则将负载均衡实例添加到伸缩组时，系统会将当前伸缩组中已有的实例全部添加为负载均衡实例的后端服务器。
     *   >如果负载均衡实例已添加至伸缩组，而您需要将伸缩组中全部实例添加为该负载均衡实例的后端服务器，则您可以再次将该负载均衡实例添加到伸缩组，并选择ForceAttach为true状态。
     * - false：不添加。如果该参数值为false，则将负载均衡实例添加到伸缩组时，系统不会将当前伸缩组中已有的实例添加为负载均衡实例的后端服务器。
     * 默认值：false。
     * @example `false`
     */
    "ForceAttach"?: boolean;
    /**
     * 保证请求幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25965~~)。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
    /**
     * 添加负载均衡实例时，是否采用异步调用的方式。异步调用能保证操作的事务性，即所有操作都执行成功或者某个操作失败时所有操作的执行结果都不生效，建议您采用异步调用。
     * 取值范围：
     * - true：异步调用。请求将返回伸缩活动的ID。
     * - false：同步调用。
     * 默认值：false。
     * @example `false`
     */
    "Async"?: boolean;
    /**
     * 需要添加的负载均衡CLB（原SLB）实例的ID列表。
     */
    "LoadBalancers"?: string[];
    /**
     * 负载均衡CLB（原SLB）配置列表。
     */
    "LoadBalancerConfigs"?: {
        /**
         * 负载均衡CLB（原SLB）实例的ID。
         * @example `147b46d767c-cn-qingdao-cm5**** `
         */
        LoadBalancerId: string;
        /**
         * 弹性伸缩将ECS实例或ECI实例添加到SLB服务器组后，ECS实例或ECI实例作为后端服务器的权重。权重越高，ECS实例或ECI实例将被分配到越多的访问请求。如果权重为0，则ECS实例或ECI实例不会收到访问请求。
         * 取值范围：0~100。
         * @example `10`
         */
        Weight: number;
    }[];
}
