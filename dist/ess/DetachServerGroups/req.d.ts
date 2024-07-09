export interface DetachServerGroupsRequest {
    /**
     * 伸缩组所属的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 伸缩组ID。
     * @example `asg-bp18p2yfxow2dloq****`
     */
    "ScalingGroupId": string;
    /**
     * 保证请求幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25965~~)。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
    /**
     * 是否从待移除服务器组中移除当前伸缩组内的ECS实例或ECI实例。
     * - true：移除。
     * - false：不移除。
     * 默认值：false。
     * @example `false`
     */
    "ForceDetach"?: boolean;
    /**
     * 负载均衡服务器组的相关信息集合。
     */
    "ServerGroups": {
        /**
         * 负载均衡服务器组的ID。
         * @example `sgp-1gv2uidn2msy****`
         */
        ServerGroupId: string;
        /**
         * 负载均衡服务器组类型。取值范围：
         * - ALB：应用型负载均衡ALB（Application Load Balancer）。
         * - NLB：网络型负载均衡NLB（Network Load Balancer）。
         * @example `ALB`
         */
        Type: string;
        /**
         * 服务器组中ECS实例或ECI实例使用的端口号。
         * @example `22`
         */
        Port: number;
    }[];
}
