export interface ReleaseInstancePublicConnectionRequest {
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-uf6wjk5****`
     */
    "DBInstanceId": string;
    /**
     * 外网连接地址。可调用DescribeDBInstanceNetInfo获取。
     * @example `rm-uf6wjk5****.mysql.rds.aliyuncs.com`
     */
    "CurrentConnectionString": string;
}
