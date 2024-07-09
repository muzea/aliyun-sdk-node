export interface ReceiveDBInstanceRequest {
    /**
     * 主实例ID。可调用[DescribeDBInstances](~~26232~~)获取。
     * @example `rm-uf6wjk5*****`
     */
    "DBInstanceId": string;
    /**
     * 灾备实例ID。可调用[DescribeDBInstances](~~26232~~)获取。
     * @example `rm-tr2whku*****`
     */
    "GuardDBInstanceId": string;
}
