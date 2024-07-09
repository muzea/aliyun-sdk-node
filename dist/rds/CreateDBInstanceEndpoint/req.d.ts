export interface CreateDBInstanceEndpointRequest {
    /**
     * 该参数用于保证请求的幂等性，防止重复提交请求。参数值由客户端生成，保证在不同请求间唯一。
     * 该参数值由ASCII字符组成，最长不超过64个字符，不能包含非ASCII字符。
     * @example `6000170000591aed949d0f****`
     */
    "ClientToken"?: string;
    /**
     * 实例ID。可调用DescribeDBInstances查询。
     * @example `rm-****`
     */
    "DBInstanceId": string;
    /**
     * 内网连接的VPC ID。
     * @example `vpc-xxxmmxjqqi****`
     */
    "VpcId": string;
    /**
     * 内网连接的交换机ID。
     * @example `vsw-bp1kqp****`
     */
    "VSwitchId": string;
    /**
     * 内网连接的IP地址。
     * @example `172.16.XX.XX`
     */
    "PrivateIpAddress"?: string;
    /**
     * 内网连接地址前缀。
     * 创建Endpoint的同时会自动创建一个内网连接地址，该参数表示内网连接地址的前缀。
     * @example `rm-****-ro`
     */
    "ConnectionStringPrefix": string;
    /**
     * 内网连接端口号。创建内网连接支持自定义端口号。
     * 取值范围：3000～5999
     * @example `3306`
     */
    "Port": string;
    /**
     * Endpoint类型，取值含义如下：
     * - Primary：实例的读写Endpoint
     * - Readonly：实例的只读Endpoint
     * @example `Readonly`
     */
    "DBInstanceEndpointType": string;
    /**
     * 用户自定义的Endpoint描述。
     * @example `for readonly business`
     */
    "DBInstanceEndpointDescription"?: string;
    /**
     * Endpoint节点相关信息列表。
     */
    "NodeItems": {
        /**
         * 实例ID。可调用DescribeDBInstances查询。
         * @example `rm-****`
         */
        DBInstanceId: string;
        /**
         * 节点ID。
         * @example `rn-xxxx-****`
         */
        NodeId: string;
        /**
         * 节点当前权重取值，按照该取值分配读流量。
         * 取值范围：0～100
         * @example `50`
         */
        Weight: number;
    }[];
    /**
     * 资源组ID。可调用DescribeDBInstanceAttribute获取。
     * @example `rg-acfmy****`
     */
    "ResourceGroupId"?: string;
}
