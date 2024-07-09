export interface DescribeHostWebShellRequest {
    /**
     * 实例ID。
     * @example `rm-uf6wjk5****`
     */
    "DBInstanceId": string;
    /**
     * 实例所在的地域ID。可调用DescribeDBInstanceAttribute接口查询。
     * @example `cn-hangzhou`
     */
    "RegionID": string;
    /**
     * 实例主机名。可调用DescribeDBInstanceIpHostname接口查询。
     * @example `testHost1`
     */
    "HostName": string;
    /**
     * 需要登录到RDS实例主机的账号名称。
     * @example `testOsAccount1`
     */
    "AccountName": string;
    /**
     * 主机账号名的密码。
     * @example `****`
     */
    "AccountPassword": string;
}
