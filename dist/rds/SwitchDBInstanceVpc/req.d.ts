export interface SwitchDBInstanceVpcRequest {
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-uf6wjk5****`
     */
    "DBInstanceId": string;
    /**
     * VPC ID。
     * >与RDS实例需属于同一地域。
     * @example `vpc-uf6f7l4fg90****`
     */
    "VPCId": string;
    /**
     * 交换机ID。
     * > 与RDS实例需属于同一可用区。
     * @example `vsw-uf6adz52c2p****`
     */
    "VSwitchId": string;
    /**
     * 指定实例的私有IP地址，必须在**VSwitchId**参数中指定的交换机的网段范围内。
     * > 您可以调用DescribeVSwitches查询目标交换机的网段。
     * @example `10.23.XX.XX`
     */
    "PrivateIpAddress"?: string;
}
