export interface ModifyDTCSecurityIpHostsForSQLServerRequest {
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-uf6wjk5****`
     */
    "DBInstanceId": string;
    /**
     * ECS实例的IP地址和Windows系统的计算机名。格式：`ip,hostname`。多个实例之间以英文分号（;）隔开。
     * >计算机名查看方式请参见[设置分布式事务白名单](~~124321~~)。
     * @example `192.168.XX.XX,k3ecstest`
     */
    "SecurityIpHosts": string;
    /**
     * 白名单分组名称。
     * @example `test1`
     */
    "WhiteListGroupName": string;
    /**
     * 地域ID。可调用DescribeDBInstanceAttribute获取。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
