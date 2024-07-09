export interface CreateReadOnlyDBInstanceResponse {
    /**
     * 创建的只读实例ID。
     * @example `rr-uf6wjk5****`
     */
    DBInstanceId: string;
    /**
     * 请求ID。
     * @example `1E43AAE0-BEE8-43DA-860D-EAF2AA0724DC`
     */
    RequestId: string;
    /**
     * 创建的只读实例内网数据库连接端口。
     * @example `3306`
     */
    Port: string;
    /**
     * 创建的只读实例内网数据库连接地址。
     * @example `rr-****.mysql.rds.aliyuncs.com`
     */
    ConnectionString: string;
    /**
     * 订单ID。
     * @example `10078937****`
     */
    OrderId: string;
}
