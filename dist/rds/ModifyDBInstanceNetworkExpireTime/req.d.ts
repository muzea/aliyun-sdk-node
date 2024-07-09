export interface ModifyDBInstanceNetworkExpireTimeRequest {
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-uf6wjk5****`
     */
    "DBInstanceId": string;
    /**
     *
     * 要延期的经典网络连接地址，经典网络连接地址有两种：
     * * 经典网络内网地址
     * * 经典网络读写分离地址
     * @example `rm-uf6wjk5****.mysql.rds.aliyuncs.com`
     */
    "ConnectionString": string;
    /**
     * 经典网络连接地址保留天数，取值：**1~120**，单位：天。
     * @example `7`
     */
    "ClassicExpiredDays": number;
}
