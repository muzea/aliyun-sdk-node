export interface CreateDBInstanceResponse {
    /**
     * 请求ID。
     * @example `5414A4E5-4C36-4461-95FC-************`
     */
    RequestId: string;
    /**
     * 实例ID。
     * @example `gp-bp12ga6v69h86****`
     */
    DBInstanceId: string;
    /**
     * 该参数已废弃，故不会返回参数值。
     * 您可以通过[DescribeDBInstanceAttribute](~~86910~~)接口查看实例的端口号。
     * @example `3432`
     */
    Port: string;
    /**
     * 该参数已废弃，故不会返回参数值。
     * 您可以通过[DescribeDBInstanceAttribute](~~86910~~)接口查看实例的连接地址。
     * @example `gp-bp12ga6v69h86****.gpdb.rds.aliyuncs.com`
     */
    ConnectionString: string;
    /**
     * 订单编号。
     * @example `111111111111`
     */
    OrderId: string;
}
