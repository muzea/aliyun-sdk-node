export interface DescribeDBInstanceNetInfoRequest {
    /**
     * 实例ID。
     * > 您可以调用[DescribeDBInstances](~~86911~~)接口查看目标地域下所有的AnalyticDB PostgreSQL实例的详情，包括实例ID。
     * @example `gp-0xin9q82c33xc****`
     */
    "DBInstanceId": string;
    /**
     * 数据库连接地址。
     * > 如果不指定该参数，将会返回所有数据库连接地址的相关信息。
     * @example `gp-0xin9q82c33xc****-master.gpdb.rds.aliyuncs.com`
     */
    "ConnectionString"?: string;
}
