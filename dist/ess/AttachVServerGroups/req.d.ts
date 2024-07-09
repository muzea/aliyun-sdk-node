export interface AttachVServerGroupsRequest {
    /**
     * 伸缩组所属地域的ID。如cn-hangzhou、cn-shanghai，更多信息，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 伸缩组的ID。
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
     * 是否将当前伸缩组内的ECS实例或ECI实例添加到新增的虚拟服务器组。取值范围：
     * - true：添加。
     * - false：不添加。
     * 默认值：false。
     * @example `false`
     */
    "ForceAttach"?: boolean;
    /**
     * 伸缩组关联的虚拟服务器组的信息集合。
     */
    "VServerGroups": {
        /**
         * 虚拟服务器组属性。
         */
        VServerGroupAttributes: {
            /**
             * 虚拟服务器组的ID。
             * @example `lb-bp1u7etiogg38yvwz****`
             */
            VServerGroupId: string;
            /**
             * 弹性伸缩将ECS实例或ECI实例添加到虚拟服务器组时设置的权重，取值范围：0~100。
             * 默认值：50。
             * @example `100`
             */
            Weight: number;
            /**
             * 弹性伸缩将ECS实例或ECI实例添加到虚拟服务器组时使用的端口号，取值范围：1~65535。
             * @example `22`
             */
            Port: number;
        }[];
        /**
         * 虚拟服务器组所属负载均衡实例的ID。
         * @example `rsp-bp1jp1rge****
        `
         */
        LoadBalancerId: string;
    }[];
}
