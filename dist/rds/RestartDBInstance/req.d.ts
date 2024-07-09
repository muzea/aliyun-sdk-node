export interface RestartDBInstanceRequest {
    /**
     * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
     * @example `ETnLKlblzczshOTUbOCz****`
     */
    "ClientToken"?: string;
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-uf6wjk5****`
     */
    "DBInstanceId": string;
    /**
     * 节点的唯一标识，用于重启指定节点。可调用DescribeDBInstanceHAConfig获取。
     * > 目前仅RDS SQL Server企业集群版实例支持重启备库。更多使用注意事项，请参见[重启备库](~~2411880~~)。
     * @example `2614****`
     */
    "NodeId"?: string;
}
