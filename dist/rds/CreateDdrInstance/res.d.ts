export interface CreateDdrInstanceResponse {
    /**
     * 新实例ID。
     * @example `rm-****`
     */
    DBInstanceId: string;
    /**
     * 请求ID。
     * @example `E52666CC-330E-418A-8E5B-A19E3FB42D13`
     */
    RequestId: string;
    /**
     * 新实例连接端口。
     * >参数**DBInstanceNetType**决定该端口为内网端口或外网端口。
     * @example `3306`
     */
    Port: string;
    /**
     * 新实例连接地址。
     * >参数**DBInstanceNetType**决定该地址为内网或外网。
     * @example `rm-****.mysql.rds.aliyuncs.com`
     */
    ConnectionString: string;
    /**
     * 订单ID。
     * @example `2038691****`
     */
    OrderId: string;
}
