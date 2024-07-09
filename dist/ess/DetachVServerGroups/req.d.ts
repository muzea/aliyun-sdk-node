export interface DetachVServerGroupsRequest {
    /**
     * 伸缩组所属地域的ID，例如cn-hangzhou、cn-shanghai。
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
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25965~~)。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
    /**
     * 是否从待移除虚拟服务器组中移除当前伸缩组内的实例。
     * - true：移除。如果该参数取值为`true`，则从伸缩组中移除负载均衡实例时，系统会将负载均衡实例后端服务器上与伸缩组关联的实例移除。
     * - false：不移除。如果该参数取值为`false`，则从伸缩组中移除负载均衡实例时，系统不会从负载均衡实例后端服务器上移除与伸缩组关联的实例。
     * 默认值：false。
     * @example `false`
     */
    "ForceDetach"?: boolean;
    /**
     * 待移出的虚拟服务器组的信息集合。
     */
    "VServerGroups": {
        /**
         * 后端服务器组属性。
         */
        VServerGroupAttributes: {
            /**
             * 虚拟服务器组的ID。
             * @example `rsp-bp1jp1rge****`
             */
            VServerGroupId: string;
            /**
             * 弹性伸缩将ECS实例或ECI实例添加到虚拟服务器组时使用的端口号，取值范围：1~65535。
             * @example `22`
             */
            Port: number;
        }[];
        /**
         * 虚拟服务器组所属负载均衡实例的ID。
         * >支持最多一次从伸缩组移除5个负载均衡实例。
         * @example `lb-bp1p90y3ya9h8s62d****`
         */
        LoadBalancerId: string;
    }[];
}
