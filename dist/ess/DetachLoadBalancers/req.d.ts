export interface DetachLoadBalancersRequest {
    /**
     * 伸缩组的ID。
     * @example `asg-bp1ffogfdauy0jw0****`
     */
    "ScalingGroupId": string;
    /**
     * 是否移除负载均衡实例后端服务器中属于当前伸缩组的ECS实例。取值范围：
     * - true：移除ECS实例。
     * - false：不移除ECS实例。
     * 默认值：false。
     * @example `false`
     */
    "ForceDetach"?: boolean;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25965~~)。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
    /**
     * 移除负载均衡实例时，是否采用异步调用的方式。异步调用能保证操作的事务性，即所有操作都执行成功或者某个操作失败时所有操作的执行结果都不生效，建议您采用异步调用。
     * 取值范围：
     * - true：异步调用。请求将返回伸缩活动的ID。
     * - false：同步调用。
     * 默认值：false。
     * @example `false`
     */
    "Async"?: boolean;
    /**
     * 负载均衡实例的ID，单次最多支持移除5台负载均衡实例。
     */
    "LoadBalancers": string[];
    /**
     * 伸缩组所属的地域ID。
     * @example `cn-qingdao`
     */
    "RegionId"?: string;
}
