export interface AttachServerGroupsRequest {
    /**
     * 伸缩组所属地域的ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 伸缩组的ID。
     * @example `asg-bp1fo0dbtsbmqa9h****`
     */
    "ScalingGroupId": string;
    /**
     * 保证请求幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25965~~)。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
    /**
     * 是否将当前伸缩组内的ECS实例或ECI实例添加到新增的服务器组。取值范围：
     * - true：添加。
     * - false：不添加。
     * 默认值：false。
     * @example `false`
     */
    "ForceAttach"?: boolean;
    /**
     * 负载均衡服务器组的相关信息集合。
     */
    "ServerGroups": {
        /**
         * 负载均衡服务器组ID。
         * @example `sgp-5yc3bd9lfyh*****`
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
         * 弹性伸缩将ECS实例或ECI实例添加到服务器组后，ECS实例或ECI实例作为后端服务器的权重。取值范围：0~100。
         * 权重越高，ECS实例或ECI实例将被分配到越多的访问请求。如果权重为0，则ECS实例或ECI实例不会收到访问请求。
         * @example `100`
         */
        Weight: number;
        /**
         * 弹性伸缩将ECS实例或ECI实例添加到服务器组后，ECS实例或ECI实例使用的端口号。
         * 取值范围：1~65535。
         * @example `22`
         */
        Port: number;
    }[];
}
