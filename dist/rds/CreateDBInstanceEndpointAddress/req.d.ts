export interface CreateDBInstanceEndpointAddressRequest {
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
     * 外网连接地址的前缀。
     * @example `rm-****`
     */
    "ConnectionStringPrefix": string;
    /**
     * 外网连接地址端口号。
     * @example `3306`
     */
    "Port": string;
    /**
     * 连接地址的网络类型，仅支持外网类型，取值为**Public**。
     * @example `Public`
     */
    "IpType": string;
    /**
     * 资源组ID。可调用DescribeDBInstanceAttribute获取。
     * @example `rg-acfmy****`
     */
    "ResourceGroupId"?: string;
}
