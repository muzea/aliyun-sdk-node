export interface ModifyDBInstanceEndpointAddressRequest {
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
     * 实例的Endpoint ID。可调用DescribeDBInstanceEndpoints查询。
     * @example `ep-****`
     */
    "DBInstanceEndpointId": string;
    /**
     * 待修改的实例某个连接地址，可以是内网或外网连接地址。
     * @example `rm-uf6wjk5****.mysql.rds.aliyuncs.com`
     */
    "ConnectionString": string;
    /**
     * 内网连接的VPC ID。
     * @example `vpc-bp17xdic25d****`
     */
    "VpcId"?: string;
    /**
     * 内网连接的交换机ID。
     * @example `vsw-bp12u14ecz****`
     */
    "VSwitchId"?: string;
    /**
     * 内网IP地址。
     * @example `172.16.XX.XX`
     */
    "PrivateIpAddress"?: string;
    /**
     * 目标连接地址的前缀。只能修改ConnectionString参数的前缀部分。
     * @example `rm-bp181qoj4s34m33****`
     */
    "ConnectionStringPrefix"?: string;
    /**
     * 目标连接的端口号。
     * @example `3306`
     */
    "Port"?: string;
}
