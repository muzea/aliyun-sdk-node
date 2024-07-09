export interface ReleaseInstanceConnectionRequest {
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-uf6wjk5****`
     */
    "DBInstanceId": string;
    /**
     * 当前的外网连接地址。
     * @example `rm-uf6wjk5****.mysql.rds.aliyuncs.com`
     */
    "CurrentConnectionString": string;
    /**
     * 实例的网络类型。取值：
     * - **0**：VPC网络
     * - **1**：经典网络
     * @example `0`
     */
    "InstanceNetworkType": string;
}
